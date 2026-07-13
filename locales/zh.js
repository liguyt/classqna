// ============================================================
// locales/zh.js - 繁體中文語言包
// 霧臺國小教室Q&A
// ============================================================

export const zh = {
    // ===== 全域 =====
    appName: '霧臺國小教室Q&A',
    loading: '載入中...',
    confirm: '確定',
    cancel: '取消',
    close: '關閉',
    back: '上一頁',
    next: '下一步',
    save: '儲存',
    delete: '刪除',
    reset: '重置',

    // ===== 步驟 =====
    step: '步驟',
    step1: '步驟 1 / 5',
    step2: '步驟 2 / 5',
    step3: '步驟 3 / 5',
    step4: '步驟 4 / 5',
    step5: '步驟 5 / 5',

    // ===== 頁面 1：教室設定 =====
    classroomSetup: '教室設定',
    classroomSetupDesc: '設定教師姓名與上課班級，建立你的虛擬教室',
    teacherName: '教師姓名',
    teacherNamePlaceholder: '請輸入姓名（可跳過）',
    classSelect: '上課班級',
    customClass: '無班級（自訂人數）',
    createRoom: '建立教室',
    roomCode: '教室代碼',
    onlineCount: '線上人數',
    currentQuestion: '目前題號',
    roomCodeLabel: '教室',

    // ===== 頁面 2：命題與發布 =====
    questionSetup: '命題與發布',
    questionSetupDesc: '輸入題目內容，選擇題型、配分與作答時間',
    questionNote: '題目批註',
    questionNotePlaceholder: '請輸入本題題目',
    questionType: '題型',
    typeChoice: '選擇題 (A/B/C/D)',
    typeText: '文字題 (自由輸入)',
    score: '配分',
    seconds: '秒數',
    secondsPlaceholder: '秒',
    publish: '發布第 {n} 題',
    publishStatus: '尚未發布',
    published: '✅ 已發布第 {n} 題（配分：{score} 分）',
    publishImage: '圖片已上傳',

    // ===== 頁面 3：即時監控 =====
    monitoring: '即時監控',
    monitoringDesc: '觀察學生作答情況，管理作答流程',
    waitingStart: '等待開始',
    answering: '作答中...',
    stopped: '已停止',
    timeUp: '時間到！',
    startAnswering: '開始作答',
    stopAnswering: '停止作答',
    broadcast: '廣播',
    viewAllAnswers: '觀看所有回答',
    noClassSelected: '請勾選班級',
    noStudents: '尚無學生',
    waiting: '等待中',
    submitted: '已交',
    notSubmitted: '未交',
    specified: '點名',

    // ===== 頁面 4：結果公布 =====
    resultReveal: '結果公布',
    resultRevealDescChoice: '公布正確答案，學生端會顯示對錯',
    resultRevealDescText: '勾選答對的學生，即時加分',
    revealAnswer: '公布正確答案',
    hideResult: '隱藏結果',
    correct: '正確',
    wrong: '錯誤',
    gradingHint: '勾選即時加分，取消即時扣分',

    // ===== 頁面 5：結算 =====
    settlement: '結算與排行榜',
    settlementDesc: '檢視累計得分榜，匯出記錄或進入下一題',
    scoreboard: '累計得分榜',
    sortByScore: '依分數排序',
    sortBySeat: '依座號排序',
    clearAndNext: '清除本題 · 進入下一題',
    downloadExcel: '下載 Excel',
    noScore: '尚無得分記錄',

    // ===== 工具列 =====
    tools: '工具',
    qrCode: 'QR碼',
    broadcastTool: '廣播',
    lockScreen: '鎖定畫面',
    unlockScreen: '解鎖畫面',
    timer: '計時器',
    dice: '骰子',
    picker: '隨機點名',
    vote: '投票',
    group: '小組評分',

    // ===== 計時器 =====
    timerTitle: '計時器',
    timerDesc: '倒數計時或碼表，投影幕全班觀看',
    timerStart: '開始',
    timerStop: '停止',
    timerReset: '重置',
    timerModeCountdown: '⏱️ 倒數',
    timerModeStopwatch: '⏱️ 碼表',
    timerTimeUp: '⏰ 時間到！',

    // ===== 骰子 =====
    diceTitle: '骰子',
    diceDesc: '點擊擲骰，全班投影觀看結果',
    diceRoll: '擲骰',
    diceClear: '清除紀錄',

    // ===== 隨機點名器 =====
    pickerTitle: '隨機點名器',
    pickerDesc: '從全班隨機抽選，可切換排除已點名者',
    pickerPick: '抽選',
    pickerReset: '重置',
    pickerExclude: '排除已選名單',
    pickerAllPicked: '所有人都已點過！請重置',
    pickerRemaining: '剩餘 {n} 人',
    pickerExcludedCount: '已點 {n} 人',

    // ===== 投票 =====
    voteTitle: '即時投票',
    voteDesc: '建立投票選項，學生端即時同步',
    voteAddOption: '加入',
    voteOptionPlaceholder: '輸入選項',
    voteStart: '開始投票',
    voteStop: '結束投票',
    voteClear: '清除',
    voteNoOptions: '尚無選項，請加入投票選項',
    voteStarted: '✅ 投票已開始，學生端可投票',
    voteStopped: '⏹️ 投票已結束',
    voteNeedOptions: '至少需要 2 個選項',

    // ===== 小組評分 =====
    groupTitle: '小組評分',
    groupDesc: '建立小組，即時加減分，排行榜同步',
    groupAdd: '加入',
    groupNamePlaceholder: '輸入小組名稱',
    groupReset: '重置所有分數',
    groupNoGroups: '尚無小組，請加入',
    groupConfirmReset: '確定要重置所有小組分數嗎？',
    groupDeleteConfirm: '確定要刪除所有小組嗎？',
    groupFloatLabel: '小組分數',

    // ===== 廣播 =====
    broadcastTitle: '廣播訊息',
    broadcastDesc: '訊息將以跑馬燈方式顯示在學生端',
    broadcastPlaceholder: '請輸入要廣播的訊息...',
    broadcastSent: '✅ 廣播已發送！',

    // ===== QR Code =====
    qrTitle: '掃描 QR Code 加入教室',

    // ===== 鎖定畫面 =====
    lockConfirm: '✅ 學生畫面已鎖定',
    unlockConfirm: '✅ 學生畫面已解鎖',

    // ===== 錯誤訊息 =====
    errorCreateRoom: '❌ 建立教室失敗',
    errorNoClass: '請至少勾選一個班級，或啟用「無班級」模式',
    errorNoImage: '請先上傳圖片',
    errorUploadImage: '上傳圖片失敗',
    errorPublish: '請先停止作答再發布新題目',
    errorNoRoom: '請先建立教室',
    errorNoStudents: '該教室沒有學生資料',
    errorSeatTaken: '此座號已被其他學生使用，請確認座號是否正確。',
    errorSeatInvalid: '座號無效',
    errorNoAnswer: '你已經送出答案，不能再修改。',
    errorNotAnswering: '教師尚未開放作答，請稍候。',
    errorScreenLocked: '教師已鎖定畫面，請稍候。',

    // ===== 成功訊息 =====
    successRoomCreated: '✅ 教室已建立！代碼：{code}',
    successCleared: '✅ 已清除，請發布下一題。',
    successExcelDownloaded: '✅ Excel 已下載！',
    successImageUploaded: '📷 圖片已上傳',
    successAnswerSubmitted: '✅ 已成功送出！',

    // ===== 學生端 =====
    studentTitle: '霧臺國小',
    studentLogin: '請輸入教室代碼並選擇座號',
    studentRoomInput: '4 位數代碼',
    studentJoin: '加入教室',
    studentSelectClass: '-- 請選擇班級 --',
    studentSelectSeat: '-- 請選擇座號 --',
    studentLoginStatus: '輸入教室代碼後加入',
    studentWaiting: '等待教師開始作答',
    studentAnswering: '請作答',
    studentLocked: '已送出答案（鎖定）',
    studentScreenLocked: '教師已鎖定畫面',
    studentSubmitted: '已成功送出！',
    studentChange: '更換',
    studentRound: '題號：{n}',
    studentQuestion: '等待教師出題...',
};
