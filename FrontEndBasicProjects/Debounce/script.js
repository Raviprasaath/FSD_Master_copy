// const inputBox = document.getElementById("input");

// const searchCallbackFunction = (e) => {
//     const value = e.target.value;
//     console.log(value);
// }


// function myDebounce( callback, delay ) {
//     let timerNumber;
//     return function() {
//         const event = arguments[0];       

//         clearTimeout(timerNumber) // need to on this line

//         timerNumber = setTimeout(() => {
//             callback(event)
//         }, delay)
//     }
// }


// const debouncedSearchCallbackFunction = myDebounce(searchCallbackFunction, 2000)
// inputBox.addEventListener("input", debouncedSearchCallbackFunction);


// const inputBox = document.getElementById("input");
// inputBox.addEventListener("input", onKeyUpHandler);

// let timeout;
// function onKeyUpHandler(e) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//         console.log("debounce");
//         console.log(e.target.value);   // callback function
//     }, 1000);
// }


const inputBox = document.getElementById("input");
inputBox.addEventListener("input", throttleSearchHandler);

let cancall=true;
function throttleSearchHandler(e) {
	if(cancall) {
	console.log(e.target.value)
	cancall=false;
	setTimeout(()=>{cancall=true;},2000);
	}
}