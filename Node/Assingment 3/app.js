const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

const server = http.createServer(app);

app.get('/index',(req,res) => {
    res.sendFile(path.join(__dirname,"views",'index.html'));
});

app.get('/link',(req,res) => {
    res.sendFile(path.join(__dirname,"views","link.html"));
});

app.use(express.static(path.join(__dirname,'public')));

app.use('/',(req,res) => {
    res.send("<h1>Teste</h1>");
});
server.listen(8080);