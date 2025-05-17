const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const db = require("./models");

const app = express();

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api/login", require("./api/auth/login"));
app.use("/api/register", require("./api/auth/register"));
app.use("/api/wyloguj", require("./api/auth/wyloguj"));

app.use("/api/user", require("./api/user"));
app.use("/api/produkty", require("./api/produkty"));
app.use("/api/koszyk", require("./api/koszyk"));
app.use("/api/addProduct", require("./api/addProduct"));

app.use((req, res) => {
    res.send({ message: "Nie poprawna ścieżka lub zapytanie!" });
});

db.mongoose.connect("mongodb://localhost/listaProduktow").then(() => {
    console.log("Pomyślnie połączono z bazą danych!");
});

app.listen(3000, () => {
    console.log("Server odpalony na porcie 3000!");
});
