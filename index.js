// let val = "hello";
// console.log(val);

// // letは後から代入できる（再代入）

// val = "こんにちは"
// console.log(val)

// // constは定数
// const val2 = "hello"
// console.log(val2)

// // constは後から変更できない（再代入不可）
// // エラー
// //  val2 = "こんにちは"

// // let break = "breakは予約語"


// // 数字を２つ入力すると、足した合計が返ってくる関数
// function sum(a, b) {
//     return a + b;
// }

// // sum関数を使って、結果をresultに代入
// let result = sum(10, 20)

// console.log(result)

// // 掛け算は * を使う
// console.log(2 * 3)


// // 自分でつくる
// // 関数を定義する
// // a,bを仮引数と呼ぶ

// function multiply(a, b) {
//     // return(戻り値)の行の内容が出力される
//     return a * b;
// }

// // 作った関数を使う
// // 関数を実行する
// // 7や9を実引数と呼ぶ

// console.log(multiply(7, 9))
// console.log(multiply(-11, 9))
// console.log(multiply(8, 9))
// console.log(multiply(233, 9))

// // 引数がない関数
// function test() {

//     // 何かの処理を書く
//     console.log("ここは関数の内部")

//     return "テスト"
// }

// // 関数から文字が返ってくる
// // 引数がなくても、（）は必要
// console.log(test())

// // 関数の単純な実行のやり方
// test()




let count = 0

document.getElementById('sikaku').addEventListener('click', function () {
    // クリックしたら動く内容

    // textContentには、文字（テキスト）が入る
    console.log(this.textContent)

    if(count%2 === 0){
        // CSSを書き換えている
    this.textContent = "〇"
    this.style.fontSize = "50px"

}else if (count%2 === 1){
    this.textContent = "×"
    this.style.fontSize="50px"
}
// }else if (count%4 === 2){
//     this.style.backgroundColor = "yellow"
//     this.textContent = "黄色い四角形"
// }else if (count%4 === 3){
//     this.style.backgroundColor = "gray"
//     this.textContent = "グレーの四角形"
// }

console.log(count)

// クリックするたびに、countを増やす
count = count + 1




    // this.style.color = "white"
    // this.style.fontSize = "28px"
    // console.log("クリックされた！")
})

// document.getElementById('sikaku').addEventListener('mouseleave', function () {
//     // クリックしたら動く内容
//     this.style.backgroundColor = "red"
//     this.style.color = "white"
//     this.style.fontSize = "28px"
//     console.log("クリックされた！")
// })

// document.getElementById('sikaku').addEventListener('dblclick',function(){
//     this.style.backgroundColor = "skyblue"
//     this.style.top = "300px"
// })