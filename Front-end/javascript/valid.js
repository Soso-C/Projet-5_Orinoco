function makeValidation() {
    document.querySelector(".valid_container").innerHTML += `<h2>Confirmation de commande</h2>
    <p>Merci ${localStorage.getItem("user_name")} ${localStorage.getItem("user_prenom")} votre commande n°${Math.floor(Math.random() * 70000000000)} à bien été pris en compte par notre équipe !</p>
    <p>Prix total : ${localStorage.getItem("user_total_price")}</p>`
    localStorage.clear();
}

if (localStorage.length > 0){
    makeValidation()
}

function redirectionIndex(){
    window.location.href="index.html"
}

setTimeout(redirectionIndex, 10000);   