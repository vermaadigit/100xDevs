const express = require("express")

const app = express()

function enoughAge(age)
{
    if (age >= 14)
    {
        return true
    }
    else
    {
        return false
    }
}

function enoughAgeMiddleware(req, res, next)
{
    if (age >= 14)
    {
        next()
    }
    else
    {
        res.json({
            msg : 'Sorry you are not of age yet',
        })
    }
}

app.get('/ride1', function(req, res) {

    if(enoughAge(req.query.age))
    {
        res.json({
            msg : "You have successfully riden the ride 1"
        })
    }
    else
    {
        res.status(411).json({
            msg : "Sorry now you are not elligible to ride"
        })
    }
})

app.get('/ride2', function(req, res) {

    if(enoughAge(req.query.age))
    {
        res.json({
            msg : "You have successfully riden the ride 1"
        })
    }
    else
    {
        res.status(411).json({
            msg : "Sorry now you are not elligible to ride"
        })
    }
})

app.listen(3000)