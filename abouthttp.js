
/*This is the example of server creation with http module*/


const http = require('http')  /*require('http') is s module.*/
const {readFileSync} = require('fs');

const homepage = readFileSync('./express_tutorial/index.html')

/*here we are creating server by createserver command and parameters are req and res.*/
const server = http.createServer((req, res) => { 
     const url = req.url;
     if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'}); /*here text/html will display text in html and */
        res.write(homepage);                    /*html/plain will display text but not in html format*/
        res.end();
     }
     else if(url ==='/about'){
        res.writeHead(200, {'content-type':'text/html'}); /*here text/html will display text in html and */
        res.write('<h1>AboutPage<h1>');                    /*html/plain will display text but not in html format*/
        res.write('<h2>Want to know more...<h2>');
        res.end();
     }
     else{
        res.writeHead(404, {'content-type':'text/html'}); 
        res.write('<h1>Sorry...<h1>');                   
        res.write('<h2>Bad Request<h2>');
        res.end();
     }
      
})

server.listen(5000);   /*port where the req will send and executed*/



/*=*=**=*=**=*=**=*=**=*=**=*=**=*=**=*=**=*=**=*=**=*=**=*=**=*=**=*=**=*=**=*=**=*=**=*=**=*=**=*=**=*=**=*=**=*=*/



// const http = require('http');

// const server = http.createServer((req, res) => {

//     if(req.url === '/'){
//         res.end('Welcome to Home Page');
//     }
//     else if(req.url === '/about'){
//         res.end(`
//         <h2>about Us</h2>
//         <hr>
//         <p>We're happy to help you</p>
//         `)
//     }
//     else {
//         res.end(`
//     <p>We're sorry. the page you are looking is not available.</p>
//     <a href="/">Home</a>
//     `)}
// })

// server.listen(5000);