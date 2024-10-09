const bcrypt = require('bcrypt')
const express = require('express')
const {UserModel, TodoModel } = require('./db.js')
const { auth, JWT_SECRET } = require("./auth")
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const { z } = require("zod")

mongoose.connect("mongodb+srv://admin:Aditya112233@cluster0.lq0xy.mongodb.net/Todo-app-database")

const app = express()
app.use(express.json())

app.post('/signup', async function(req, res) {
    const requiredBody = z.object({
        email : z.string().min(3).max(30).email(),
        password : z.string().min(3).max(30),
        name : z.string().min(3).max(40)
    })

    // const parsedData = requiredBody.parse(req.body)
    const parsedDataWithSuccess = requiredBody.safeParse(req.body)

    if (!parsedDataWithSuccess.success){
        res.json({
            message : "Incorrect Format",
            error : parsedDataWithSuccess.error
        })
        return
    }

    const email = req.body.email
    const password = req.body.password
    const name = req.body.name

    const hashedPassword = await bcrypt.hash(password, 5)
    console.log(hashedPassword)
    

    await UserModel.create({
        email : email,
        password : hashedPassword,
        name : name
    })

    res.json({
        message : 'You are logged in'
    })
})

app.post('/login', async function(req, res) {

    const email = req.body.email
    const password = req.body.password

    const response = await UserModel.findOne ({
        email : email,
        // password : password
    })

    if(!response) {
        res.status(403).json({
            message : "User does not exist in our DB"
        })
        return
    }

    const passwordMatch = await bcrypt.compare(password, response.password)

    if (passwordMatch) {
        const token = jwt.sign ({
            id : response._id.toString()
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

app.post('/todo', auth, function(req, res) {
    const userId = req.userId
    const title = req.body.title

    TodoModel.create({
        title,
        userId
    })

    res.json({
        userId : userId
    })
})

app.get('/todos', auth, async function(req, res) {
    const userId = req.userId
    const todos = await TodoModel.find({
        userId : userId
    })

    res.json({
        todos
    })
})

// function auth(req, res, next)
// {
//     const token = req.headers.token

//     const decodedData = jwt.verify(token, JWT_SECRET)

//     if (decodedData)
//     {
//         req.userId = decodedData.id
//         next()
//     }
//     else{
//         res.status(403).json({
//             message : "Incorrect Credentials"
//         })
//     }
// }

app.listen(3000)