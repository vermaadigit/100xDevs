const express = require('express')
const {UserModel, TodoModel } = require('./db.js')

const app = express()
app.use(express.json())

app.post('/signup', async function(req, res) {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name

    await UserModel.insert({
        email : email,
        password : password,
        name : name
    })

    res.json({
        message : 'You are logged in'
    })
})

app.post('/login', function(req, res) {

    const username = req.body.username
    const password = req.body.password

    const user = UserModel.findOne ({
        email : email,
        password : password
    })

    if (user) {
        const token = ""
        res.json ({
            
        })
    }
    else {
        res.status(403).json ({
            message : 'Incorrect Credential'
        })
    }
}) 

app.post('/todo', function(req, res) {

})

app.get('/todos', function(req, res) {

})

app.listen(3000)