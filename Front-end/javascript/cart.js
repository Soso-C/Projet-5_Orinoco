// Button + - Cart

function increaseValue() {
  let value = parseInt(document.getElementById('result').value);
  value++;
  if(value >= 20){
      value = 20
  }
  document.getElementById('result').value = value;
};

function decreaseValue() {
  let value = parseInt(document.getElementById('result').value);
  value--;
  if(value < 1){
      value = 1
  }
  document.getElementById('result').value = value;
};

