const http = require('http');

const express = require('express');

const app = express();

app.use('/add-product',(req, res, next) => {
    console.log("Middleware");
    res.send("<p>Product added</p>");
    //next(); Allows request to go to the next middleware (call if you don't send a response)
});

app.use('/',(req, res, next) => {
    console.log("Another Middleware");
    res.send('<h1>Express</h1>');
});

const server = http.createServer(app);
server.listen(3000);