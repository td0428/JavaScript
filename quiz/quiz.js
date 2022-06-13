
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


        function FuseikaiChange(event){
            divF.textContent= fuseikai
            divF.style.color = "blue"
            divF.setAttribute("class","fuseikai")
        }

// 引数idNameを利用して、A,B,Dを当てはめる
const makeFuseikai = function (idName){



    divF.addEventListener('click',FuseikaiChange)
}


const makeSeikai = function(idName){

    document.getElementById(idName).addEventListener('click', function (){
        this.textContent=seikai
        this.setAttribute("class","seikai")
    })
}

const makeAnswer = function(idName, answer){
    const divF = document.getElementById(idName)

    function FuseikaiChange(event){
        divF.textContent= answer
        divF.style.color = "blue"
    }
    divF.addEventListener('click', FuseikaiChange)
}

// 関数の実行
makeAnswer("answerA",fuseikai)
makeAnswer("answerB",fuseikai)
makeAnswer("answerC",seikai)
makeAnswer("answerD",fuseikai)



// setTimeoutを使って制限時間を５秒にする
// 指定した要素（element）.textContent で文字を変更できる
const syu = "終了"

setTimeout(function(){
    document.getElementById("mondai").textContent = syu
},5000)


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