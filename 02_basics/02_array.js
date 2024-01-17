const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 marvel_heros.push(dc_heros) // append an array into another array as an element

 console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]); //flash

 const allHeros = marvel_heros.concat(dc_heros) // add two array and convert into single array
 console.log(allHeros); //['thor', 'Ironman','spiderman',  [ 'superman', 'flash', 'batman' ],
                            // 'superman', 'flash', 'batman']
                         
const all_new_heros = [...marvel_heros, ...dc_heros] // same as concat function

let myher = [1,2,3,4]
let mher = [9,7,6,5]
let newhr1 = [myher,mher]
console.log(newhr1) //[ [ 1, 2, 3, 4 ], [ 9, 7, 6, 5 ] ]
 let newhr = [...myher,...mher]
 console.log(newhr)

 //console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(2)
console.log(real_another_array); //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

//flat() convert array of array into single array
// it is taking depth as parameter  default '1' can also take 'infinity'



console.log(Array.isArray("Hitesh")) // false
console.log(Array.from("Hitesh")) // converts into an array from string
console.log(Array.from({name: "hitesh"})) // [] -- (interesting) here it is confusing whether
                                    // it will take key or value as element of array
                                    // that's why it is not printing anything

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1, score2, score3));
