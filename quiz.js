const seikai = "正解"
const huseikai = "不正解"


document.getElementById('answerA').addEventListener('click', function (){
    // this.style.backgroundColor="gray"
    this.textContent= huseikai
    this.style.color="blue"
    this.setAttribute('class','huseikai')
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