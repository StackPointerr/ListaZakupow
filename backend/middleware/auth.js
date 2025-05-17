async function logged(req, res, next) {
    let User = require("../models/user");
    let user = await User.findOne({ token: req.cookies.token });

    if (!user) {
        res.send({
            sukces: false,
            bledy: { token: "Token jest niepoprawny" },
        });
    } else {
        req.user = await user.populate("koszyk");
        return next();
    }
}

module.exports = logged;
