const express = require('express')

const app = express()

const requestCount = 0

function requestIncreaser(req, res, next) {
    requestCount = requestCount + 1
    console.log(`Total no. of Request ${requestCount}`)
    req.requestCount = requestCount
}

app.get('/sum', requestIncreaser, function(req, res) {


    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json ({
        ans : a + b
    })
})

app.get('/multiply', function(req, res) {

    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json ({
        ans : a * b
    })
})




app.listen(3000)
