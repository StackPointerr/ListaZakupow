async function isAdmin(req, res, next) {
    if (!req.user.czyAdmin) {
        res.send({
            sukces: false,
            bledy: { token: "Brak wystarczajacych uprawnien" },
        });
    }

    return next();
}

module.exports = isAdmin;
