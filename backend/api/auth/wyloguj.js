const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    let odpowiedz = { sukces: true, bledy: {} };

    let token = req.body.token;
    if (!token) {
        odpowiedz.sukces = false;
        odpowiedz.bledy.token = "Podaj poprawny token";
    } else {
        const User = require("../models").user;
        await User.findOneAndUpdate({ token: token }, { token: null });
    }

    res.send(odpowiedz);
});

module.exports = router;
