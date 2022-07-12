const express = require('express')
const app = express();

let {product} = require('./data.js');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false}));

app.get('/people', (req, res) => {
    res.status(200).json({status: true, data:product});
})

app.get('/', (req, res) => {
    res.send('Home Page');
})

// app.post('/login', (req, res) => {
//     const {name} = req.body;
//     if(name) {
//         return res.status(200).send(`Welcome ${name}`);
//     }
//     res.status(401).send('Sorry...');
// })

app.listen(5000, () => {
    console.log('Good to Go'); 
})