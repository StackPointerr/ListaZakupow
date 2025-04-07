const express = require("express");
const router = express.Router();

const logged = require("../middleware/auth");

router.get("/", logged, async (req, res) => {
    let odpowiedz = { sukces: true, bledy: {} };

    odpowiedz.data = {
        login: req.user.login,
        koszyk: req.user.koszyk,
        czyAdmin: req.user.czyAdmin,
    };

    res.send(odpowiedz);
});

module.exports = router;
