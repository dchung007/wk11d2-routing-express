const express = require('express');
const usersRouter = require('./routes/users');

const app = express();

// Phase 5
app.use('', usersRouter);

// Phase 1
app.get('/', (req, res) => {
    res.send("Hello from Express!")
})

// Phase 3
app.get(/xyz$/, (req, res) => {
    res.send("That's all I wrote.")
})

// Phase 4
app.get('/capital-letters/:text', (req, res) => {
    res.send(`${req.params.text.toUpperCase()}`);
});

// Phase 2
app.all(/^\/[\w-]+[^/]$/, (req, res) => {
    res.render('about', { req, randomNumber: 23 })
})

app.set('view engine', 'pug');

const port = 8081;

app.listen(port, () => console.log(`Listening on port ${port}...`));
