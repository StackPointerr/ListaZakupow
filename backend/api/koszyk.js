const express = require("express");
const router = express.Router();

const logged = require("../middleware/auth");

router.post("/", logged, async (req, res) => {
    let odpowiedz = { sukces: true, bledy: {} };

    let id = req.body.id;

    let Produkt = require("../models").produkt;
    let produkt = await Produkt.findOne({ _id: id });

    if (!produkt) {
        odpowiedz.sukces = false;
        odpowiedz.bledy.id = "Podaj poprawne id";
    }

    let wKoszyku = req.user.koszyk.find((element) => element._id.equals(produkt._id));

    if (odpowiedz.sukces) {
        if (wKoszyku) {
            odpowiedz.sukces = false;
        } else {
            req.user.koszyk.push(produkt);
            await req.user.save();
        }
    }

    res.send(odpowiedz);
});

router.delete("/", logged, async (req, res) => {
    let odpowiedz = { sukces: true, bledy: {} };

    let id = req.body.id;
    let User = require("../models/user");

    await User.updateOne({ _id: req.user._id }, { $pull: { koszyk: id } });

    res.send(odpowiedz);
});

router.get("/", logged, async (req, res) => {
    let odpowiedz = { sukces: true, bledy: {} };

    odpowiedz.data = req.user.koszyk;

    res.send(odpowiedz);
});

module.exports = router;
