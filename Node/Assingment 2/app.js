const http = require ("http");

const express = require("express");

const app = express();

app.get('/favicon.ico', (req, res) => res.status(204));



/*app.use((req,res,next) => {
    console.log("Middleware 1");
    next();
});

app.use((req,res,next) => {
    console.log("Middleware 2");
    res.send("<h1>Test</h1>");
});*/

app.use('/users', (req,res,next) => {
    res.send("<h1>Users</h1>");
    console.log("M2");
});

app.use('/', (req,res,next) => {
    res.send("<h1>Root</h1>");
    console.log("M1");
});

const server = http.createServer(app);
server.listen(3000);