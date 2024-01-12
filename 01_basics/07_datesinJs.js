// Dates

let myDate = new Date()
 console.log(myDate.toString()); //Fri Jan 12 2024 07:44:21 GMT+0000 (Coordinated Universal Time)
 console.log(myDate.toDateString()); //Fri Jan 12 2024
 console.log(myDate.toLocaleString()); //1/12/2024, 7:44:40 AM
 console.log(typeof myDate); //object

//let myCreatedDate = new Date(2023, 23, 12) //2023-01-23T00:00:00.000Z
//console.log(myCreatedDate.getDate())
//let myCreatedDate1 = new Date(2023, 0, 23)
 let myCreatedDate = new Date(2023, 0, 23, 5, 3) //2023-01-23T05:03:00.000Z
console.log(myCreatedDate) 
let myCreatedDate1 = new Date("2023-01-14") //2023-01-14T00:00:00.000Z
console.log(myCreatedDate1)
//let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(`the type of date.now() is ${typeof myTimeStamp}`) //number

 //console.log(myTimeStamp); //The Date.now() static method returns the number of milliseconds elapsed since the epoch, 
 //which is defined as the midnight at the beginning of January 1, 1970, UTC.

 //console.log(myCreatedDate.getTime());//The getTime() method of Date instances returns 
 //the number of milliseconds for this date since the epoch,
 // which is defined as the midnight at the beginning of January 1, 1970, UTC.
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date() //2024-01-12T07:39:44.384Z //-- current date
 console.log(newDate);
 //console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

let mydate = new Date("6-2-2029");
//console.log(mydate)
//console.log(mydate.toDateString())
//console.log(mydate.toLocaleDateString())
//console.log(mydate)
