
// 選択肢の配列
const answers = ["大阪","愛知","東京","福岡"];

// 選択肢のIDの配列
const answerIDs = ["answerA","answerB","answerC","answerD"];

for (let i = 0;i < 4;i++){
    document.getElementById(answerIDs[i]).textContent = answers[i];
    console.log(answerIDs[i]);
    console.log(answers[i]);
}



const seikai = "正解"
const fuseikai = "不正解"

// 引数idNameを利用して、A,B,Dを当てはめる
const makeFunction = function(idName){

    document.getElementById(idName).addEventListener('click', function (){
        this.style.backgroundColor="gray"
        this.textContent= fuseikai
        this.style.color="blue"
        this.setAttribute("class","fuseikai")
    })
}


const makeSeikai = function(idName){

    document.getElementById(idName).addEventListener('click', function (){
        this.style.backgroundColor="skyblue"
        this.textContent=seikai
        this.style.color="red"
    })
}


// 関数の実行
makeFunction("answerA")
makeFunction("answerB")
makeSeikai("answerC")
makeFunction("answerD")

const syu = "終了"



// setTimeoutを使って制限時間を５秒にする
setTimeout(function(){
    document.querySelector("#answerA").textContent = syu
    document.querySelector("#answerB").textContent = syu
    document.querySelector("#answerC").textContent = syu
    document.querySelector("#answerD").textContent = syu
},1000)


// document.getElementById('answerA').addEventListener('click', function (){
//     this.style.backgroundColor="gray"
//     this.textContent= fuseikai
//     this.style.color="blue"
//     this.setAttribute("class","fuseikai")
// })

// document.getElementById('answerB').addEventListener('click', function (){
//     this.style.backgroundColor="gray"
//     this.textContent=fuseikai
//     this.style.color="blue"
//     this.setAttribute("class","fuseikai")
// })

// document.getElementById('answerC').addEventListener('click', function (){
//     this.style.backgroundColor="skyblue"
//     this.textContent=seikai
//     this.style.color="red"
// })

// document.getElementById('answerD').addEventListener('click', function (){
//     this.style.backgroundColor="gray"
//     this.textContent=fuseikai
//     this.style.color="blue"
//     this.setAttribute("class","fuseikai")
// })