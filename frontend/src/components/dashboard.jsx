import { NavLink } from "react-router";
import cart from "../assets/cart.png";
import person from "../assets/person.png";
import { useEffect, useState } from "react";

export function Dashboard() {
    const [data, setData] = useState(null);
    const [produkty, setProdukty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            fetch("http://localhost:3000/api/user", { method: "GET", headers: { "Content-Type": "application/json" }, credentials: "include" })
                .then((response) => response.json())
                .then((data) => {
                    setData(data.data);
                    console.log(data.data);
                }),

            fetch("http://localhost:3000/api/produkty", { method: "GET", headers: { "Content-Type": "application/json" }, credentials: "include" })
                .then((response) => response.json())
                .then((data) => {
                    setProdukty(data.data);
                    console.log(data.data);
                }),
        ]).then(() => setLoading(false));
    }, []);

    return (
        !loading && (
            <div className="d-flex flex-column mb-3 w-100 p-3">
                <div className="d-flex justify-content-between align-items-center p-3" id="top">
                    <button className="fs-4 btn btn-lg btn-outline-danger">Wyloguj</button>
                    <h1 className="fw-bold logo m-0">NIGGNET</h1>
                    <NavLink to="/koszyk">
                        <img src={cart} alt="" />
                    </NavLink>
                </div>
                <div className="d-flex justify-content-center w-100">
                    <div className="w-75 d-flex justify-content-center align-items-center flex-column">
                        <div className="p-3 border rounded d-flex justify-content-center align-items-center flex-column">
                            <img className="m-4" src={person} alt="" />
                            <h4>Jesteś zalogowany jako: {data.login}</h4>
                        </div>
                        <h2 className="p-5">Lista produktów:</h2>
                        <table className="table">
                            <thead>
                                <tr className="text-center fs-4">
                                    <th>Id</th>
                                    <th>Nazwa</th>
                                    <th>Cena</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produkty.map((produkt, i) => (
                                    <tr key={produkt._id} className="p-3 text-center fs-5">
                                        <td>{i + 1}</td>
                                        <td>{produkt.nazwa}</td>
                                        <td>{produkt.cena} zł</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    );
}
