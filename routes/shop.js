const express = require("express");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", {
    products: adminData.products,
    showProduct: function () {
      return adminData.products.length > 0;
    },
    noProducts: function () {
      return adminData.products.length === 0;
    },
    docTitle: "Shop",
    path: "shop",
    layout: false,
  });
});

module.exports = router;
