const express = require("express");
const router = express.Router();

const logged = require("../middleware/auth");
const czyAdmin = require("../middleware/admin");

router.get("/", logged, czyAdmin, (req, res) => {
    res.render("addProduct.pug", {});
});

module.exports = router;
