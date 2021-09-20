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


function makeCart(){

  document.querySelector(".bloc_cart").innerHTML +=
   `<h2>Mon panier</h2>
    <div class="cart_elt_cont">
        <div class="cart_img_title">
            <img class="img_cart_art" src="${localStorage.getItem("imgU")}" alt="">
        </div>
        <div>
            <p>Nom</p>
            <h6>${localStorage.getItem("title")}</h6>
        </div>
        <div>
            <p>Quantitée</p>
            <h6>${localStorage.getItem("quantity")}</h6>
        </div>
        <div>
            <p>Lentille</p>
            <h6>${localStorage.getItem("lense")}</h6>
        </div>
        <div>
            <p>Prix</p>
            <h6>${localStorage.getItem("price")}</h6>
        </div>
        <div>
            <p>Total</p>
            <h6>${parseInt(localStorage.getItem("price")) * parseInt(localStorage.getItem("quantity"))} €</h6>
        </div>
        <div class="cart_item_clear" onclick="clearCart()"><i class="fas fa-trash-alt"></i></div>
  </div>
  <div class="cart_total">
      <p>Prix Total :</p>
      <p class="p_total">${parseInt(localStorage.getItem("price")) * parseInt(localStorage.getItem("quantity"))} €</p>
  </div>
  </div>`
}

function clearCart() {
  document.querySelector('.bloc_cart').innerHTML = "";
  localStorage.clear();
  window.location.reload();
}



if (localStorage.length > 0) {
  makeCart()
}else{
  document.querySelector(".bloc_cart").innerHTML +=
   `<h1 id="cart_title_none">Votre panier ne contient aucun article</h1>`
}
  


