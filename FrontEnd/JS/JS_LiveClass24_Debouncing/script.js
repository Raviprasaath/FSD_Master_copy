const inputBox = document.getElementById('input');
console.log(inputBox);

const searchCallBackFunction = (e) => {
    const value = e.target.value;
    console.log(value);
}

inputBox.addEventListener("input", searchCallBackFunction)
// when we start typing something, it will print in console
// problem here is every letter it takes and print
// in real time in flipkart if we search as refrigerator in fast manner it will not show 12 result
// instead 12 letters it will display 3-4 auto suggestion only in console
// it saves lot of memory creation
// for this when user typed and when we give a gap that time only auto suggestion need to appear

