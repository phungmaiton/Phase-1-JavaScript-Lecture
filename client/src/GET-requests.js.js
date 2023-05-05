// JavaScript code goes here

// npm install -g json-server
// json-server --watch db.json

fetch("http://localhost:3000/books")
    .then((resp) => resp.json())
    .then((data) => {
        // renderBooks(data)
        renderBooksForEach(data)
    })
   
const body = document.querySelector('body');

//FOR LOOP

// function renderBooks(books) {
//     for (let i = 0; i < books.length; i++) {
//         let title = books[i].title;
//         let h1 = document.createElement('h1');
//         body.appendChild(h1);
//         h1.textContent = title;
//     }
// }

//FOR EACH

function renderBooksForEach(books) {
    //1. loop over books
    //2. render each author as a p tag
    //3. render each image as an img tag
    
    books.forEach((book) => {
        let title = book.title;
        let h1 = document.createElement('h1');
        body.appendChild(h1);
        h1.textContent = title;
        
        let author = book.author;
        let imageURL = book.image;

        let p = document.createElement('p');
        p.textContent = author;
        body.appendChild(p);

        let img = document.createElement('img');
        img.src = imageURL;
        body.appendChild(img);
    })
    
}




//OPTIONAL IF USING DEFER

// const fetchAPI = () => {
//     return fetch("http://localhost:3000/books")
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))
// }

// document.addEventListener('DOMContentLoaded', fetchAPI)

