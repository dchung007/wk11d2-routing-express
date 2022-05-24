const express = require('express')

const app = express();



app.get('/', (req, res) => {
    res.send("Hello from Express!")
})

app.all('/about', (req, res) => {
    res.render('about', {req, randomNumber: 23})
})

app.set('view engine', 'pug');

const port = 8081;

app.listen(port, ()=> console.log(`Listening on port ${port}...`));
