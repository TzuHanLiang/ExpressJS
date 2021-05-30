const express = require("express");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", {
    products: adminData.products,
    hasProducts: adminData.products.length > 0,
    docTitle: "Shop",
    path: "shop",
    // layout: false,
    productCSS: true,
  });
});

module.exports = router;
