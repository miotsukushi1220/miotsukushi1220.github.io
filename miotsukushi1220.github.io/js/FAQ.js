const ham = document.querySelector('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
const nav = document.querySelector('#js-nav'); //js-navの要素を取得し、変数navに格納

ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
  console.log('ok!'); // コンソール画面でokというメッセージが出る
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});

// ページの読み込みが完了した後に実行
document.addEventListener("DOMContentLoaded", function() {
    // 質問と回答のセットを取得
    const qaSets = document.querySelectorAll(".qa-001");
    
    // 各セットごとに処理
    qaSets.forEach(function(qaSet) {
        const summary = qaSet.querySelector("summary");
        const content = qaSet.querySelector("p");
        
        // 回答の高さを取得して枠の高さに設定
        const contentHeight = content.clientHeight;
        qaSet.style.maxHeight = contentHeight + summary.clientHeight + "px";
    });
});
