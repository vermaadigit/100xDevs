const express = require('express')

const app = express()

let requestCount = 0

function requestIncreaser(req, res, next) 
{
    requestCount = requestCount + 1
    console.log(`Total no of Request ${requestCount}`)
    next()
}

function realSumHandler(req, res)
{
    const num1 = parseInt(req.query.a)
    const num2 = parseInt(req.query.b)

    res.json({
        ans : num1 + num2
    })
}


app.get('/sum', requestIncreaser, realSumHandler)

app.listen(3000)