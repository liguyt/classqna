/**
 * skins.js — 霧臺國小虛擬教室 主題換膚系統
 *
 * 使用方式：
 *   import { applyAutoSkin, applySkin, getSkinList } from './skins.js';
 *   applyAutoSkin();        // 依日期自動套用節慶主題
 *   applySkin('halloween'); // 手動套用指定主題
 *   getSkinList();          // 取得所有可用主題清單
 */

const SKINS = {
    // ── 預設藍紫色系 ─────────────────────────────
    default: {
        label: '預設 💙',
        vars: {
            '--primary':       '#4f46e5',
            '--primary-light': 'rgba(79,70,229,0.1)',
            '--primary-dark':  '#3730a3',
            '--success':       '#10b981',
            '--danger':        '#ef4444',
            '--bg-from':       '#e0e7ff',
            '--bg-via':        '#ede9fe',
            '--bg-to':         '#fce7f3',
            '--surface':       'rgba(255,255,255,0.75)',
            '--border':        'rgba(255,255,255,0.6)',
            '--text-primary':  '#1e293b',
            '--text-secondary':'#64748b',
            '--btn-gradient':  'linear-gradient(135deg, #4f46e5, #7c3aed)',
        },
        bodyClass: '',
        overlay: null,
    },

    // ── 溫暖橘紅色系 ──────────────────────────────
    warm: {
        label: '溫暖 🧡',
        vars: {
            '--primary':       '#dc2626',
            '--primary-light': 'rgba(220,38,38,0.1)',
            '--primary-dark':  '#991b1b',
            '--bg-from':       '#fff1f2',
            '--bg-via':        '#fef3c7',
            '--bg-to':         '#fff7ed',
            '--btn-gradient':  'linear-gradient(135deg, #dc2626, #ea580c)',
        },
        bodyClass: 'skin-warm',
        overlay: null,
    },

    // ── 森林綠 ────────────────────────────────────
    forest: {
        label: '森林 🌿',
        vars: {
            '--primary':       '#16a34a',
            '--primary-light': 'rgba(22,163,74,0.1)',
            '--primary-dark':  '#15803d',
            '--bg-from':       '#f0fdf4',
            '--bg-via':        '#dcfce7',
            '--bg-to':         '#f0fdfa',
            '--btn-gradient':  'linear-gradient(135deg, #16a34a, #0d9488)',
        },
        bodyClass: 'skin-forest',
        overlay: null,
    },

    // ── 萬聖節 🎃 ─────────────────────────────────
    halloween: {
        label: '萬聖節 🎃',
        vars: {
            '--primary':       '#f97316',
            '--primary-light': 'rgba(249,115,22,0.15)',
            '--primary-dark':  '#c2410c',
            '--success':       '#84cc16',
            '--danger':        '#dc2626',
            '--bg-from':       '#1c1917',
            '--bg-via':        '#292524',
            '--bg-to':         '#1c1917',
            '--surface':       'rgba(41,37,36,0.85)',
            '--border':        'rgba(249,115,22,0.2)',
            '--text-primary':  '#fef3c7',
            '--text-secondary':'#d6d3d1',
            '--text-muted':    '#a8a29e',
            '--btn-gradient':  'linear-gradient(135deg, #f97316, #9a3412)',
        },
        bodyClass: 'skin-halloween',
        overlay: () => createFloatingOverlay([
            { emoji: '🦇', count: 8, speed: '8s', size: '28px' },
            { emoji: '🎃', count: 4, speed: '12s', size: '36px' },
            { emoji: '🕸️', count: 3, speed: '16s', size: '32px' },
        ]),
    },

    // ── 聖誕節 🎄 ─────────────────────────────────
    christmas: {
        label: '聖誕節 🎄',
        vars: {
            '--primary':       '#16a34a',
            '--primary-light': 'rgba(22,163,74,0.1)',
            '--primary-dark':  '#15803d',
            '--danger':        '#dc2626',
            '--bg-from':       '#f0fdf4',
            '--bg-via':        '#dcfce7',
            '--bg-to':         '#fef2f2',
            '--btn-gradient':  'linear-gradient(135deg, #16a34a, #dc2626)',
        },
        bodyClass: 'skin-christmas',
        overlay: () => createSnowOverlay(30),
    },

    // ── 農曆新年 🧧 ───────────────────────────────
    lunaryear: {
        label: '農曆新年 🧧',
        vars: {
            '--primary':       '#dc2626',
            '--primary-light': 'rgba(220,38,38,0.12)',
            '--primary-dark':  '#991b1b',
            '--success':       '#d97706',
            '--bg-from':       '#fef2f2',
            '--bg-via':        '#fef9c3',
            '--bg-to':         '#fff7ed',
            '--btn-gradient':  'linear-gradient(135deg, #dc2626, #d97706)',
        },
        bodyClass: 'skin-lunaryear',
        overlay: () => createFloatingOverlay([
            { emoji: '🧧', count: 6, speed: '10s', size: '30px' },
            { emoji: '🎆', count: 4, speed: '8s',  size: '28px' },
            { emoji: '🐉', count: 2, speed: '14s', size: '40px' },
        ]),
    },
};

