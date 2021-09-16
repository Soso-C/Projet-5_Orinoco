
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
    <select name="p_quant">
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
        <p class="price_product">Prix : ${article.price / 100}€</p>   
    </div> 
    <div class="btn_price">
        <a href="#"><button type="submit" class="btn_test2">Ajouter au panier</button></a>
    </div>`     
}

// Fonction qui retourne ma liste de lenses.

function createLenses(lenses) {
    option = "";
    for (elt of lenses) {
       option += `<option class="opt_lens"> ${elt}`
    }
    return option
}

// Button + - //

function increaseValue() {
    let value = parseInt(document.getElementById('result').value);
    value++;
    if(value >= 20){
        value = 20
    }
    document.getElementById('result').value = value;
  }

  function decreaseValue() {
    let value = parseInt(document.getElementById('result').value);
    value--;
    if(value < 1){
        value = 1
    }
    document.getElementById('result').value = value;
  }

