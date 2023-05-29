//----------------- 05-25-2023 -----------------

// Assync Await
// Await -> it looks like that the JS executor stops and waits for the completion of the line

// Await can't use in normal function  only we can use in Async function inside Await can use

// function which is using async keyword

// async function returns a promise

/*

async function fun() {
    // await fetch ("asas");
    return 1;
}
const funPromise = fun();

funPromise.then (data => {
    console.log('fun promise data', data) // output -- fun promise data 1
})
console.log(funPromise, 'fun result')

*/


// Implement Kanyes quote with async wait


/*
async function fetchQuote() {
    console.log('initial')
    const response = await fetch("https://api.kanye.rest/")
    console.log('after fetch')
    
    console.log(response);
}
fetchQuote(); 


// output
// initial
// after fetching
// Response {type: 'cors', url: 'https://api.kanye.rest/', redirected: false, status: 200, ok: true, …}
*/

// async function fetchQuotes() {
    
//     const response = await fetch("https://api.kanye.rest/")
    
//     const data = await response.json();
//     console.log(data);
   
//     const {quote} = data //---> const quotes = data.quotes;
//     console.log(quote)
    
//     addTotheDom(quote)
// }


// output -> (random quotes were generating)


// function addTotheDom(quote) {
//     const h1Elem = document.createElement('h1');
//     h1Elem.innerHTML = quote;
    
//     const body = document.body;
//     body.appendChild(h1Elem);
// }
// fetchQuotes()

// In web page the quote were updated in H1 tag element


// why we need await, async, promise
// we are calling server, it takes some milli seconds
// i will wait for the response also, fetch is a promise- we are waiting to promise to resolve
// resolve means to get the real data
// the promise(fetch) created by Java script prople
// server giving the data's to fetch as response object
// response object had more huge things, we need to change into playing text or json
// json is simplest form of object
// await used to here because json conversion take some time 
// .json also promise, we need to wait for that so await using
 

// console.log('hello')
// fetch("https://api.kanye.rest/") 
//     .then(response => {
//         return response.json()
//     }).then (data => {
//         console.log('data')
//     }).catch (error => {
//         console.log('error')
//     }) 
// console.log('bye');

// output
// hello
// bye
// data

// if link is not correct means
// hello
// bye
// error










// Promise changeing  

// console.log('hello')
// fetch("https://api.kanye.rest/") 
//     .then(response => {
//         // response handler
//         return response.json()    // here .then block is we changing the promise (or) then block returing a promise
//     }).then (data => {
//         // data handler
//         console.log('data handler 0', data)
        
//         return '1 output'// -> if i comment it means it give undefined in below data handler 1, if not then give value as 1

//     }).then (data => {
//         // number 1 handler
//         console.log('data handler 1', data)        
//     }).then (data => {
//         // number 2 handler
        
//         console.log('data handler 2', data) //here this give undefined because there is no return value in previous block
        
//     }).then (data => {
//         // number 3 handler
//     })
    
    
//     .catch (error => {
//         console.log('error')
//     }) 
// console.log('bye');


// one more example
// if server gives correct ans it shown in the then bloc, if its gives a wrong ans its shown in the error block

console.log('hello')
fetch("https://api.kanye.rest/") 
    .then(response => {
        // response handler
        return response.json()    // here .then block is we changing the promise (or) then block returing a promise
    }).then (data => {
        // data handler
        console.log('data handler 0', data)
        
        return '1 output'// -> if i comment it means it give undefined in below data handler 1, if not then give value as 1

    }).catch (error => {
        console.log('error')
    }).then (data => {
        // number 1 handler
        console.log('data handler 1', data) //now also data handler gievs output        
    }).then (data => {
        // number 2 handler        
        console.log('data handler 2', data)
    }).then (data => {
        // number 3 handler
    }).finally (()=>{            // it always run after then and catch block
        console.log('finally block')
    })
    
    
    
console.log('bye');




// Catch - Error handeling

