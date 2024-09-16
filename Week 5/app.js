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

app.listen(3000)