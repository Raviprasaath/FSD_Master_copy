// 05-30-2023
/* 
class based -> c, c++, java, django
class -is a template for new object

Prototype based lang -
there is a object - which serves the template for a new object


JS is not class based, partial class based lang
classes are introduced in es6 only



Class ->1. Methods
2. Properties
3. Constructor  
*/
/*
class Car {
    model = "base";
    speed;

    constructor (speed, model) {
        this.model = model;
        this.speed = speed;
    }
    canIDrive () {
        console.log("yes");
    }
}

const audi = new Car("123", "v8");
console.log(audi)           //Car {model: 'base', speed: undefined}
console.log(audi.model)     // base
console.log(audi.canIDrive()) //Yes

// Before ES6 -> Constructor function
function CarConstructor (sp, md) {
    this.speed = sp;
    this.model = md;
    this.canIDrive = function() {
        console.log("i am driving hundai", this.speed);
    }
}

const hundai = new CarConstructor(2000, "prime model")
console.log(hundai);    //CarConstructor {speed: 2000, model: 'prime model', canIDrive: ƒ}

console.log(hundai.model, hundai.speed)     //prime model 2000
hundai.canIDrive();             // i am driving hundai 2000



// Circle Object -> radius, location -> {x, y}

function Circle (radius, poistion) {
    this.radius = radius;   // 'this' keyword is CONTEXT
    this.location = poistion;
    this.draw = function() {
        console.log("location x", this.location.x, "location y", this.location.y)
    }
}


const goodCircle = new Circle(10, {x:10, y:15});
console.log(goodCircle) 
goodCircle.draw();      //location x 10 location y 15





// The fear of THIS
// to understand this we need to understand the concept of callsite......
function foo() {
    console.log("foo")
}
foo();
// call site of foo is - global
// call site means from where the function is called


// context is decided by callSite


// bar is defined in global
// called in global
function bar() {
    console.log("bar");
    foo(); //call site this function is foo

    foo; //-> this is not call site
}
bar(); // global


// 4 rules  to determine the context
*/

    // Rule 1: default binding....


// function foo() {
//     console.log(this.abc)   // output was undefined
//     // here 'this' is WIndow object and 'this' keyword is context
//     console.log(this)
// }
// foo(); //-> call site and there is no extra information
// entra info means foo(1, 2) so like we not giving anything
// and this is called in global
// and window is the global 





//     // Rule 2: implicit binding....
//     // JS will determine the context

// function foo() {
//     console.log(this)
// }


// var obj = {
//     name: "ravi",
//     rollNo: 12,
//     func: function() {
//         console.log("abcd") //abcd
//         console.log(this.name, this.rollNo) //ravi, 12
//     }  
// }

// obj.func()  //-> this is call site
// here extra info is attached before the dot(.), and that is obj
// obj is context of this function-> ( func() )


// obj1.obj2.obj3.func()   -> here obj3 is immediatly attached to it
// and obj3 is the context of this function


// 06-01-2023 -> only below 2 concepts

// Example 2: No matter of changing the object, context would be the last Object
// let obj3 = {
//     class: "9th",
//     name: "obj3",
//     sum: function(a,b) {
//         console.log(a+b)    // 3
//         console.log(this)   //{class: '9th', name: 'obj3', sum: ƒ}
//     }
// }
// let obj2 = {
//     name: "obj2",
//     obj3: obj3
// }
// let obj1 = {
//     name: "obj1",
//     obj2: obj2
// }
// obj1.obj2.obj3.sum(1, 2)


// Pitfalls of Implicit Binding

// example 1
// function sum() {
//     console.log("hey there sum")
// }
// // sum()
// // instead of calling above i can copy by below thing and i can call
// const sumCopy = sum;
// sumCopy()


// // example 2
// let obj5 = {
//     name: "ravi",
//     sum: function(a, b) {
//         console.log("sum of ", a, b);   //sum of  1 2 & for sumCopy2(1, 3)-> sum of  1 3
//     }
// }
// // obj5.sum(1,2)   // this is a call site

// const sumCopy2 = obj5.sum    // this is not a call site
// sumCopy2(1,3)   // this is a call site



// ------------Real Pitfall------------
// let obj = {
//     name: "ravi",
//     num1: 1,
//     num2: 2,
//     sum: function() {
//         console.log("hey")
//         // context -> this -> obj
//         console.log(this)   //window
//         const sum = this.num1 + this.num2;
//         console.log(sum);
//     }
// }
// // console.log(obj.num1); // 1 (output)
// // obj.sum();  // CALL SITE  //hey 3 (output)

// // the above thing is usual 
// let sumCopy = obj.sum;   // implicit binding is lost when we have different call sets
// sumCopy();  // (output) hey NaN //This is default binding
// // so this -> window--------> window.num1 is undefined
// // undefined+undefined = NaN




// -apply
// function foo(a, b) {
//     this.a = a;
//     this.b = b;
//     console.log(this, a, b)  // {a:1, b:2}1 2
// }
// var obj = {
//     a: 1,
//     foo: foo
// }
// var obj2 = {};
// obj.foo.call(obj2, 1, 2)    //call site //{a: 1, b: 2} 1 2
// obj.foo.apply(obj2, [2, 4]) //call site //{a: 2, b: 4} 2 4
// console.log(obj2)   //{a:1, b:2}



// bind
// function foo(a, b) {
//     this.a = a;
//     this.b = b;
//     // console.log(this, a, b)
// }
// const obj1 = {
//     foo: foo
// }

// const fooCopy = obj1.foo.bind(obj1, 12, 25)

