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
    const numberofKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;

    for (let i = 0; i < johnKidneys.length; i++)
    {
        if (johnKidneys[i].healthy)
        {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1
        }
    }

    const numberOfUnhealthyKidneys = numberofKidneys - numberOfHealthyKidneys
    res.json ({
        numberofKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
            
})

app.post('/', function (req, res) {
    const isHealthy = req.body.isHealthy
    user[0].kidneys.push ({
        healthy : isHealthy
    })
    res.json ({
        msg : 'Done!'
    })
})

app.listen(3000)