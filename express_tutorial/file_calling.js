/*This file contains example in which we have called data 
from another file named "data" and used re.json method to 
show the data on the webpage.
*/

//const { application } = require('express');
const express = require('express');
const app = express();

const {product} = require('./data')
const {people} = require('./data');

app.get('/', (req, res) => {
    //res.json([{people}, {product}]); /*data is in json format*/
    res.send('<h1>Home Page</h1> <a href="/data">Product</a> <a href="/data">People</a>');

})

app.get('/data', (req, res) => {
    const newproduct = product.map((product) => {
        const {id, name, quality} = product;
        return {id, name, quality};
    })
    res.json(newproduct);
})

app.get('/data', (req, res) => { 
    const newpeople = people.map((people) => {
        const {id, name, desc} = people;
        return {id, name, desc};
    })
    res.json(newpeople);
})



app.listen(5000, () => {
    console.log('Port running');
}) 