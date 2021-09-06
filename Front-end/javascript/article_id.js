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
    `
    <div><img class="img_article" src="${article.imageUrl}" alt=""></div>
    <div class="art_name_price">
        <p class="name_article">${article.name}</p>
        <p class="desc_article">${article.description}</p>
    </div>
    <div class="bloc_p_t_quant">
        <div class="quant_nmb">
            <p>Quantitée</p>
            <select name="p_quant">
                <option> 1
                <option> 2
                <option> 3
                <option> 4
                <option> 5
                <option> 6
                <option> 7
                <option> 8
                <option> 9
            <select>
        </div>    
    </div>   
    <div class="quant_nmb">
    <p>Lentilles</p>
    <select name="p_quant">
        <option> ${article.lenses}
        <option> ${article.lenses[1]}
    <select>
    </div>
    <div class="btn_price">
    <a href="#"><button type="submit" class="btn_test">Ajouter au panier</button></a>
    <p class="price_article">Prix : ${article.price / 100}€</p>
    </div>`
    
}
