// function adjustFontSizeAndSpacing() {
//     const screenWidth = window.innerWidth;
//     const headerHeight = document.querySelector('#header').offsetHeight;
//     const homeElement = document.querySelector('.home');

//     if (homeElement) {
//         homeElement.style.marginTop = headerHeight + 'px';
//     }


//     // 画面幅に応じて文字の大きさを調整
//     const fontSize = Math.max(screenWidth / 80, 12); // 最小フォントサイズは12pxとする
//     document.documentElement.style.fontSize = fontSize + 'px';

//     // 画面幅に応じて改行幅と余白を調整
//     const lineLength = Math.min(50, Math.floor(screenWidth / fontSize));
//     const spaceWidth = fontSize * 0.6; // 1文字分のスペース幅
//     const paragraphs = document.querySelectorAll('.section-text, .trial p');
//     paragraphs.forEach(paragraph => {
//         paragraph.style.wordWrap = 'break-word';
//         paragraph.style.textAlign = 'justify';
//         paragraph.style.paddingLeft = '${spaceWidth + 10}px'; // 10pxは余白の幅
//         paragraph.style.textIndent = '-${spaceWidth}px'; // ネガティブテキストインデント
//     });
//     // ヘッダーの縦幅分の余白を上部に設定
//     document.body.style.paddingTop = `${headerHeight}px`;

// }    
    

// window.addEventListener('resize', adjustFontSizeAndSpacing);
// window.addEventListener('load', adjustFontSizeAndSpacing);

const ham = document.querySelector('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
const nav = document.querySelector('#js-nav'); //js-navの要素を取得し、変数navに格納

ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
  console.log('ok!'); // コンソール画面でokというメッセージが出る
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});