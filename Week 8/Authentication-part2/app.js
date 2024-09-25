const express = require('express');

const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret';    


const app = express();


const users = []
app.use(express.json());

function logger(req, res, next) {
    console.log(`${req.method} request came`)
    next()
}

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/signup', logger, function(req, res) {
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

app.post('/login', logger, function(req, res) {
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
            username: foundUser.username
        }, JWT_SECRET);

        res.header('token', token)
        res.header('random', 'randomAditya')

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

function auth(req, res, next) {
    // const token = req.headers.token;
    // const decodedInformation = jwt.verify(token, JWT_SECRET);

    // if (decodedInformation.username)
    // {
    //     req.username = decodedInformation.username
    //     next()
    // }
    // else
    // {
    //     res.status(403).send ({
    //         msg : 'Invalid Token'
    //     })  
    // }

    const token = req.headers.token;

    if (!token) {
        return res.status(400).send({
            msg: 'Token must be provided'
        });
    }

    try {
        const decodedInformation = jwt.verify(token, JWT_SECRET);

        if (decodedInformation.username) {
            req.username = decodedInformation.username;
            next();
        } else {
            res.status(403).send({
                msg: 'Invalid Token'
            });
        }
    } catch (err) {
        res.status(403).send({
            msg: 'Invalid Token'
        });
    }
}

app.get('/user',logger, auth, function(req, res) {
    // const token = req.headers.token;
    // const decodedInformation = jwt.verify(token, JWT_SECRET);

    // const username = decodedInformation.username;

    const currentUser = req.username

    let foundUser = null

    for (let i = 0; i < users.length; i++)
    {
        if (users[i].username === currentUser)
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