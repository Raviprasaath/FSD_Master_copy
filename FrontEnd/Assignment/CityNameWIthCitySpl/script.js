const btn = document.getElementById("btn");

let container = document.getElementById('container');
const divCont = document.createElement('div');
container.appendChild(divCont);


btn.addEventListener('click', function(event) {
    event.preventDefault();
    divCont.innerHTML = 'This is Hi';
});


