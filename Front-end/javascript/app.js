let url = "http://localhost:3000/api/cameras"

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let name ;
    let price;
    let id;
    let desc;
    let image;
    let lense;
    let i = 0;
    for(let article of data){
        name = `${article.name}`
        price = `${article.price}`
        id = `${article._id}`
        desc = `${article.description}`
        image = `${article.imageUrl}`
        lense = `${article.lenses}`
        console.log(name)
        console.log(price)       
        console.log(id)       
        console.log(desc)       
        console.log(image)       
        console.log(lense)       
        document.getElementsByClassName("name_article")[i].innerHTML = name;
        document.getElementsByClassName("price_article")[i].innerHTML = price / 100 +"€";
        document.getElementsByClassName("desc_article")[i].innerHTML = desc;
        i++
    }    
  })
