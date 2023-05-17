
// Dynamic value here but not Dynamic keys
// let obj = {
//     name : "ravi",
//     rollnum : 1,
//     class: "10th"
// }
// // get
// console.log(obj.name)
// console.log(obj.rollnum)

// // output
// // ravi
// // 10th

// // Add
// obj ["newProperty"] = 12;
// console.log(obj)

// output
// {name: 'ravi', rollnum: 1, class: '10th', newProperty: 12}
// class : "10th"
// name : "ravi"
// newProperty : 12
// rollnum : 1
// [[Prototype]] :  Object




let name = "raviprasaath"
let key = "subname"

let obj = {
    name : name,
    rollnum : 1,
    class: "10th",
    [key] : "subname1 subname2"
}
console.log(obj, "1st object")
// get
console.log(obj.name)
console.log(obj.rollnum["rollnum"])

// add
obj ["newProperty"] = 12;
console.log(obj)