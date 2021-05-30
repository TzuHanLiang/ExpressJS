const express = require("express");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
    res.render('add-product',{docTitle: 'Add Product', path:'add-product'});
});

router.post("/add-product", (req, res, next) => {
    products.push({
        "title": req.body.title,
    });
    res.redirect('/');
});

module.exports.router = router;
module.exports.products = products;
