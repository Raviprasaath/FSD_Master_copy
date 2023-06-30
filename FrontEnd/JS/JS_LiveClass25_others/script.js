// 06-27-2023

// IIFE
// Immediadtely Invoke Function Execution

/*
function abc() {
    console.log("abc")
}

abc() // you as a user executing this thing

( () => {
    console.log("immediately invoked function")
}) () // this will automatically invoke this function
*/


// implicit vs explicit cohersion
// Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number to String, String to Number, Boolean to Number etc. when different types of operators are applied to the values
// https://betterprogramming.pub/implicit-and-explicit-coercion-in-javascript-b23d0cb1a750

/*
// implicit
console.log("15" * 2 )

//explicit
Number(i) + j // -> here we converting to externally

*/

// Next topic
// setTimeout

// MicroTask Queue -> Promise, Asyncs
// MacroTask Queue -> setTimeout, setInterval, Setimediate




// setTimeout(()=> {
//     console.log("hello");
// }, 0)
// let myFetch = new Promise((res, rej)=> {
//     res(1);
// })
// myFetch.then(data=> console.log(data));

// output
// 1
// promise-> hello

// here promise is prior and after promise settimeout gives ans






// Another example

setTimeout(() => {
    console.log("hello");
}, 0);


let myFetch = new Promise((res, rej)=> {
    setTimeout(() => {
        res(1);
    }, 3000);
})
myFetch.then(data=> console.log(data));

// output
// hello
// 1
// here also promise is prior but hello return in 0 sec, then fetch was return

