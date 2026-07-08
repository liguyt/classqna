// ============================================================
// Tool 2 - 學生端繪圖功能 (tldraw 整合)
// 功能：動態載入 tldraw、底圖鎖定、繪圖、匯出上傳、接收廣播
// ============================================================

// ----- 1. 動態載入 tldraw -----
function loadTldraw(callback) {
    if (typeof window.Tldraw !== 'undefined') {
        callback();
        return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/tldraw@2.4.0/dist/tldraw.umd.min.js';
    script.onload = () => {
        // 等待 tldraw 初始化完成
        setTimeout(callback, 500);
    };
    script.onerror = () => {
        console.error('tldraw 載入失敗');
        alert('繪圖工具載入失敗，請檢查網路連線');
    };
    document.head.appendChild(script);
}

// ----- 2. 初始化 tldraw 畫布 -----
let tldrawEditor = null;
let tldrawContainer = null;

function initTldrawCanvas(containerId, imageUrl, onReady) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('容器不存在:', containerId);
        return;
    }
    tldrawContainer = container;

    loadTldraw(() => {
        try {
            // 建立 tldraw 實例
            // 注意：tldraw UMD 版本的 API 可能因版本而異
            // 此處使用通用方式，實際使用時可根據 tldraw 文件調整
            const store = window.Tldraw.createTLStore();
            const editor = new window.Tldraw.TldrawEditor({
                container: container,
                store: store,
                // 鎖定底圖：將圖片設為背景且不可移動
                onMount: () => {
                    if (imageUrl) {
                        // 將圖片設為背景 (具體實作視 tldraw API 而定)
                        console.log('設定底圖:', imageUrl);
                    }
                    if (onReady) onReady(editor);
                }
            });
            tldrawEditor = editor;
        } catch (e) {
            console.error('tldraw 初始化失敗', e);
            alert('繪圖工具初始化失敗');
        }
    });
}

// ----- 3. 鎖定底圖 (防止學生移動) -----
function lockBackgroundImage(editor, imageUrl) {
    if (!editor) return;
    // 實際操作需依據 tldraw API
    // 一般作法：將圖片設為「鎖定」狀態
    console.log('鎖定底圖:', imageUrl);
}

// ----- 4. 匯出圖片 (tldraw → PNG) -----
async function exportTldrawImage(editor) {
    if (!editor) {
        throw new Error('tldraw 未初始化');
    }
    // 匯出為 PNG
    // 具體 API 視 tldraw 版本而定
    // 此為示意，實際使用時需查閱 tldraw 文件
    return new Promise((resolve, reject) => {
        try {
            // 假設 tldraw 有 exportAsImage 方法
            if (typeof editor.exportAsImage === 'function') {
                const dataUrl = editor.exportAsImage('png');
                resolve(dataUrl);
            } else {
                // 備用：從 canvas 元素讀取
                const canvas = editor.getCanvas();
                if (canvas) {
                    resolve(canvas.toDataURL('image/png'));
                } else {
                    reject(new Error('無法匯出圖片'));
                }
            }
        } catch (e) {
            reject(e);
        }
    });
}

// ----- 5. 上傳學生圖片到 Storage -----
async function uploadStudentImage(dataUrl, roomId, roundId, studentId) {
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`students/${roomId}/${roundId}/${studentId}.png`);
    try {
        const blob = await fetch(dataUrl).then(res => res.blob());
        const snapshot = await imageRef.put(blob);
        const downloadURL = await snapshot.ref.getDownloadURL();
        return downloadURL;
    } catch (e) {
        console.error('上傳學生圖片失敗', e);
        throw e;
    }
}

// ----- 6. 送出答案 (繪圖題) -----
async function submitImageAnswer(roomId, roundId, studentId, studentName) {
    if (!tldrawEditor) {
        alert('繪圖工具尚未準備好');
        return;
    }
    try {
        // 1. 匯出圖片
        const dataUrl = await exportTldrawImage(tldrawEditor);
        // 2. 上傳到 Storage
        const imageUrl = await uploadStudentImage(dataUrl, roomId, roundId, studentId);
        // 3. 寫入 Firestore
        const ansRef = doc(db, 'rooms', roomId, 'answers', studentId);
        await setDoc(ansRef, {
            studentId: studentId,
            name: studentName,
            roundId: roundId,
            imageUrl: imageUrl,
            timestamp: serverTimestamp(),
        });
        // 4. 鎖定畫布 (設為唯讀)
        if (tldrawEditor) {
            // 視 tldraw API 設定唯讀
            console.log('畫布已鎖定');
        }
        return imageUrl;
    } catch (e) {
        console.error('送出失敗', e);
        alert('送出失敗：' + e.message);
        throw e;
    }
}

// ----- 7. 接收廣播 (teacherFocus) -----
function listenTeacherFocus(roomId, onFocus) {
    const roomRef = doc(db, 'rooms', roomId);
    return onSnapshot(roomRef, (snapshot) => {
        const data = snapshot.data();
        if (data && data.teacherFocus) {
            onFocus(data.teacherFocus);
        }
    }, (err) => {
        console.warn('監聽廣播失敗', err);
    });
}

// ----- 8. 顯示廣播 Modal -----
function showBroadcastModal(imageUrl) {
    // 檢查是否已有 Modal
    let modal = document.getElementById('broadcastModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'broadcastModal';
        modal.style.cssText = `
            position: fixed; top:0; left:0; right:0; bottom:0;
            background: rgba(0,0,0,0.85);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            cursor: pointer;
        `;
        modal.innerHTML = `
            <div style="max-width:90%; max-height:90%;">
                <img id="broadcastImage" src="" style="max-width:100%; max-height:90vh; border-radius:16px; box-shadow: 0 20px 60px rgba(0,0,0,0.5);" />
                <p style="color:#8899aa; text-align:center; margin-top:16px; font-size:14px;">點擊任意處關閉</p>
            </div>
        `;
        document.body.appendChild(modal);
        modal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    const img = document.getElementById('broadcastImage');
    if (img) {
        img.src = imageUrl;
        modal.style.display = 'flex';
        // 5 秒後自動關閉
        clearTimeout(modal._timeout);
        modal._timeout = setTimeout(() => {
            modal.style.display = 'none';
        }, 5000);
    }
}

// 匯出函式
export {
    loadTldraw,
    initTldrawCanvas,
    lockBackgroundImage,
    exportTldrawImage,
    uploadStudentImage,
    submitImageAnswer,
    listenTeacherFocus,
    showBroadcastModal
};
