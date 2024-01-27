//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



 console.log(a); // 300  // a which is globally declared will be printed 
                  // and value of 'a' inside if case not be printed bcoz it has block and we are printing
                  // out of the block
// console.log(b);
// console.log(c);

//-----------------------
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
       // console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
         console.log(username + website);
    }
     console.log(website); // error -- out of scope
}

// console.log(username); // error -- out of scope


// ++++++++++++++++++ interesting ++++++++++++++++++


//console.log(addone(5)) //6

function addone(num){
    return num + 1
}



// addTwo(5) //  error : Cannot access 'addTwo' before initialization
// here if declaring or defining function and assigning like this then we have to call after 
// funtion definition and assigning  
//  bcoz here this kind of funtion we call by variable with parenthesis () and variable should be
// declared first and then use
const addTwo = function(num){
    return num + 2
}
