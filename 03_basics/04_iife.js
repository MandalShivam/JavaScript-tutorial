// Immediately Invoked Function Expressions (IIFE)

//syntax -- (any funtion defntion)()<--this is for executing the function

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // here ; is necesassry otherwise it will throw error if we write another iife after this line
// instead we can write any statement other tan iife without ;

// here second () is for exctuion of funtion like we used to do this 'chai()'
// chai() is similar to ()
// syn

( (name) => {  // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

//-------- practice-------
// function myfn() {
//     console.log("india")
// }
// myfn()
//console.log("hello shivam")
(function myfun5(){
    console.log("my name is shivam")
})();


((name)=>{
    console.log("Hi my name is monu",name)
})('hitesh')