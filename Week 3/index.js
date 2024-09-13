const express = require("express")

function calculateSum(n)
{
    let ans = 0
    for (let i = 0; i < n; i++)
    {
        ans = ans + i
    }
    return ans
}


const app = express()

app.get('/', function (req, res) {
    const n = req.query.n
    const ans = calculateSum(n)
    res.send(ans.toString())
})

app.get('/test', function(req, res) {
    res.send('Test routes is Here')
})

app.listen(3000) 