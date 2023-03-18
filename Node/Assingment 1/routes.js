const fs = require("fs");
const { parse } = require("path");

const Handler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if(req.url === "/"){
        res.write('<html>');
        res.write('<h1>Hello</h1>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Create</button></form></body>');
        return res.end();
    }

    if(req.url === "/users"){
        res.write('<html>');
        res.write('<h2>User list</h2>');
        res.write("<ul><li>User1</li><li>User2</li><li>User3</li></ul>");
        res.write("</html>");
        return res.end();
    }

    if(req.url === "/create-user" && req.method === "POST"){
        const body = [];
        req.on('data',(chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            console.log(message);

        });
    }
}
module.exports = Handler;