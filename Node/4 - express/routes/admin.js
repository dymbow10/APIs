const path = require('path');
const express = require("express");
const rootDir = require('../util/path');
const router = express.Router();

// /admin/add-product -> get
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'));
    //next(); Allows request to go to the next middleware (call if you don't send a response)
});

// /admin/add-product -> post
router.post('/add-product',(req,res) => { //only works with post reqs
    console.log(req.body);
    res.redirect('/');
});

module.exports = router