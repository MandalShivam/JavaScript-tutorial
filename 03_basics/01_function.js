
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//console.log(sayMyName())

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){ // here username = "same" -- > In javascript we can assign
    if(!username){                             // default value to parameter , if no value passed then this
        console.log("PLease enter a username");    // default value will be considered
        return
    }
    return `${username} just logged in`
}

// in  -- > if("") here "" will be considered as false
 //  -- > if(undefined) here undefined is also considered as false

// console.log(loginUserMessage("hitesh")) // hitesh just logged in
// console.log(loginUserMessage()) // sam just logged in 
    // here if do not specify the default value the --- undefined just logged in  would be shown

    //------------- varibale arguments ----------

    function calculateCartPrice1(...num1){
        return num1
    } 
     console.log(calculateCartPrice1(4,5,6,7))  // [ 4, 5, 6, 7 ] -- here this ...num1 means 
      //it can take any number of parameters and will take as an array


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

 console.log(calculateCartPrice(200, 400, 500, 2000))  //[ 500, 2000 ] // here 200 will be assigned 
     // in val1 , 400 in val2 and rest of the value be assigned in num1 as an array

//--------------------------------------- object as an arguments------

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

 handleObject(user) //Username is hitesh and price is 199   -- giving object as argument

handleObject({
    username: "sam",
    price: 399
})  // giving direct  object definition in argument

//------------------passing array as an arguments------------

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

 console.log(returnSecondValue(myNewArray)); //400

console.log(returnSecondValue([200, 400, 500, 1000])); // 400  paasing direct array definition


// -------- practice 

function myfun(var1) {
    console.log(`my function has variable : ${var1}`)
}
myfun(6)

function myfunc(...temp) {
  return temp
}
console.log(myfunc(4)) //[4]

function myfunc1(...temp) {
    return temp
  }
  console.log(myfunc(4,5,6,7,8)) //[ 4, 5, 6, 7, 8 ]

const myuser = {
    myuserName : "shivam",
    age : 90
}

function myfunc3(obj) {
 return `my object username is ${obj.myuserName} and age is ${obj.age}`
}
console.log(myfunc3(myuser)) // my object username is shivam and age is 90

function myfunc4(obj) {
    return `my object username is ${obj.myname} and age is ${obj.myage}`
}

console.log(myfunc4({
    myname : "hfhf",
    myage : 78
}))  //my object username is hfhf and age is 78

function myfunc5(arr) {
    return arr[3]
}

console.log(myfunc5([2,5,0,4])) //4

  
