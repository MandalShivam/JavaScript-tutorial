//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')  // represent unique value

//console.log(id === anotherId); // false even they have same value but thay are symbol that's why 
                                 // different

// const bigNumber = 3456543576654356754n

//console.log(typeof id); // type - symbol
//console.log(typeof bigNumber); // type - undefined
//console.log(typeof outsideTemp); // type - object
//console.log(typeof isLoggedIn); // type - boolean
console.log(typeof userEmail); // type - undefined



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//console.log(typeof anotherId); // type - symbol
//console.log(typeof myFunction); // type - function
//console.log(typeof heros); // type - object
//console.log(typeof myObj); // type - object 

// all non- primitive  type are of object type and funtion type is funtion (object function)
//  and type of null is object 



// https://262.ecma-international.org/5.1/#sec-11.4.3


// ------------------------------------------------------------
//memory
// Stack (Primitive)  , Heap (Non-Primitive)
// primitive variable will get space in stack and non-primitive in heap
// if we copy primitive value in another variable then value will be copyied to another variable
// but if we want to copy non-primitive then reference will be stored in another variable
let youtubename = "shivamMandaldotcom"
let anotherName = youtubename;
console.log(youtubename)
console.log(anotherName)

anotherName = "sonu@00"
console.log(youtubename)
console.log(anotherName)

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne;
console.log(userOne)
console.log(userTwo)

userTwo.email = "monu@google.com"
console.log(userOne)
console.log(userTwo)
// ---------------------------------------