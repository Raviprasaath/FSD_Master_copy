const arr1 = document.getElementById('1');
const arr2 = document.getElementById('2');
const btn1 = document.getElementById('add-1');
const btn2 = document.getElementById('add-2');
const add1 = document.getElementById('disp-1');
const add2 = document.getElementById('disp-2');
const error = document.getElementById('error');
const results = document.getElementById('result');


const firstArray = [];
const secondArray = [];

btn1.addEventListener('click', () => {      
    // add1.textContent = arr1.value;
    let flag = true;
        
    const str = arr1.value;
    if (str.includes(',')) {
        let strArr = str.split(',');
        
        for (let i=0; i<strArr.length; i++) {
            console.log(Number(strArr[i]));
            if (typeof Number(strArr[i]) === Number) {
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
        if (flag === true) {
            add1.textContent = arr1.value;
        } else {
            error.style.display = 'inline-block'
        }
    } else {
        if (typeof Number(str) === Number) {
            add1.textContent = arr1.value;
        } else {
            error.style.display = 'inline-block'
        }
    }

})

btn2.addEventListener('click', () => {
    add2.textContent = arr2.value;
})

document.getElementById('merge').addEventListener('click', () => {
    let arr = [arr1.value,arr2.value];    
    var a = arr.join(',')
    results.textContent= a;

})