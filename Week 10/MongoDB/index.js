const express = require('express')
const {UserModel, TodoModel } = require('./db.js')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const JWT_SECRET = 'JsonSecretFile'

mongoose.connect("mongodb+srv://admin:Aditya112233@cluster0.lq0xy.mongodb.net/Todo-app-database")

const app = express()
app.use(express.json())

app.post('/signup', async function(req, res) {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name

    await UserModel.create({
        email : email,
        password : password,
        name : name
    })

    res.json({
        message : 'You are logged in'
    })
})

app.post('/login', async function(req, res) {

    const email = req.body.email
    const password = req.body.password

    const user = await UserModel.findOne ({
        email : email,
        password : password
    })

    console.log(user)

    if (user) {
        const token = jwt.sign ({
            id : user._id
        }, JWT_SECRET)
        res.json ({
            token : token
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