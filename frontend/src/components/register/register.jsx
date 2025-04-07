import { NavLink } from "react-router";

export default function Register() {
    return (
        <div
            className="d-flex flex-column flex-lg-row justify-content-evenly w-100 p-3"
            style={{ height: "100vh" }}
        >
            <div className="d-flex w-100 justify-content-center align-items-center">
                <h1 className="display-2 fw-bold logo">NIGGNET</h1>
            </div>
            <div className="d-flex w-100 justify-content-center align-items-center">
                <form className="col-12 col-lg-8" method="POST">
                    <h1 className="text-center fs-1">Zarejestruj się</h1>
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
                        />
                    </div>
                    <p className="p-2 mb-2 text-center fs-5 bg-danger text-white rounded">
                        Podaj poprawny adres email!
                    </p>
                    <div className="d-flex flex-row gap-3 align-items-center">
                        <button className="btn btn-primary w-50 p-2 fs-4 mt-4" type="submit">
                            Zarejestruj
                        </button>
                        <NavLink className="btn btn-primary w-50 p-2 fs-4 mt-4" to="/login">
                            Masz już konto?
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}
