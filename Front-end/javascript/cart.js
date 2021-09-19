// Button + - Cart

let btnIncr = document.getElementById('increase');
let btnDecr = document.getElementById('decrease');
let btnResult = document.getElementById('result').value;


btnIncr.addEventListener("click", () => {
  btnResult++;
  if(btnResult >= 20){
    btnResult = 20;
  }
  document.getElementById('result').value = btnResult;
});

btnDecr.addEventListener("click", () => {
  btnResult--;
  if(btnResult < 1){
    btnResult = 1;
  }
  document.getElementById('result').value = btnResult;
});