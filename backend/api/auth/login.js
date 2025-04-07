const express = require("express");
const crypto = require("crypto");

const router = express.Router();

router.post("/", async (req, res) => {
    let odpowiedz = { sukces: true, bledy: {} };

    let login = req.body.login ?? "";
    let password = req.body.password ?? "";

    if (login.length < 5) {
        odpowiedz.sukces = false;
        odpowiedz.bledy.login = "Podaj poprawny login";
    }

    if (password.length < 5) {
        odpowiedz.sukces = false;
        odpowiedz.bledy.password = "Podaj poprawne hasło";
    }

    if (odpowiedz.sukces) {
        const User = require("../../models").user;

        let user = await User.findOne({ login: login, password: password });
        if (user) {
            odpowiedz.sukces = true;
            odpowiedz.token = crypto.randomBytes(10).toString("hex");

            user.token = odpowiedz.token;
            await user.save();
        } else {
            odpowiedz.sukces = false;
            odpowiedz.bledy.login = "Login lub hasło jest niepoprawne";
        }
    }

    res.send(odpowiedz);
});

module.exports = router;