// // console.log(obj1)   //{foo: ƒ};
// fooCopy();
// console.log(obj1, "obj1");  //{a: 12, b: 25, foo: ƒ} 'obj1'





// 05-30-2023 - continuing
/*
    Rule 3: Explicit binding....
    User or Dev will tell the JS what is the context 
    JS will not determine the context it self

    call, apply, bind

    all these methods are used to do 1 thing
    1. to set the context of the calling function
*/

// way 1 to call a function


// 1. calling by abc(1, 2)
// function abc(a, b) {
    //     // here context is window
    //     console.log(this)   // window objects are print
    //     console.log("adfsd", a, b)  // adfsd 1 2
    //     console.log("answer", this.a) //answer undefined
    // }
// abc(1,2);   // call site of abc is global 
// call site means at which place the function is getting exected 





// way 2 to call a function

// // 2.calling by abc.call(obj, 10, 20)
// function foo() {
//     console.log(this)
// }
// var obj = {
//     a:1,
//     food: foo
// }

// function abc(a, b) {
//     // here context is window
//     console.log(this," this")   // {a: 1, food: f} ' this'
//     console.log("adfsd", a, b)  // adfsd 10 20
//     console.log("answer", this.a) //answer 1
// }
// abc.call(obj, 10, 20)



// Rule no 4 -> new keyword()
// new keyword creates a blank object


// ----------------------
// 06-01-2023

// its like Scanner sc = new Scanner()
// Car audi = new Car();
// inside Car object the blank object is {}

// Rules Precedence -> If two or more rules fight then who will win
// new keyword is higher precedence, it can overtake any thing like-> implicit, explicit, default
//  new > explicit > implicit > default 

// function foo (str) {
//     this.a = str;
// }
// var obj1 = {
//     foo: foo
// }

// var obj2 = {
//     name: "obj2"
// }

// obj1.foo("hey there")   //this is the purest from of implicit binding
// console.log(obj1) //{a: 'hey there', foo: ƒ}


// // Implicit vs Explicit
// obj1.foo.call(obj2, "impl vs expl") // foo will have the context of obj2
// obj1.foo.call(null, "impl vs expl") // foo will have the context of Window obj
// // 'use strict'
// // obj1.foo.call(null, "impl vs expl") // foo will have the context of null

// console.log(obj1)   //{a: 'hey there', foo: ƒ}
// console.log(obj2)   //{name: 'obj2', a: 'impl vs expl'}


// ----------new Keyword----------
// let car = new obj1.foo("new implicit")
// console.log(car)    // foo {a: 'new implicit'}
// console.log(obj1)   // {a: 'hey there', foo: ƒ}


// --------new vs Explicit -------not working will see later
// let car = new obj1.foo.call(obj2, "implicit")












//---------- Property Descriptors----------
// 1. Enumerable
// let obj = {
//     name: "ravi",
//     rollNumber: 45,
//     address: "road",
// }
// console.log (obj.propertyIsEnumerable("name")) //true
// console.log (obj.propertyIsEnumerable("rollNumber")) //true
// console.log (obj.propertyIsEnumerable("address")) //true

// // propertyIsEnumerable
// console.log(obj)    //{name: 'ravi', rollNumber: 45, address: 'road'}

// for(const key in obj) {
//     console.log(key)
// }
// output
// name
// rollNumber
// address

// Enumerable -> the properties which are enumerable will be of for in
// else that property will not be part


// ---------06-04-2023--------



// Object.defineProperty(obj, 'address', {
//     value: "dadad",
//     enumerable: false
// })
// console.log(obj)    // in console address color was changed into faded
// for(const key in obj) {
//     console.log(key)    //here name and rollNumber only print
// }
// Object.defineProperty(obj, 'getCash', {
//     value: "dadad",
//     enumerable: true
// })
// for(const key in obj) {
//     console.log(key)    //output was name, rollNumber, getCash (because enumerable given has true, so the value was added in the array)
// }





// 2.Writable

// writable basically means the value can be changed...








// 3.Configurable
// Properties of an object can be modified, deleted and new property can add









// 4.
// const CarObject = {
//     canMove : true,
//     func: function() {
//         console.log("CarObject", CarObject);
//     }
// }
// console.log(CarObject);     // {canMove: true, func: ƒ}
// const descriptors = Object.getOwnPropertyDescriptor(CarObject, "canMove");
// console.log(descriptors, "descriptors")    // {value: true, writable: true, enumerable: true, configurable: true}

// let carAudi = new CarObject();
// console.log(carAudi, "class car")
// carAudi.func();


// one more example





class Car {
    canmove

   func(){
    // console.log("car audi");    //car audi
   }
}


const carObj = {
    canMove: true,
    func: function() {
        // console.log("carObj", carObj);
    }
}

// console.log(carObj)     //{canMove: true, func: ƒ}

const descriptors = Object.getOwnPropertyDescriptor(carObj, "func")
// console.log(descriptors, "descriptors fuc")     //{writable: true, enumerable: true, configurable: true, value: ƒ}'descriptors fuc' 


let carAudi = new Car();

// console.log(carAudi) // Car {canmove: undefined}

const descriptors1 = Object.getOwnPropertyDescriptor(carAudi, "func")
const descriptors2 = Object.getOwnPropertyDescriptor(carAudi, "canmove")
//console.log(descriptors1, "descriptors fuc")    //undefined 'descriptors fuc'
// console.log(descriptors2, "descriptors canMove")    //{value: undefined, writable: true, enumerable: true, configurable: true} 'descriptors canMove'

console.log(carAudi, "c;lass car")  //Car {canmove: undefined} 'c;lass car'
carAudi.func()