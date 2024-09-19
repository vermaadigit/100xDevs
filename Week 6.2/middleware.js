const express = require('express')

const app = express()


//Now this is a post handeller so we can't send the data through url like ( localhost:3000/sum?a=10&b=20 ) we send the data by POSTMAN

//In Expresss if you want to send JSON data,
// You need to first parse the json data

app.use(express.json())

app.post('/sum', function(req, res) {
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)

    res.json({
        ans : a + b
    })
})

app.listen(3000)