// const jwt = require('jsonwebtoken');

// const value = {
//     name : 'aditya',
//     accountNumber : 1231123123
// }

// const token = jwt.sign(value, 'secretKey');
// console.log(token);



//Try and catch block

try {
    let a
    console.log(a.length)
    console.log("I am the first to execute")
} catch (error) {
    console.log("Inside catch block")
}

console.log("I am the last to execute")


