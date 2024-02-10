// for each loop
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);  // js
                        // ruby
                        // java
                        // python
                        // cpp
} )

// coding.forEach( (item) => {
//     console.log(item);  // js
                        // ruby
                        // java
                        // python
                        // cpp
// } )

// function printMe(item){
//     console.log(item);  
// }

// coding.forEach(printMe)  // js    // here we are paasing direct funtion reference in forEach
                            // ruby
                            // java
                            // python
                            // cpp

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);   // in for Each method there is also extra feature arrow funtion where we can
// } )                                    // pass array element , index and a full array

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )