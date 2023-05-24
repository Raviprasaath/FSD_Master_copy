// setTimeout basically takes the call back function
// here call back function is my function

// () = {}
// Arrow function as a argumnets and body seperated by => this
// () => {}

console.log("hello")
setTimeout ( () => {
    console.log("ravi")
}, 5000)
console.log("bye")

// hello bye printed after 5 sec ravi printed


console.log("hello")
setTimeout ( () => {
    console.log("ravi")
}, 0)
console.log("bye")
// output
// hello
// bye
// ravi

// whenever program starts execute it will traverse, when its found setTimeout now its
// sent to WebAPI memory here function execute and timer on 
// then its moved to next line
// executer is very fast when compared to timer
// then after timer that call back function inside the timer sent to task queue 
// in other words, when timer is 0, task queue create a function to excute 
// now event loop - work was it will check task queue had anything
// if task queue had anything now its returnig and task queue becomes empty now

// another example
// now the code had 6 million lines of code
// 0-1 second - 1 million code will run
// 1-2 second - 2 million code will run
// 2-3 second - 3 million code will run
// 3-4 second - 4 million code will run
// 4-5 second - 5 million code will run
// 5-6 second - 6 million code will run
// and we have 4 second timer with function

// but after 4 seconds our setTimout function will not work 
// because for working a setTimeout it stored in TaskQueue, taskqueue only executes when stack becomes empty
// when 10million line is parsing stack empty at the end of 10 million only 
// then after 10 sec, setTimeout 4 sec function will work

// taskQueue correct name macro task name

// one more example

console.log("start")
setTimeout (()=> {
    console.log("b")
}, 4000);

setTimeout (() => {
    console.log("c")
}, 8000);

console.log("end")


// output
// start
// end
// after 4 seconds b will print
// after 8 seconds c will print

/*
 Event loop -> algo
This algo of event loops basically runs again n again
for ex 1000 times / seconds

1. to ask if task queue has anything 
NO -> do nothing
Yes ->
    1. Ask Question to stack are you EMPTY
    NO -> do nothing
    Yes -> 
        1.Pop the 1st task from MACRO-TASK QUEUE
        2.Put the task inside the stack








*/