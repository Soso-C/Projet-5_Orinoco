let url = "http://localhost:3000/api/cameras"

main()

async function main() {
  const articles = await getArticles()

  for (article of articles){
    displayArticle(article)
  }
}



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



// fetch(url)
//   .then(function(response) {
//     return response.json();
//   })
//    .then(function(data) {
//      console.log(data);
//      let name ;
//      let price;
//      let id;
//      let desc;
//      let image;
//      let lense;
//      let i = 0;
//      for(let article of data){
//          name = `${article.name}`
//          price = `${article.price}`
//          id = `${article._id}`
//          desc = `${article.description}`
//          image = `${article.imageUrl}`
//          lense = `${article.lenses}`
//          console.log(name)
//          console.log(price)       
//          console.log(id)       
//          console.log(desc)       
//          console.log(image)       
//          console.log(lense)       
//          document.getElementsByClassName("name_article")[i].innerHTML = name;
//          document.getElementsByClassName("price_article")[i].innerHTML = price / 100 +"€";
//          document.getElementsByClassName("desc_article")[i].innerHTML = desc;
//          document.getElementsByClassName("img_article")[i].src = image;
//          i++;
//      }  
//    })
//   .then(function(data) {
//     console.log(data)
//     let listOfProduct = `<h2 id="h2_ancre">Dès aujourd'hui devenez le photographe de demain avec la nouvelle gamme X9</h2><div class="container">`;
//     for(let item of data){
//       listOfProduct +=`
//                <div href="#" class="container_elt">
//                 <div><img class="img_article" src="${item.imageUrl}" alt=""></div>
//                 <div class="art_name_price">
//                     <p class="name_article">${item.name}</p>
//                     <p class="desc_article">${item.description}</p>
//                     <p class="price_article">${item.price / 100}€</p>
//                 </div>
//                 <a href="#"><button type="submit" class="btn_test">Acheter</button></a>
//             </div>`         
//     }
//     listOfProduct += '</div>';
//     console.log(listOfProduct);
//     document.getElementById('produc_list').innerHTML = listOfProduct;
// }).catch(document.getElementById("produc_list").innerHTML = "<h1 style='color:red; font-size:1.5em; height:100vh; display:flex;align-items: center;justify-content: center;'>Erreur nous n'avons pas réussis a retourner la liste de produits depuis notre serveur.</h1>");


