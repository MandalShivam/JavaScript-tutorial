const accountId = 1662
let accountEmail = "Shivam@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"  // we can declare variable and initialize 
                      // without type but it is not good practice
let accountState;

//accountId = 67 -- not allowed

accountEmail = "sonu@gmail.com"
accountPassword = "43433"
accountCity = "noida"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// prefer not to use var 
// because of issue in block scope and functional scope


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
