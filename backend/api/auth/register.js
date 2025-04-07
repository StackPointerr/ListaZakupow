const express = require("express");
const crypto = require("crypto");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("register");
});

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

        let user = await User.findOne({ login: login });
        if (user) {
            odpowiedz.sukces = false;
            odpowiedz.bledy.login = "Podany login jest już zajęty";
        } else {
            odpowiedz.sukces = true;
            odpowiedz.token = crypto.randomBytes(10).toString("hex");

            new User({
                login: login,
                password: password,
                token: odpowiedz.token,
            }).save();
        }
    }

    res.send(odpowiedz);
});

module.exports = router;
