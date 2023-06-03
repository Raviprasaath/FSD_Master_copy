let colourValue = document.getElementById('colourValue');


let colourButtons = document.querySelectorAll('.colourButton');
// let colourButton = document.getElementById('b1');
// colourButton.style.backgroundColor = 'blue';


for (let i=0; i<colourButtons.length; i++) {    
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    let randomColor=(`rgb(${r}, ${g}, ${b})`);
    let idVal =  (colourButtons[i].id);
    let idn =  document.getElementById(idVal)

    console.log(idn)
        
}









