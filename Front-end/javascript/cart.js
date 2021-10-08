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

// Créée notre item dans cart depuis nos tableau d'éléments dans le json.

function makeCart(){
    let test = JSON.parse(localStorage.getItem("product"));
    let prixTotal = 0;

    document.querySelector(".bloc_cart").innerHTML += `<h2>Mon panier</h2>`;

    for (produit in test) {

        document.querySelector(".bloc_cart").innerHTML +=`
        
        <div class="cart_elt_cont">
            <div class="cart_img_title">
                <img class="img_cart_art" src=${test[produit].imgUrl} alt="Photo camera">
            </div>
            <div class="cart_text_cont">
                <p>Nom</p>
                <h6>${test[produit].name}</h6>
            </div>
            <div class="cart_text_cont">
                <p>Quantitée</p>
                <h6>${test[produit].quantity}</h6>
            </div>
            <div class="cart_text_cont">
                <p>Lentille</p>
                <h6>${test[produit].lense}</h6>
            </div>
            <div class="cart_text_cont">
                <p>Prix</p>
                <h6>${test[produit].price}</h6>
            </div>
            <div class="cart_text_cont">
                <p>Total</p>
                <h6 class="total_price_elt">${parseInt(test[produit].price) * parseInt(test[produit].quantity)} €</h6>
            </div>
            <div class="cart_item_clear" onclick="clearCart()"><i class="fas fa-trash-alt"></i></div>
            </div>
        </div>`

        prixTotal += (parseInt(test[produit].price) * parseInt(test[produit].quantity));
    };
    document.querySelector(".bloc_cart").innerHTML += `
    <div class="cart_total">
      <p>Prix Total :</p>
      <p class="p_total">${prixTotal}€</p>
    </div>`;
}

// Clear notre cart le localstorage et refresh la page.
function clearCart() {
  localStorage.clear();
  window.location.reload();
}


// Affiche notre cart et le form si le localstorage a du contenu sinon affiche :  'Panier vide'
if (localStorage.length > 0) {
    makeCart();
    makeForms();
}else{
  document.querySelector(".bloc_cart").innerHTML =  
   `<h1 id="cart_title_none">Votre panier ne contient aucun article</h1>`
};


// Créé le formulaire 
function makeForms() {

    document.querySelector(".bloc_cart").innerHTML += `<h2 id="form_h2">Formulaire</h2>
    <form class="form_container" action="validation.html">
       <div class="form_group">
           <label for="lname">Nom</label>
           <input type="text" id="lname" name="lname" placeholder="Entrez votre nom" required>
       </div>
       <div class="form_group">
           <label for="fname">Prénom</label>
           <input type="text" id="fname" name="fname" placeholder="Entrez votre prénom" required/>
       </div>
       <div class="form_group">
           <label for="zip_code">Code Postale</label>
           <input type="text" id="zip_code" name="user_zip" placeholder="Ex: 69000" pattern="[0-9]{5}" required/>
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
           <input type="tel" id="tel" name="user_tel" placeholder="Ex: 06 06 06 06 06" required/>
       </div>
       <div class="btn_valider">
           <a href="#"><button type="submit" id="btn_test2">Commander</button></a>
       <div>
   </form>`

   // Event listener sur le Form pour récupérer les données de l'user lorsqu'il est submit avec la func "getInfoForms()".
    
   document.querySelector(".form_container").addEventListener("submit", () => {
    
    getInfoForms()

    })  
}

// Récupérer les données de formulaire dans le local storage.

function getInfoForms(){

    // Stock mes valeurs dans le local Storage

    localStorage.setItem("user_name", document.getElementById("fname").value);
    localStorage.setItem("user_prenom", document.getElementById("lname").value);
    localStorage.setItem("user_adress", document.getElementById("adress").value);
    localStorage.setItem("user_tel", document.getElementById("tel").value);
    localStorage.setItem("user_email", document.getElementById("mail").value);
    localStorage.setItem("user_total_price", document.querySelector(".p_total").textContent);
  
};

// Inputs checker 

const inputs = document.querySelectorAll('input[type=text],input[type=email],input[type=tel]');

inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        switch (e.target.id){
            case "fname":
                fnameChecker(e.target.value);
                break;
            case "lname":
                lnameChecker(e.target.value);
                break;
            case "zip_code":
                zipcodeChecker(e.target.value)
                break;   
            case "mail":
                emailChecker(e.target.value)
                break;  
            case "tel":
                telChecker(e.target.value)
                break;
            case "adress":
                adressChecker(e.target.value)
                break;
            default:
                nul;   
        }
    })
})


const lnameChecker = (value) => {
    let lnameRegex = new RegExp('^[a-zA-Z]', 'g');
    if(!value.match(lnameRegex)){
        errorDisplay("lname")
    }else{
        errorDisplay("lname", true)
    }
    
}

const fnameChecker = (value) => {
    let fnameRegex = new RegExp('^[a-zA-Z]', 'g');
    if(!value.match(fnameRegex)){
        errorDisplay("fname") 
    }else{
        errorDisplay("fname", true)
    }
}

const zipcodeChecker = (value) => {
    if(!value.match(/^[0-9]{5}/)){
        errorDisplay("zip_code")  
    }else{
        errorDisplay("zip_code",true)
    }
}

const adressChecker = (value) => {
    let adressRegex = new RegExp('^[a-zA-Z0-9.-]', 'g');
    if(!value.match(adressRegex)){
        errorDisplay("adress")   
    }else{
        errorDisplay("adress", true)
    }
}


const emailChecker = (value) => {
    let emailRegex = new RegExp('^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
    if(!value.match(emailRegex)){
        errorDisplay("mail")     
    }else{
        errorDisplay("mail", true)
    }
}

const telChecker = (value) => {
    if(!value.match(/^[0-9]{10}/) || value.length > 10){
        errorDisplay("tel")
    }else{
        errorDisplay("tel", true)
    }
}

// Function pour inputChecker qui permet d'afficher a l'user en changeant le bg en vert si valid ou red si false de notre tag. 

function errorDisplay(tag,valid) {

    const container = document.getElementById(tag);
    
    if (!valid){
        container.classList.add("errorInput")
    }else {
        container.classList.remove('errorInput')
        container.classList.add("validInput")
    }
}













