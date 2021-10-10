/**************************************************************** MAIN **********************************************************************/
let arrayProduct = JSON.parse(localStorage.product);

/**************************************************************** CART **********************************************************************/

// Créée nos items dans cart depuis notre tableau d'éléments dans le json.
function makeCart(){
    let test = JSON.parse(localStorage.getItem("product"));
    let prixTotal = 0;
    let incrvalue = 1;

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
            <div class="cart_item_clear" onclick="clearItem(${produit})"><i class="fas fa-trash-alt"></i></div>
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

// Clear un item du cart avec index comme params
function clearItem(index){   
    arrayProduct.splice(index,1);
    localStorage.setItem("product", JSON.stringify(arrayProduct));
    console.log(JSON.parse(localStorage.product));
    window.location.reload()
}

// Clear tous le localstorage et refresh la page.
function clearCart() {
  localStorage.clear();
  window.location.reload();
}

// Affiche notre cart et le form si le localstorage a du contenu sinon affiche :  'Panier vide' dans la page html.
if (localStorage.length > 0) {
    makeCart();
    makeForms();
}else{
  document.querySelector(".bloc_cart").innerHTML =  
   `<h1 id="cart_title_none">Votre panier ne contient aucun article</h1>`
};

/*********************************************************************************** FORMULAIRE *****************************************************************************/

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
           <input type="tel" id="tel" name="user_tel" placeholder="Ex: 06 06 06 06 06" pattern="[0-9]{10}" required/>
       </div>
       <div class="btn_valider">
           <a href="#"><button type="submit" id="btn_test2">Commander</button></a>
       <div>
   </form>`

   // event listener dont si nos variable sont true alors on récuperes les données et on se redirige sur la page validaiton.
    document.querySelector(".form_container").addEventListener("submit", (e) => {
    
        e.preventDefault();

        if (firstName && lastName && eMail && adress && zipCode && phone){
            getInfoForms()
            // Récupération des infos de l'user ainsi que son panier.
            const order = {
                contact:{
                    firstName,
                    lastName,
                    eMail,
                    adress,
                    zipCode,
                    phone,
                },
                product: JSON.parse(localStorage.getItem("product")),
            }

            // Préparation du POST
            const init = {
                method : "POST",
                headers : {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(order),
                mode: "cors",
            };    
            
            console.log(init);

            // Envoie de la data au backend
            fetch("http://localhost:3000/api/cameras/order", init)
            .then(() => console.log("data envoyée"));   
            window.location.href="validation.html"
        }else {
            alert("Veuillez remplir le formulaire correctement")
        }
    })  

    // Récupérer les données de formulaire dans le local storage.
    function getInfoForms(){

        // Stock mes valeurs dans le local Storage

        localStorage.setItem("user_name", lastName);
        localStorage.setItem("user_prenom", firstName);
        localStorage.setItem("user_adress", adress);
        localStorage.setItem("user_tel", phone);
        localStorage.setItem("user_zipcode", zipCode);
        localStorage.setItem("user_email", eMail);
        localStorage.setItem("user_total_price", document.querySelector(".p_total").textContent);
    
    };
}



/*********************************************************************************************** INPUTS **********************************************************************/

// Inputs checker 

let firstName, lastName, adress, phone, zipCode, eMail;
const inputs = document.querySelectorAll('input[type=text],input[type=email],input[type=tel]');


// Watch la value de chaque input.

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
                null;   
        }
    })
})

// Checker d'un input si la regex n'est pas true alors la value du input = null.
const lnameChecker = (value) => {
    if (value.length < 3 || value.length > 25){
        errorDisplay("lname")
        lastName = null;
    }else if (!value.match(/^[a-zA-Z]*$/)) {
        errorDisplay("lname");
        lastName = null;
    }
    else{
        errorDisplay("lname", true)
        lastName = value;
    }
    
}

const fnameChecker = (value) => {
    if (value.length < 3 || value.length > 25){
        errorDisplay("fname")
        firstName = null;
    }else if (!value.match(/^[a-zA-Z]*$/)) {
        errorDisplay("fname");
        firstName = null;
    }
    else{
        errorDisplay("fname", true)
        firstName = value;
    }
}

const zipcodeChecker = (value) => {
    if (value.length < 5 || value.length > 5){
        errorDisplay("zip_code");  
        zipCode = null;
    }
    else if(!value.match(/^[0-9]{5}/)){
        errorDisplay("zip_code");  
        zipCode = null;
    }else{
        errorDisplay("zip_code",true);
        zipCode = value;
    }
}

const adressChecker = (value) => {
    if (value.length < 8 || value.length > 35){
        errorDisplay("adress");
        adress = null;  
    }else if (!value.match(/^[a-zA-Z0-9\s]*$/)) {
        errorDisplay("adress");
        adress = null;
    }
    else{
        errorDisplay("adress", true)
        adress = value;
    }
}


const emailChecker = (value) => {
    let emailRegex = new RegExp('^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
    if(!value.match(emailRegex)){
        errorDisplay("mail");
        eMail = null;    
    }else{
        errorDisplay("mail", true);
        eMail = value;
    }
}

const telChecker = (value) => {
    if (value.length < 10 || value.length > 10){
        errorDisplay("tel");
        phone = null;
    }
    else if(!value.match(/^[0-9]{10}/)){
        errorDisplay("tel");
        phone = null;
    }else{
        errorDisplay("tel", true);
        phone = value;
    }
}

// Function pour inputChecker qui permet d'afficher a l'user en changeant le bg en red si c'est false. 

function errorDisplay(tag,valid) {

    const container = document.getElementById(tag);
    
    if (!valid){
        container.classList.add("errorInput");
    }else {
        container.classList.remove('errorInput');
    }
}


/********************************************************************************** Button + - Cart **************************************************************************/

function increaseValue() {
    let value = parseInt(document.getElementById('result').value);
    value++;
    if(value >= 20){
        value = 20;
    }
    document.getElementById('result').value = value;
  };
  
  function decreaseValue() {
    let value = parseInt(document.getElementById('result').value);
    value--;
    if(value < 1){
        value = 1;
    }
    document.getElementById('result').value = value;
  };











