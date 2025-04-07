const mongoose = require("mongoose");

const produkt = mongoose.model(
    "product",
    {
        nazwa: String,
        cena: Number,
    },
    "products"
);

module.exports = produkt;
