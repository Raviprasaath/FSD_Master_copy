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

async function fetchQuotes() {
    
    const response = await fetch("https://api.kanye.rest/")
    
    const data = await response.json();
    console.log(data);
   
    const {quote} = data //---> const quotes = data.quotes;
    console.log(quote)
    
    addTotheDom(quote)
}


// output -> (random quotes were generating)


function addTotheDom(quote) {
    const h1Elem = document.createElement('h1');
    h1Elem.innerHTML = quote;
    
    const body = document.body;
    body.appendChild(h1Elem);
}
fetchQuotes()

// In web page the quote were updated in H1 tag element


// why we need await, async, promise
// we are calling server, it takes some milli seconds
// i will wait for the response also, fetch is a promise- we are waiting to promise to resolve
// resolve means to get the real data
// the promise(fetch) created by Java script prople
// server giving the data's to fetch as response object
//  