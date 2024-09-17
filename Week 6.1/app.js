const express = require('express')

const app = express()

app.get('/addition', function (req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        result: a + b
    })
})

app.get('/substraction', function (req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    if (a >= b)
    {
        res.json({
            result: a - b
        })
    }
    else
    {
        res.json({
            result: b - a
        })
    }
})

app.get('/multiplication', function (req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        result: a * b
    })
})

app.get('/division', function (req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    if (a >= b)
    {
        res.json({
            result: a / b
        })
    }
    else
    {
        res.json({
            result: b / a
        })
    }
})



app.listen(3000)