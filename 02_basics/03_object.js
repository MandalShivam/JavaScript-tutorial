// singleton

// there are 4 ways to create objects
 // here we discuss two ways

// 1- Object.create

// 2- object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh", // 
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//  here keys (name, email, location) are considered as string even if we write without quotes

// to access attributes of object
//by dot operator
// console.log(JsUser.email) -- mostly we use this method . operator
//by []
// bcoz if key is mentioned in quotes "" or '' then we can access only by []
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

// we can also put symbol variable in object and can access by
// first we have to make symbol variable as below then put in object as above as in JsUser
//const mySym = Symbol("key1")w
//to put symbol variable in object we have to put around [] other wise type will be in string
//however answer will be same in both the cases
///console.log(JsUser.mySym) // it will throw error at runtime
//console.log(JsUser) // string
//console.log(typeof JsUser[mySym]) //

let t = Symbol(89)
//console.log(typeof t)


JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser)
//console.log(JsUser.greetingTwo());


// ------------------------ practice--------------------

const tm = Symbol(89)
const myObj = {
    name : "shivam",
    age : 89,
    email : "shivam@gmail.com",
    contact : [2332324434,2342334342],
    friedns : ["monu","mayank","rahul"],
    [tm] : "myVal"

}

//console.log(myObj) // {
                    //     name: 'shivam',
                    //     age: 89,
                    //     email: 'shivam@gmail.com',
                    //     contact: [ 2332324434, 2342334342 ],
                    //     friedns: [ 'monu', 'mayank', 'rahul' ],
                    //     [Symbol(89)]: 'myVal'
                    // }

//console.log(typeof myObj) // object

//accessing the  variables of object

// console.log(myObj.age)
// console.log(myObj['age']) // 89  -- we must use '' inside [] bcoz all key are string type
                                // bydefault
                            // like this myObj['age'] not this myObj[age]

// console.log(myObj['contact'])   // [ 2332324434, 2342334342 ]
// console.log(myObj.contact)   // [ 2332324434, 2342334342 ]
// console.log(myObj.tm)     // undefined
// console.log(myObj[tm])      //   myVal   here we didn't use myObj['tm'] bcoz tm is not string 
                                // it is symbol type
                                
           // -----   always use square bracket [] to access object properties                  
//console.log(tm) //Symbol(89)
//console.log(typeof tm) // symbol

// we can change value of object property
myObj.friedns = ["shivam"];
//console.log(myObj)

// we can restrict changes in object
//Object.freeze(myObj)
myObj.friedns = ["sonu"]
//console.log(myObj)

myObj.myfun1 = function(){  // adding funtion to object (myObj)
    console.log(`myfunction ${this.age}`);
} // we can assign funtion to a variable like this

console.log(myObj)

console.log(myObj.myfun1) //[Function (anonymous)] here myfun1 is not executes just reference 
                            // printed

 console.log(myObj.myfun1()) // myfunction  with undefined also get printed




