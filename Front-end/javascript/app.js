/**************************************************************** MAIN **********************************************************************/

let url = "http://localhost:3000/api/cameras"

main()

// Func qui appelle toutes les fonctions
async function main() {
  const articles = await getArticles()

  for (article of articles){
    displayArticle(article)
  }
}


// Récupere les données de l'api
function getArticles() {
  return fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    return data;
  }).catch(function(error){
    alert(error)
  })
}

// Func qui créé nos articles
function displayArticle(article){
  document.getElementById('produc_list').innerHTML += `
    <div href="#" class="container_elt">
    <div><img class="img_article" src="${article.imageUrl}" alt=""></div>
    <div class="art_name_price">
        <p class="name_article">${article.name}</p>
        <p class="desc_article">${article.description}</p>
        <p class="price_article">${article.price / 100}€</p>
    </div>
    <a href="produit.html?id=${article._id}"><button type="submit" class="btn_test">Acheter</button></a>
  </div>`         
}


