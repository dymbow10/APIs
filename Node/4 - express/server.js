const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("Middleware");
    next(); //Allows request to go to the next middleware (call if you don't send a response)
});

app.use((req, res, next) => {
    console.log("Another Middleware");
    // ...
});

const server = http.createServer(app);
server.listen(3000);