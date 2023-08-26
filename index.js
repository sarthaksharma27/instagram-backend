const express = require('express')
const app = express()
const ejs = require('ejs')

const port = 3000

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});

app.use(express.static('public');
app.set('view engine', 'ejs');

app.get('/ig/:username', (req, res) => {
    let {username} = req.params;
    const instadata = require('./instagram.json');
    const data = instadata[username];
    res.render('home.ejs', { data });
});

