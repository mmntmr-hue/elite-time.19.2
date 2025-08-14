let startTime;

const targetMin = 19.150; // ぴったり判定の下限
const targetMax = 19.249; // ぴったり判定の上限

const startButton = document.getElementById('startButton');
const resultDisplay = document.getElementById('result');
const hintImage = document.getElementById('hintImage');
const cheatDot = document.getElementById('cheatDot'); // 裏技用

// ゲームスタート／ストップ
startButton.addEventListener('click', function() {
    if (startButton.textContent === 'スタート') {
        startTime = Date.now();
        startButton.textContent = 'ストップ';
        resultDisplay.textContent = '計測中...';

        // 計測中の画像表示
        hintImage.src = 'keisoku.jpg.jpg';
        hintImage.style.display = 'block';
        hintImage.style.marginLeft = 'auto';
        hintImage.style.marginRight = 'auto';
        hintImage.style.marginTop = '20px';
        hintImage.style.width = '600px';
        hintImage.style.height = 'auto';

    } else {
        const endTime = Date.now();
        const elapsedTime = (endTime - startTime) / 1000;

        let message;
        let imageSrc;

        if (elapsedTime < targetMin) {
            message = `チラ見せ (${elapsedTime.toFixed(3)}秒)`;
            imageSrc = 'hint.jpg.jpg';
        } else if (elapsedTime > targetMax) {
            message = `長すぎ (${elapsedTime.toFixed(3)}秒)`;
            imageSrc = 'too-long.jpg.jpg';
        } else {
            message = `チラ見せではない☆祝☆卒業 (${elapsedTime.toFixed(3)}秒)`;
            imageSrc = 'perfect.jpg.jpg';
        }

        resultDisplay.textContent = message;

        // 結果画像を表示
        hintImage.src = imageSrc;
        hintImage.style.display = 'block';
        hintImage.style.marginLeft = 'auto';
        hintImage.style.marginRight = 'auto';
        hintImage.style.marginTop = '20px';
        hintImage.style.width = '600px';
        hintImage.style.height = 'auto';

        startButton.textContent = 'スタート';
    }
});

// 裏技：感嘆符下の点を押したら19.2秒ジャスト
cheatDot.addEventListener('click', function() {
    const elapsedTime = 19.2;

    let message = `チラ見せではない☆祝☆卒業 (${elapsedTime.toFixed(3)}秒)`;
    let imageSrc = 'perfect.jpg.jpg';

    resultDisplay.textContent = message;

    hintImage.src = imageSrc;
    hintImage.style.display = 'block';
    hintImage.style.marginLeft = 'auto';
    hintImage.style.marginRight = 'auto';
    hintImage.style.marginTop = '20px';
    hintImage.style.width = '600px';
    hintImage.style.height = 'auto';

    startButton.textContent = 'スタート';
});
