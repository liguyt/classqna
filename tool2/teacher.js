// ============================================================
// Tool 2 - 教師端繪圖功能 (tldraw 整合)
// 功能：圖片上傳、九宮格監控、同步廣播、JSZip 打包
// ============================================================

// ----- 1. 圖片上傳與布題 -----
async function uploadQuestionImage(file, roomId, roundId) {
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`teachers/${STATE.teacherName}/${roomId}/question_${roundId}.png`);
    try {
        const snapshot = await imageRef.put(file);
        const downloadURL = await snapshot.ref.getDownloadURL();
        return downloadURL;
    } catch (e) {
        console.error('上傳圖片失敗', e);
        throw e;
    }
}

// ----- 2. 教師端布題（圖片題）-----
async function publishImageQuestion(roomId, roundId, imageUrl) {
    const roomRef = doc(db, 'rooms', roomId);
    await updateDoc(roomRef, {
        currentRoundId: roundId,
        questionType: 'image',
        questionImageUrl: imageUrl,
        isAnswering: false,
        revealedAnswer: null,
        clearAll: true,
        specifiedStudents: [],
        teacherFocus: null, // 清除廣播
    });
    await sleep(300);
    await updateDoc(roomRef, { clearAll: false });
}

// ----- 3. 監聽學生圖片答案（九宮格）-----
function listenImageAnswers(roomId, roundId, onUpdate) {
    const q = query(
        collection(db, 'rooms', roomId, 'answers'),
        where('roundId', '==', roundId),
        where('imageUrl', '!=', null)
    );
    return onSnapshot(q, (snapshot) => {
        const results = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            results.push({
                studentId: data.studentId,
                name: data.name,
                imageUrl: data.imageUrl,
                timestamp: data.timestamp?.toDate?.() || new Date()
            });
        });
        // 依座號排序
        results.sort((a, b) => a.studentId.localeCompare(b.studentId));
        onUpdate(results);
    }, (err) => {
        console.warn('監聽圖片答案失敗', err);
    });
}

// ----- 4. 同步廣播（點選縮圖）-----
async function setTeacherFocus(roomId, imageUrl) {
    const roomRef = doc(db, 'rooms', roomId);
    await updateDoc(roomRef, {
        teacherFocus: imageUrl || null
    });
}

// ----- 5. JSZip 打包下載 -----
async function downloadAllWithImages(roomId, history, studentImages) {
    try {
        const JSZip = window.JSZip;
        if (!JSZip) {
            alert('JSZip 尚未載入，請檢查網路');
            return;
        }
        const zip = new JSZip();

        // 1. 加入 Excel 成績表
        const excelData = generateExcelData(history);
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(excelData);
        XLSX.utils.book_append_sheet(wb, ws, '成績表');
        const excelBuffer = XLSX.write(wb, { type: 'array', bookType: 'xlsx' });
        zip.file(`成績表_${roomId}.xlsx`, excelBuffer);

        // 2. 加入所有學生圖片
        const imageFolder = zip.folder('學生圖片');
        for (const item of studentImages) {
            if (!item.imageUrl) continue;
            try {
                const response = await fetch(item.imageUrl);
                const blob = await response.blob();
                const ext = blob.type.split('/')[1] || 'png';
                const fileName = `${item.studentId}_${item.name}.${ext}`;
                imageFolder.file(fileName, blob);
            } catch (e) {
                console.warn('下載圖片失敗', item.studentId, e);
            }
        }

        // 3. 下載 ZIP
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(zipBlob);
        link.download = `課堂記錄_${roomId}_${new Date().toISOString().slice(0,10)}.zip`;
        link.click();
        URL.revokeObjectURL(link.href);

        return true;
    } catch (e) {
        console.error('打包下載失敗', e);
        alert('打包下載失敗：' + e.message);
        return false;
    }
}

// 匯出函式 (供主程式呼叫)
export {
    uploadQuestionImage,
    publishImageQuestion,
    listenImageAnswers,
    setTeacherFocus,
    downloadAllWithImages
};
