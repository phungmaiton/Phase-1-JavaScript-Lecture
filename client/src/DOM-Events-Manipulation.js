const p = document.querySelector('.ptag');

p.textContent = "Let's use some DOM events!";

const button = document.querySelector('#clickme');

const clickedButton = () => {
    button.textContent = "Clicked!"
}

button.addEventListener('click', clickedButton)

const button2 = document.querySelector('.clickme2');

const changeColor = () => {
    button2.style['background-color'] = "pink";
}

button2.addEventListener('click', changeColor);

const ptag = document.querySelector('p');

console.log(ptag);

const hoverEvent = () => {
    ptag.style.color = "pink";
}

ptag.addEventListener('mouseover', hoverEvent);

const unhover = () => {
    ptag.style.color = "black";
}

ptag.addEventListener('mouseout', unhover);

const form = document.querySelector('form');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.input.value);
    console.log(document.querySelector('#input').value);  
}

form.addEventListener('submit', handleSubmit)

const nameForm = document.querySelector('#nameForm');

const welcome = document.querySelector('#welcome')

nameForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name');

    let inputtedValue = name.value;

    const welcome = document.createElement('p');
    
    welcome.textContent = `Welcome, ${inputtedValue}!`;

    const body = document.querySelector('body');

    body.appendChild(welcome);
});