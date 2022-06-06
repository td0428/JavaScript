
// 選択肢の配列
const answers = ["大阪","愛知","東京","福岡"];

// 選択肢のIDの配列
const answerIDs = ["answerA","answerB","answerC","answerD"];

for (let i = 0;i<4;i++){
    document.getElementById(answerIDs[i]).textContent = answers[i];
    console.log(answerIDs[i]);
    console.log(answers[i]);
}



const seikai = "正解"
const huseikai = "不正解"


document.getElementById('answerA').addEventListener('click', function (){
    this.style.backgroundColor="gray"
    this.textContent= huseikai
    this.style.color="blue"
})
document.getElementById('answerB').addEventListener('click', function (){
    this.style.backgroundColor="gray"
    this.textContent=huseikai
    this.style.color="blue"
})
document.getElementById('answerC').addEventListener('click', function (){
    this.style.backgroundColor="skyblue"
    this.textContent=seikai
    this.style.color="red"
})
document.getElementById('answerD').addEventListener('click', function (){
    this.style.backgroundColor="gray"
    this.textContent=huseikai
    this.style.color="blue"
})