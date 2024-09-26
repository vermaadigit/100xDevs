const jwt = require('jsonwebtoken');

const value = {
    name : 'aditya',
    accountNumber : 1231123123
}

const token = jwt.sign(value, 'secretKey');
console.log(token);