(async function(){
    const articleId = getArticleId()
    const article = await getArticle(articleId)
    hyrdrateArticle(article)   
})()

function getArticleId(){
    return new URL(location.href).searchParams.get("id")
}

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

function hyrdrateArticle(article) {
    document.getElementById("test1").innerHTML +=
    `<h2 id="title_product">${article.name}</h2>
    <div><img id="img_product" src="${article.imageUrl}" alt=""></div>
    <p id="desc_product">${article.description}</p>
    `
}