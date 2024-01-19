// const tinderUser = new Object()  --1
const tinderUser = {} // --2 

// both 1 and 2 are sismilar object but the only difference is by using new Object() 
                //is a singleton object


 /// adding properties to object               
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

 console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {   /// nested object // we can create object inside object 
    email: "some@gmail.com",                             ////and assign to a property of an object
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser)    // {
                            //     email: 'some@gmail.com',
                            //     fullname: { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
                            // }

// console.log(regularUser.fullname.userfullname.firstname); access nested object or property

// we can combine object like we combine arrays

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//ways of combining objects to a sngle object

// 1. const obj3 = { obj1, obj2 }
// 2. const obj3 = Object.assign({}, obj1, obj2, obj4)

//3.  const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// when values come from database it is in format of array of object like below
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]   /// array of objects

users[1].email
// console.log(tinderUser);


//  ----------to get all the keys of object---------
 console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLoggedIn' ]  it is array type

 //  ----------to get all the values of object---------
console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]

//  ----------to get all the  entries of object---------
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
                                // it is an array inside array , every entry convert into array where 1st
                                // element is key or property name and 2nd element is property value of evry 
                                // element of outer array


  //--------- we can check if an object contains any specific property or not by using as below                              
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//const {courseInstructor: instructor} = course

// console.log(courseInstructor);
//console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

//-----------------------pratice------
 const objt1 = {1:2,3:4};
 const objt2 = {5:6,7:8}
 

 const objt5 = {objt1,objt2}
 //console.log(objt5)  // { objt1: { '1': 2, '3': 4 }, objt2: { '5': 6, '7': 8 } } // here it is not properly combining
                                    // it is like object inside object

    // the actual combining is as below                                
 const objt3 = {...objt1,...objt2}
 //console.log(objt3) //{ '1': 2, '3': 4, '5': 6, '7': 8 }

 //const obj = Object.assign(target,source)
 const objt6 = Object.assign({},objt1,objt2,objt3)
 // here if we don't put {} then all the values of object will be assigned to first parameter which can be objt1 in this case
 // but we want all the objects should be assinged to empty object tha's why its good practce to use {} as 1st param
// console.log(objt6) //{ '1': 2, '3': 4, '5': 6, '7': 8 }


 // ----- we use mostly 
 //const objt3 = {...objt1,...objt2} // to combine object
 