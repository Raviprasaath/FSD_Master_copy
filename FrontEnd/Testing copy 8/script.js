const inputBox = document.getElementById("input");

const searchCallbackFunction = (e) => {
    // console.log("event ", e)
    const value = e.target.value;
    console.log(value, "value api call");
}

// inputBox.addEventListener("input", searchCallbackFunction) // need to off this line


// // Debounce function ..... callbackFunction, delay 


function myDebounce( callback, delay ) {
    let timerNumber;
    return function() {
        const event = arguments[0];       
        
        clearTimeout(timerNumber) // need to on this line

        timerNumber = setTimeout(() => {
            callback(event)
        }, delay)
    }
}

const debouncedSearchCallbackFunction = myDebounce(searchCallbackFunction, 1000)
inputBox.addEventListener("input", debouncedSearchCallbackFunction);

