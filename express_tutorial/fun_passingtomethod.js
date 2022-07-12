/*Example of a function which is used in 
the several methods to reduce the number of lines of code.
Make usre to use next to pass to second methid as seen in the code or
use send to terminate the function*/

/*Here logger is Middleware function which are functions that have 
access to the request object (req), the response object (res), 
and the next middleware function in the application's
request-response cycle. The next middleware function is 
commonly denoted by a variable named next.*/

const express = require('express')
const app = express();


const logger = (req, res, next) => {
    const url = req.url;
    const time = new Date().getFullYear();
    const method = req.method;
    console.log(url, time, method);
    //res.send('Testing');
    next();
}

app.get('/', logger, (req, res) => {
    res.send('Home');
})

app.get('/about', logger, (req, res) => {
    res.send('About');
})

app.listen(5000, () => {
    console.log('I am Listening');
})