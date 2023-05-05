// function postMessage(id, title, author, imageURL, pages)  {
// fetch ("http://localhost:3000/books", {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(
//         {
//             "id": parseInt(id),
//             "title": title,
//             "author": author,
//             "image": imageURL,
//             "pages": parseInt(pages),
//         }
//     )
// }) 

// }

// const form = document.querySelector('form');

// const handleSubmit = (e) => {
//     e.preventDefault();
//     let id = e.target.id.value;
//     let title = e.target.title.value;
//     let author = e.target.author.value;
//     let imageURL = e.target.image.value;
//     let pages = e.target.pages.value;

//     postMessage(id, title, author, imageURL, pages)
// }

//form.addEventListener('submit', handleSubmit);

//DIFFERENT METHOD

const form = document.querySelector('form');

function handleSubmit(e) {
    e.preventDefault();
    let id = e.target.id.value;
    let title = e.target.title.value;
    let author = e.target.author.value;
    let imageURL = e.target.image.value;
    let pages = e.target.pages.value;

    fetch ("http://localhost:3000/books", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
            "id": parseInt(id),
            "title": title,
            "author": author,
            "image": imageURL,
            "pages": parseInt(pages),
            }
        )
    }) 
}

form.addEventListener('submit', handleSubmit);
