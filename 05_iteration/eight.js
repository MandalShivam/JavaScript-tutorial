// --reduce 

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // here each element us added to accumulator ,
                              // means current value is added to accumulator and then reuturned
                              // we have to pass intial value in 2Nd argument of reduce method
                              // reduce((acc,curva)=> acc+cuval,initialVal) two things we need to pass
                              // arrow funtion contains accumultor and current value and 2nd arg is initial val

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);