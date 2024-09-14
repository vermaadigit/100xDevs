const express = require('express')

const app = express()

const user = [{
    name : 'John',
    kidneys : [{
        healthy : false
    }]
}];

app.get('/', function(req, res) {
    const johnKidneys = user[0].kidneys;
    
})

app.listen(3000)