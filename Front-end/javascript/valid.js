// Cette function nous créée l'html + nous retourne les données du client lors de ca commande + un bon de commande généré aléatoirement avec Math.random et clear le local storage apres ca.
function makeValidation() {
    document.querySelector(".valid_container").innerHTML += `<h2>Confirmation de commande</h2>
    <p>Merci ${localStorage.getItem("user_name")} ${localStorage.getItem("user_prenom")} votre commande n°${Math.floor(Math.random() * 70000000000)} à bien été pris en compte par notre équipe !</p>
    <p>Vous serez livré dans les 48h a : ${localStorage.getItem("user_adress") + " " + localStorage.getItem("user_zipcode")}</p>
    <p>Prix total : ${localStorage.getItem("user_total_price")}</p>`
    localStorage.clear();
}

// Func qui permet d'afficher la func makevalidation si il y a quelque chose dans lotre local storage si non redirige l'user sur index.html si le local storage est vide
if (localStorage.length > 0){
    makeValidation()
}else{
    redirectionIndex();
}

// Redirection sur la page d'accueil.
function redirectionIndex(){
    window.location.href="index.html"
}

// Redirige l'user dans 15s sur l'index apres etre arrivé sur la page validation
setTimeout(redirectionIndex, 15000);