// ── CSS 注入（只注入一次） ────────────────────────
function injectBaseCSS() {
    if (document.getElementById('skin-base-css')) return;
    const style = document.createElement('style');
    style.id = 'skin-base-css';
    style.textContent = `
/* ── 萬聖節暗色文字修正 ── */
body.skin-halloween .card,
body.skin-halloween .rank-item,
body.skin-halloween .tool-modal-box,
body.skin-halloween .modal-box,
body.skin-halloween .broadcast-box {
    color: #fef3c7;
}
body.skin-halloween input,
body.skin-halloween textarea,
body.skin-halloween select {
    background: rgba(60,55,50,0.8);
    color: #fef3c7;
    border-color: rgba(249,115,22,0.3);
}
/* ── 漂浮覆蓋層 ── */
#skin-overlay {
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    pointer-events: none; z-index: 1; overflow: hidden;
}
.float-item {
    position: absolute; opacity: 0.7; user-select: none;
    animation: floatAcross var(--speed) linear infinite;
}
@keyframes floatAcross {
    0%   { transform: translateX(110vw) translateY(0); }
    100% { transform: translateX(-20vw) translateY(0); }
}
/* ── 積雪 ── */
.snowflake {
    position: absolute; top: -20px; opacity: 0.8;
    animation: snowfall var(--dur) linear infinite;
    font-size: var(--size);
    user-select: none;
}
@keyframes snowfall {
    0%   { transform: translateY(-20px) rotate(0deg); opacity: 0.8; }
    100% { transform: translateY(100dvh) rotate(360deg); opacity: 0; }
}
    `;
    document.head.appendChild(style);
}

// ── 覆蓋層：漂浮 emoji ────────────────────────────
function createFloatingOverlay(items) {
    const overlay = document.createElement('div');
    overlay.id = 'skin-overlay';
    items.forEach(({ emoji, count, speed, size }) => {
        for (let i = 0; i < count; i++) {
            const el = document.createElement('span');
            el.className = 'float-item';
            el.textContent = emoji;
            el.style.cssText = [
                `--speed:${speed}`,
                `top:${Math.random() * 90}vh`,
                `font-size:${size}`,
                `animation-delay:-${(Math.random() * parseFloat(speed)).toFixed(1)}s`,
                `opacity:${0.5 + Math.random() * 0.4}`,
            ].join(';');
            overlay.appendChild(el);
        }
    });
    return overlay;
}

// ── 覆蓋層：積雪 ──────────────────────────────────
function createSnowOverlay(count) {
    const overlay = document.createElement('div');
    overlay.id = 'skin-overlay';
    for (let i = 0; i < count; i++) {
        const el = document.createElement('span');
        el.className = 'snowflake';
        const size = 12 + Math.random() * 16;
        const dur  = 5 + Math.random() * 10;
        el.textContent = ['❄️','❅','❆','✦'][Math.floor(Math.random() * 4)];
        el.style.cssText = [
            `left:${Math.random() * 100}vw`,
            `--dur:${dur.toFixed(1)}s`,
            `--size:${size.toFixed(0)}px`,
            `animation-delay:-${(Math.random() * dur).toFixed(1)}s`,
        ].join(';');
        overlay.appendChild(el);
    }
    return overlay;
}

// ── 套用主題 ──────────────────────────────────────
export function applySkin(skinId) {
    injectBaseCSS();
    const skin = SKINS[skinId] || SKINS.default;

    // 移除舊 overlay
    const old = document.getElementById('skin-overlay');
    if (old) old.remove();

    // 清除舊 body class
    Object.values(SKINS).forEach(s => {
        if (s.bodyClass) document.body.classList.remove(s.bodyClass);
    });

    // 套用 CSS 變數（合併 default + 指定 skin）
    const merged = { ...SKINS.default.vars, ...skin.vars };
    const root = document.documentElement;
    for (const [k, v] of Object.entries(merged)) root.style.setProperty(k, v);

    // 套用 body class
    if (skin.bodyClass) document.body.classList.add(skin.bodyClass);

    // 注入覆蓋層
    if (typeof skin.overlay === 'function') {
        const overlay = skin.overlay();
        if (overlay) document.body.appendChild(overlay);
    }

    // 儲存目前選擇
    try { localStorage.setItem('classqna_skin', skinId); } catch(e) {}
    console.log(`🎨 skin applied: ${skinId}`);
}

// ── 依日期自動偵測 ────────────────────────────────
export function detectSkin() {
    const now = new Date();
    const mm = now.getMonth() + 1, dd = now.getDate();
    if (mm === 10 && dd >= 20)           return 'halloween';  // 10/20–10/31
    if (mm === 12 && dd >= 15)           return 'christmas';  // 12/15–12/31
    if (mm === 1  && dd <= 5)            return 'christmas';  // 1/1–1/5（跨年）
    // 農曆新年 (簡單估算：1月末到2月中)
    if ((mm === 1 && dd >= 20) || (mm === 2 && dd <= 15)) return 'lunaryear';
    return 'default';
}

// ── 自動套用（啟動時呼叫） ────────────────────────
export function applyAutoSkin() {
    // 若老師手動選過，沿用上次選擇
    let saved = null;
    try { saved = localStorage.getItem('classqna_skin'); } catch(e) {}
    applySkin(saved && SKINS[saved] ? saved : detectSkin());
}

// ── 取得主題清單（供 UI 下拉選單使用） ────────────
export function getSkinList() {
    return Object.entries(SKINS).map(([id, s]) => ({ id, label: s.label }));
}
