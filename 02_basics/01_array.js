// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

//console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

//console.log(myn1);
//console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
//console.log("C ", myArr);
//console.log(myn2);

//---------------- practice

const arr = [1,4,3,2,5,6];
console.log(arr);

let arr1 =[4,6,9,0,7,5]
//console.log(arr1) // [4,6,9,0,7,5]

let myArr1 = new Array(0,9,7,6,5,4)
console.log(myArr1)

const ar = ["shivam",'sonu',"dhhd",78,67]
//console.log(ar)//["shivam",'sonu',"dhhd",78,67]
//console.log(ar[-9]) // undefined
//console.log(ar[2]) //dhhd


let arr2 =[4,6,9,0,7,5]
arr2.push(33)  //add this element at the last
console.log(arr2) // [4,6,9,0,7,5,33]
arr2.push(90)
console.log(arr2) // [4,6,9,0,7,5,33,90]

arr2.pop() // remove last element
console.log(arr2) //[4,6,9,0,7,5,33] 

arr2.unshift(2) // add this element at the start of the array
console.log(arr2) //[2,4,6,9,0,7,5,33] 

arr2.shift() // remove the fisrt element from the array , tf there is no element then 
                //undefined is returned
console.log(arr2)

console.log(arr2.includes(6)) // check if element is present or not // return true or false

console.log(arr2.join()) //4,6,9,0,7,5,33
 //join()  ---    // Method is used to join the elements of an array into a string. 
                        //The elements of the string will be separated by a specified separator and 
                        //its default value is a comma(,).


 let myarr = [3,6,4,5,7,2,9]
 console.log(myarr)  
 
 // ---- slice(start,end)
 let myarr2 = myarr.slice(2,5) // it take the portion of array from start index to before last index
 console.log(myarr2) //[ 4, 5, 7 ]

 let mr = myarr.slice(2)// return array of element starts from 2nd index to the end
 console.log(mr) // [ 4, 5, 7, 2, 9 ]

 let mr1 = myarr.slice(-4) // -ve indexing start from end element of array 
                            // last element 9 has -1 index, so it will print -4,-3,-2,-1 elements
                            // that is [ 5, 7, 2, 9 ]
 console.log(mr1) //[ 5, 7, 2, 9 ]

 let mr2 = myarr.slice(-5,-2)
 console.log(mr2) //[ 4, 5, 7 ]
 // if not found it will return empty array

 // ---- splice()


//  console.log("this is original array "+myarr)

//  let myarr3 = myarr.splice(2,5) // it take the portion of array from start index to before last index
//  console.log(myarr3)



