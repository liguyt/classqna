// ============================================================
// locales/en.js - English Language Pack
// Wutai Elementary Classroom Q&A
// ============================================================

export const en = {
    // ===== Global =====
    appName: 'Wutai Elementary Classroom Q&A',
    loading: 'Loading...',
    confirm: 'Confirm',
    cancel: 'Cancel',
    close: 'Close',
    back: 'Back',
    next: 'Next',
    save: 'Save',
    delete: 'Delete',
    reset: 'Reset',

    // ===== Steps =====
    step: 'Step',
    step1: 'Step 1 / 5',
    step2: 'Step 2 / 5',
    step3: 'Step 3 / 5',
    step4: 'Step 4 / 5',
    step5: 'Step 5 / 5',

    // ===== Page 1: Classroom Setup =====
    classroomSetup: 'Classroom Setup',
    classroomSetupDesc: 'Set teacher name and class, create your virtual classroom',
    teacherName: 'Teacher Name',
    teacherNamePlaceholder: 'Enter your name (optional)',
    classSelect: 'Class',
    customClass: 'Custom (No Class)',
    createRoom: 'Create Classroom',
    roomCode: 'Room Code',
    onlineCount: 'Online',
    currentQuestion: 'Question #',
    roomCodeLabel: 'Room',

    // ===== Page 2: Question Setup =====
    questionSetup: 'Question & Publish',
    questionSetupDesc: 'Enter question content, select type, score and time limit',
    questionNote: 'Question Note',
    questionNotePlaceholder: 'Enter the question',
    questionType: 'Type',
    typeChoice: 'Multiple Choice (A/B/C/D)',
    typeText: 'Free Text',
    score: 'Score',
    seconds: 'Seconds',
    secondsPlaceholder: 'sec',
    publish: 'Publish Q{n}',
    publishStatus: 'Not published',
    published: '✅ Published Q{n} (Score: {score})',
    publishImage: 'Image uploaded',

    // ===== Page 3: Monitoring =====
    monitoring: 'Monitoring',
    monitoringDesc: 'Observe student responses, manage the answering process',
    waitingStart: 'Waiting to start',
    answering: 'Answering...',
    stopped: 'Stopped',
    timeUp: 'Time\'s up!',
    startAnswering: 'Start Answering',
    stopAnswering: 'Stop Answering',
    broadcast: 'Broadcast',
    viewAllAnswers: 'View All Answers',
    noClassSelected: 'Please select a class',
    noStudents: 'No students',
    waiting: 'Waiting',
    submitted: 'Submitted',
    notSubmitted: 'Not Submitted',
    specified: 'Called',

    // ===== Page 4: Reveal Results =====
    resultReveal: 'Reveal Results',
    resultRevealDescChoice: 'Reveal the correct answer, students see correct/incorrect',
    resultRevealDescText: 'Check students who answered correctly, points added instantly',
    revealAnswer: 'Reveal Correct Answer',
    hideResult: 'Hide Result',
    correct: 'Correct',
    wrong: 'Wrong',
    gradingHint: 'Check to add points, uncheck to deduct',

    // ===== Page 5: Settlement =====
    settlement: 'Settlement & Leaderboard',
    settlementDesc: 'View cumulative scoreboard, export records or continue to next question',
    scoreboard: 'Scoreboard',
    sortByScore: 'Sort by Score',
    sortBySeat: 'Sort by Seat',
    clearAndNext: 'Clear & Next Question',
    downloadExcel: 'Download Excel',
    noScore: 'No scores yet',

    // ===== Toolbar =====
    tools: 'Tools',
    qrCode: 'QR Code',
    broadcastTool: 'Broadcast',
    lockScreen: 'Lock Screen',
    unlockScreen: 'Unlock Screen',
    timer: 'Timer',
    dice: 'Dice',
    picker: 'Random Picker',
    vote: 'Vote',
    group: 'Group Score',

    // ===== Timer =====
    timerTitle: 'Timer',
    timerDesc: 'Countdown or stopwatch, display on projector for the whole class',
    timerStart: 'Start',
    timerStop: 'Stop',
    timerReset: 'Reset',
    timerModeCountdown: '⏱️ Countdown',
    timerModeStopwatch: '⏱️ Stopwatch',
    timerTimeUp: '⏰ Time\'s up!',

    // ===== Dice =====
    diceTitle: 'Dice',
    diceDesc: 'Click to roll, display on projector for the whole class',
    diceRoll: 'Roll',
    diceClear: 'Clear History',

    // ===== Random Picker =====
    pickerTitle: 'Random Picker',
    pickerDesc: 'Pick a random student from the whole class, can exclude already picked',
    pickerPick: 'Pick',
    pickerReset: 'Reset',
    pickerExclude: 'Exclude already picked',
    pickerAllPicked: 'Everyone has been picked! Please reset.',
    pickerRemaining: '{n} remaining',
    pickerExcludedCount: '{n} picked',

    // ===== Vote =====
    voteTitle: 'Instant Vote',
    voteDesc: 'Create voting options, students vote in real-time',
    voteAddOption: 'Add',
    voteOptionPlaceholder: 'Enter option',
    voteStart: 'Start Vote',
    voteStop: 'Stop Vote',
    voteClear: 'Clear',
    voteNoOptions: 'No options yet, please add voting options',
    voteStarted: '✅ Vote started, students can vote now',
    voteStopped: '⏹️ Vote ended',
    voteNeedOptions: 'At least 2 options required',

    // ===== Group Score =====
    groupTitle: 'Group Score',
    groupDesc: 'Create groups, add/deduct scores in real-time, leaderboard syncs',
    groupAdd: 'Add',
    groupNamePlaceholder: 'Enter group name',
    groupReset: 'Reset All Scores',
    groupNoGroups: 'No groups yet, please add',
    groupConfirmReset: 'Are you sure you want to reset all group scores?',
    groupDeleteConfirm: 'Are you sure you want to delete all groups?',
    groupFloatLabel: 'Group Scores',

    // ===== Broadcast =====
    broadcastTitle: 'Broadcast Message',
    broadcastDesc: 'Message will be displayed as a marquee on student devices',
    broadcastPlaceholder: 'Enter broadcast message...',
    broadcastSent: '✅ Broadcast sent!',

    // ===== QR Code =====
    qrTitle: 'Scan QR Code to Join Classroom',

    // ===== Lock Screen =====
    lockConfirm: '✅ Student screens locked',
    unlockConfirm: '✅ Student screens unlocked',

    // ===== Error Messages =====
    errorCreateRoom: '❌ Failed to create classroom',
    errorNoClass: 'Please select at least one class, or enable "Custom Class"',
    errorNoImage: 'Please upload an image first',
    errorUploadImage: 'Failed to upload image',
    errorPublish: 'Please stop answering before publishing a new question',
    errorNoRoom: 'Please create a classroom first',
    errorNoStudents: 'No student data in this classroom',
    errorSeatTaken: 'This seat is already taken by another student. Please check your seat number.',
    errorSeatInvalid: 'Invalid seat number',
    errorNoAnswer: 'You have already submitted your answer and cannot modify it.',
    errorNotAnswering: 'The teacher has not started answering yet. Please wait.',
    errorScreenLocked: 'The teacher has locked the screen. Please wait.',

    // ===== Success Messages =====
    successRoomCreated: '✅ Classroom created! Code: {code}',
    successCleared: '✅ Cleared, please publish the next question.',
    successExcelDownloaded: '✅ Excel downloaded!',
    successImageUploaded: '📷 Image uploaded',
    successAnswerSubmitted: '✅ Successfully submitted!',

    // ===== Student Side =====
    studentTitle: 'Wutai Elementary',
    studentLogin: 'Enter classroom code and select your seat',
    studentRoomInput: '4-digit code',
    studentJoin: 'Join',
    studentSelectClass: '-- Select Class --',
    studentSelectSeat: '-- Select Seat --',
    studentLoginStatus: 'Enter classroom code to join',
    studentWaiting: 'Waiting for teacher to start',
    studentAnswering: 'Please answer',
    studentLocked: 'Answer locked',
    studentScreenLocked: 'Teacher locked screen',
    studentSubmitted: 'Successfully submitted!',
    studentChange: 'Change',
    studentRound: 'Q{n}',
    studentQuestion: 'Waiting for teacher\'s question...',
};
