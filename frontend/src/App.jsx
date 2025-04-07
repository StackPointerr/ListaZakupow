import { NavLink } from "react-router";
import "./App.css";

import cart from "./assets/cart.png";
import person from "./assets/person.png";

function App() {
    return (
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
                        <h4>Jesteś zalogowany jako: USERNAME</h4>
                    </div>
                    <table className="table mt-5">
                        <thead>
                            <tr className="text-center fs-4">
                                <th>Id</th>
                                <th>Nazwa</th>
                                <th>Cena</th>
                                <th>Dodaj do koszyka</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="p-3 text-center fs-5">
                                <td>1</td>
                                <td>mleko</td>
                                <td>2.50 zł</td>
                                <td>
                                    <button className="btn btn-outline-success px-4">Dodaj</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;
