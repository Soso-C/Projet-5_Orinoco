/************************************************************** MAIN  ***********************************************************************************/

// S'appel tout seul pour appeler nos 3 fonctions en attendant le résultat async await pour l'attente du retour de notre api.
(async function(){
    const articleId = getArticleId()
    const article = await getArticle(articleId)
    hyrdrateArticle(article)   
})()


// Retourne l'url de notre élement avec son id.
function getArticleId(){
    return new URL(location.href).searchParams.get("id")
}

// Appel a l'api pour nous retourner les données de l'id en question.
function getArticle(articleId){
    return fetch(`http://localhost:3000/api/cameras/${articleId}`)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    return data;
  }).catch(function(error){
    alert(error)
  })
}

// Créer l'article avec article en params
function hyrdrateArticle(article) {

    const lens = createLenses(article.lenses);

    document.getElementById("test1").innerHTML +=
    `
    <div><img class="img_product" src="${article.imageUrl}" alt=""></div>
    <div class="art_name_price">
        <p class="name_article">${article.name}</p>
        <p class="desc_product">${article.description}</p>
    </div>  
    <div class="quant_nmb">
    <p class="lent" >Lentilles :</p>
    <select id="lent_prod" name="p_quant">
        ${lens}
    <select>
    </div>
    <div class="bloc_p_t_quant">
        <div class="quant_nmb">
            <p class="quant">Quantitée :</p>
            <form class="btn_i_d">
                <input id="decrease" type="button" onclick="decreaseValue()" value="-"/>
                <input id="result" type="text" value="1"/>
                <input id="increase" type="button" onclick="increaseValue()" value="+"/>
            </form>
        </div> 
        <p class="price_product">${article.price / 100}€</p>   
    </div> 
    <div class="btn_price">
        <a href="#"><button type="submit" id="btn_test2" onclick="addToCart()" >Ajouter au panier</button></a>
    </div>`     
};

// Fonction qui retourne ma liste de lenses.
function createLenses(lenses) {
    option = "";
    for (elt of lenses) {
       option += `<option class="opt_lens"> ${elt}`
    }
    return option
};

/******************************************   Button + -  ***********************************************/

function increaseValue() {
    let value = parseInt(document.getElementById('result').value);
    value++;
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

/****************************************** Local Storage ********************************************/

// Ajoute notre produit dans notre local storage.
function addToCart() {
  
  // Objet js qui récupere les données du produit lorsqu'on clic sur ajouter au panier.
  let camProduct = {
    name: document.querySelector('p.name_article').textContent,
    price: document.querySelector('p.price_product').textContent,
    quantity: document.getElementById('result').value,
    lense: document.querySelector('#lent_prod').value,
    imgUrl:document.querySelector('.img_product').src,
    id: getArticleId(),
  };
  
  let productInLocalStorage = JSON.parse(localStorage.getItem("product"));

  // si il y a deja des produits dans mon local storage
  if(productInLocalStorage){
    productInLocalStorage.push(camProduct);
    localStorage.setItem("product", JSON.stringify(productInLocalStorage));
  }
  // Si il y a pas de produit dans le local storage
  else{
    productInLocalStorage = [];
    productInLocalStorage.push(camProduct);
    localStorage.setItem("product", JSON.stringify(productInLocalStorage));
  }
};


