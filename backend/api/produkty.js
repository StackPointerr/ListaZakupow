const express = require("express");
const router = express.Router();

const logged = require("../middleware/auth");
const isAdmin = require("../middleware/admin");

router.get("/", logged, async (req, res) => {
    let odpowiedz = { sukces: true, bledy: {} };

    let Produkt = require("../models").produkt;
    let produkty = await Produkt.find({});

    odpowiedz.data = produkty;

    res.send(odpowiedz);
});

router.post("/", logged, isAdmin, async (req, res) => {
    let odpowiedz = { sukces: true, bledy: {} };

    let nazwa = req.body.nazwa;
    let cena = parseFloat(req.body.cena ?? "");

    if (!nazwa || nazwa.length < 3) {
        odpowiedz.bledy.nazwa = "Podaj poprawną nazwe";
        odpowiedz.sukces = false;
    }

    if (isNaN(cena)) {
        odpowiedz.bledy.cena = "Podaj poprawna cene";
        odpowiedz.sukces = false;
    }

    if (odpowiedz.sukces) {
        let Produkt = require("../models").produkt;
        await new Produkt({ nazwa: nazwa, cena: cena }).save();
    }

    res.send(odpowiedz);
});

router.delete("/", logged, isAdmin, async (req, res) => {
    let odpowiedz = { sukces: true, bledy: {} };

    let id = req.body.id;

    let Produkt = require("../models").produkt;
    let User = require("../models").user;

    await Produkt.deleteOne({ _id: id });
    await User.updateMany({}, { $pull: { koszyk: id } });

    res.send(odpowiedz);
});

module.exports = router;
