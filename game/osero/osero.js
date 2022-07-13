const stage = document.getElementById("stage");
const masu = document.getElementById("masu");

const createSquares = () => {
  for (let i = 0; i < 64; i++) {
    const masuA = masu.cloneNode(true); 
    masuA.removeAttribute("id"); 
    stage.appendChild(masuA); 

    const stone = masuA.querySelector('.stone');

    let stoneColor;
    if(i ==27 || i == 36){
        stoneColor = 1;
    }else if(i == 28 || i == 35){
        stoneColor = 2;
    }else{
        stoneColor = 0;
    }

    stone.setAttribute("data-state", stoneColor);
  }
};

window.onload = () => {
  createSquares();
};