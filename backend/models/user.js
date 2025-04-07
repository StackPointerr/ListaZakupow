const mongoose = require("mongoose");

const user = mongoose.model(
    "user",
    {
        login: String,
        password: String,
        czyAdmin: {
            type: Boolean,
            default: false,
        },
        koszyk: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product",
            },
        ],
        token: String,
    },
    "users"
);

module.exports = user;
