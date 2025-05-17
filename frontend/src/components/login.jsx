import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function Login() {
    const [login, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [blad, setBlad] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ login, password }),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response.sukces) {
                    setCookie("token", response.token, 7);
                    navigate("/");
                    setBlad("");
                } else {
                    setBlad(Object.values(response.bledy)[0]);
                }
            });
    };

    return (
        <div className="d-flex flex-column flex-lg-row justify-content-evenly w-100 p-3" style={{ height: "100vh" }}>
            <div className="d-flex w-100 justify-content-center align-items-center">
                <h1 className="display-2 fw-bold logo">NIGGNET</h1>
            </div>
            <div className="d-flex w-100 justify-content-center align-items-center">
                <form className="col-12 col-lg-8" method="POST">
                    <h1 className="text-center fs-1">Zaloguj się</h1>
                    <div className="form-group w-100 pb-4 pt-4">
                        <label className="fs-3" htmlFor="email">
                            Adres email
                        </label>
                        <input
                            className="form-control p-3 fs-5 mt-2"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="email"
                            value={login}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group w-100 pb-4">
                        <label className="fs-3" htmlFor="password">
                            Hasło
                        </label>
                        <input
                            className="form-control p-3 fs-5 mt-2"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Hasło"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {blad ? <p className="p-2 mb-2 text-center fs-5 bg-danger text-white rounded">{blad}</p> : ""}
                    <div className="d-flex flex-row gap-3 align-items-center">
                        <button className="btn btn-primary w-50 p-2 fs-4" onClick={handleSubmit}>
                            Zaloguj
                        </button>
                        <NavLink className="btn btn-primary w-50 p-2 fs-4" to="/register">
                            Utwórz konto
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}
