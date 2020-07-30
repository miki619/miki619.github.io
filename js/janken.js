function janken(myHand) {

    // じゃんけんの手を格納する配列を用意する
    var handArray = ['グー', 'チョキ', 'パー'];
    console.log(handArray[myHand]);

    // コンピュータの手をランダムに決める
    // Math.random：0以上1未満の疑似乱数を返す
    var random = Math.random() * 3;
    console.log(random);

    // Math.floor：引数（random）以下の最大の整数を返す
    var randomNum = Math.floor(random);
    console.log(randomNum);

    // 乱数からコンピュータの手を決める（乱数を3で割った余りを使う）
    // %：割った余り
    var computerHand = randomNum % 3;
    console.log(computerHand);

    var victory = (myHand - computerHand + 3) % 3;

    var messageArray = ['あいこです。', 'あなたの負けです。', 'あなたの勝ちです。'];

//    alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なので、" + messageArray[victory]);
    
    // JQueryを使ってHTMLに追記する
    $('#janken-result').append("<p>あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なので、" + messageArray[victory]+"</p>");
    
    // JQueryを使ってHTMLの文字列を置き換える
    $('#janken-result-p').text("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なので、" + messageArray[victory]+);

}

// 人間の手とコンピュータの手を比較して勝敗を判断する
//    if (myHand == 0) {
//        if (computerHand == 0) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なので、あいこです。");
//        } else if (computerHand == 1) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なので、あなたの勝ちです。");
//        } else if (computerHand == 2) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なので、あなたの負けです。");
//        }
//    } else if (myHand == 1) {
//        if (computerHand == 0) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なので、あなたの負けです。");
//        } else if (computerHand == 1) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なので、あいこです。");
//        } else if (computerHand == 2) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なので、あなたの勝ちです。");
//        }
//    } else if (myHand == 2) {
//        if (computerHand == 0) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なので、あなたの勝ちです。");
//        } else if (computerHand == 1) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なので、あなたの負けです。");
//        } else if (computerHand == 2) {
//            alert("あなたの手は" + handArray[myHand] + "、コンピュータの手は" + handArray[computerHand] + "なので、あいこです。");
//        }
//    }
