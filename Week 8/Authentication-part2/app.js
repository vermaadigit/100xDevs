const express = require('express');

const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret';    


const app = express();


const users = []
app.use(express.json());

app.post('/signup', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        msg: 'You are Signed Up'
    })

    console.log(users)

})

app.post('/login', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null

    for (let i = 0; i < users.length; i++)
    {
        if (users[i].username === username && users[i].password === password)
        {
            foundUser = users[i]
        }
    }

    if (foundUser)
    {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);

        res.json ({
            token : token
        })
    } else {
        res.status(403).send ({
            msg : 'Inavlid Username or Password'
        })
    }

    console.log(users)
})

app.get('/user', function(req, res) {
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token, JWT_SECRET);

    const username = decodedInformation.username;

    let foundUser = null

    for (let i = 0; i < users.length; i++)
    {
        if (users[i].username === username)
        {
            foundUser = users[i]
        }
    }

    if (foundUser)
    {
        res.json({
            username: foundUser.username,
            password : foundUser.password
        })
    } else {
        res.status(403).send ({
            msg : 'Invalid Token'
        })
    }
})

app.listen(3000)