const user = {
    username: "hitesh",
    price: 999,

   
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);//hitesh , welcome to website
        console.log(this);//       {
                                //     username: 'hitesh',
                                //     price: 999,
                                //     welcomeMessage: [Function: welcomeMessage]
                                // }
    }
    

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

 //console.log(this); //{}

// function chai(){
//     //let username = "hitesh"
//     console.log(this.username); //undefined , // outside of object so not refering any object
// }

// chai()

//---------function expression---------
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

  //-------------- arrow funtion--------  ()=>{}
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  // here we removed return , we can remove return
// with {} if there is only one statement
// if we want to write 'return' then we have to writte with '{}'

// const addTwo = (num1, num2) => ( num1 + num2 ) // we can also place () in place of return and {}

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


 const myArray = [2, 5, 3, 7, 8]

 myArray.forEach((i)=>console.log(i))// 2
                                        // 5
                                        // 3
                                        // 7
                                        // 8

//------------------practice-------------

const myobj = {
    myUsername :"shivam",
    myAge : 67,
    myfun : function() {
        console.log(this.myUsername)
    }
}

myobj.myfun()

function myfunct(num1,num2) {
    return num1 + num2;
}

console.log(myfunct(2,3))

const myfun5 = function(num1,num2) {
    return num1 + num2;
}

console.log(myfun5(2,3))

const myfn = (num1,num2) =>  num1+num2
console.log(myfn(2,3))

const arr =[2,3,4,5,7]
console.log()
