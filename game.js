let startTime;

const targetTime = 19.2; // 目標時間（秒）
const tolerance = 0.01; // 許容誤差（±0.01秒）

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
        hintImage.style.display = 'none';
    } else {
        const endTime = Date.now();
        const elapsedTime = (endTime - startTime) / 1000;

        let message;
        let imageSrc;

        if (elapsedTime < targetTime - tolerance) {
            message = `チラ見せ (${elapsedTime.toFixed(3)}秒)`;
            imageSrc = 'hint.jpg.jpg';
        } else if (elapsedTime > targetTime + tolerance) {
            message = `長すぎ (${elapsedTime.toFixed(3)}秒)`;
            imageSrc = 'too-long.jpg.jpg';
        } else {
            message = `チラ見せではない☆祝☆卒業 (${elapsedTime.toFixed(3)}秒)`;
            imageSrc = 'perfect.jpg.jpg';
        }

        resultDisplay.textContent = message;

        // 画像を大きくして中央表示
        hintImage.src = imageSrc;
        hintImage.style.display = 'block';
        hintImage.style.marginLeft = 'auto';
        hintImage.style.marginRight = 'auto';
        hintImage.style.marginTop = '20px';
        hintImage.style.width = '600px'; // 横幅大きめ
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
