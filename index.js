require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000


app.use(express.static(`${__dirname}/public`));
app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/bubbel', (req, res) => {
    res.send('bubbel')
})

app.get('/game', (req, res) => {
    res.sendFile(`${__dirname}/bubbel.html`, (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    })
})


app.listen(process.env.PORT, () => {
    console.log(`app listening on prot ${process.env.PORT}`)
})