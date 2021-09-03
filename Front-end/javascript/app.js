// let url = "http://localhost:3000/api/cameras"

// fetch(url)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//     let affichage = "<ul>";
//     for(let article of data){
//         affichage += `<li>${article.name}</li>`
//     }
//     affichage += "</ul>"
//     document.querySelector("#name_article").innerHTML = affichage; 
//   })

// fetch('http://localhost:3000/api/cameras')
//   .then(response => response.json())
//   .then(data => {
//       const articlesContainer = document.getElementById('articles');
//       for (let article of data) {
//           articlesContainer.innerHTML += `${article.name} ${article.price}<br>`;
//       }
//   });