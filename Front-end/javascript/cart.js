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

// Créée notre item dans cart.
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

// Clear notre cart le localstorage et refresh la page.
function clearCart() {
  document.querySelector('.bloc_cart').innerHTML = "";
  localStorage.clear();
  window.location.reload();
}


// Affiche notre cart et le form si le localstorage a du contenu sinon affiche :  'Panier vide'
if (localStorage.length > 0) {
  makeCart();
  makeForms();
}else{
  document.querySelector(".bloc_cart").innerHTML +=
   `<h1 id="cart_title_none">Votre panier ne contient aucun article</h1>`
}
  
// Créé le formulaire 
function makeForms() {
  document.querySelector(".bloc_cart").innerHTML += `<h2 id="form_h2">Formulaire</h2>
  <form class="form_container">
       <div class="form_group">
           <label for="lname">Nom</label>
           <input type="text" id="lname" name="lname" placeholder="Entrez votre nom" required>
       </div>
       <div class="form_group">
           <label for="fname">Prénom</label>
           <input type="text" id="fname" name="fname" placeholder="Entrez votre prénom" required/>
       </div>
       <div class="form_group">
           <label for="adress">Adresse</label>
           <input type="text" id="adress" name="user_adress" placeholder="Entrez votre adresse" required/>
       </div>
       <div class="form_group">
           <label for="mail">Email</label>
           <input type="email" id="mail" name="user_mail" placeholder="Entrez votre email" required>
       </div>
       <div class="form_group">
           <label for="tel">Telephone</label>
           <input type="tel" id="tel" name="user_tel" placeholder="06 06 06 06 07" pattern="[0-9]{10}" required/>
       </div>
       <div class="btn_valider">
           <a href="#"><button type="submit" id="btn_test2">Commander</button></a>
       <div>
   </form>`
}

// Récupérer les données de formulaire dans le local storage.

function getInfoForms(){

    localStorage.setItem("user_name", document.getElementById("fname").value);
    localStorage.setItem("user_prenom", document.getElementById("lname").value);
    localStorage.setItem("user_adress", document.getElementById("adress").value);
    localStorage.setItem("user_tel", document.getElementById("tel").value);
    localStorage.setItem("user_email", document.getElementById("mail").value);
    localStorage.setItem("user_total_price", document.querySelector(".p_total").textContent);
};

// Event listener sur le Form pour récupérer les données de l'user lorsqu'il est submit avec la func "getInfoForms()".
document.querySelector(".form_container").addEventListener("submit", () => {
    getInfoForms();
    window.location.href="validation.html"
});


