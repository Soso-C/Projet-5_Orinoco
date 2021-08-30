let url = "http://localhost:3000/api/cameras"

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
        document.getElementById('#name_article').innerHTML = data.name
