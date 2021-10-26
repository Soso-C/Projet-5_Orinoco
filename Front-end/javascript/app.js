/**************************************************************** MAIN **********************************************************************/

let url = "http://localhost:3000/api/cameras";

main();

// Func qui attend le retour de getArticles pour executer tous le code, on boucle notre function displayArticle pour créer tous nos articles depuis getArticles qui est un fetch de l'API.
async function main() {
  const articles = await getArticles();
  
  for (article of articles) {
    displayArticle(article);
  }
}

// Récupere les données de l'api
function getArticles() {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      alert(error);
    });
}

// Func qui créé nos articles
function displayArticle(article) {
  document.getElementById("produc_list").innerHTML += `
    <div href="#" class="container_elt">
    <div><img class="img_article" src="${article.imageUrl}" alt=""></div>
    <div class="art_name_price">
        <p class="name_article">${article.name}</p>
        <p class="desc_article">${article.description}</p>
        <p class="price_article">${article.price / 100}€</p>
    </div>
    <a href="produit.html?id=${
      article._id
    }"><button type="submit" class="btn_test b_yellow">Acheter</button></a>
  </div>`;
}

/********************************************************** Option pour CART affichage ***********************************************************/
let arrayProduct = [];
if (localStorage.length > 0) {
  arrayProduct = JSON.parse(localStorage.product);
  document.getElementById(
    "cart_elt"
  ).innerHTML = `<div><span id="nbr_article">${arrayProduct.length}</span></div><i class="fas fa-shopping-cart"></i>Mon panier</a>`;
}
