import { NavLink } from "react-router";
import person from "../../assets/person.png";

export default function Koszyk() {
    return (
        <div className="d-flex flex-column mb-3 w-100 p-3">
            <div className="d-flex justify-content-between align-items-center p-3" id="top">
                <button className="fs-4 btn btn-lg btn-outline-danger">Wyloguj</button>
                <h1 className="fw-bold logo m-0">NIGGNET</h1>
                <NavLink to="/">
                    <img src={person} alt="" />
                </NavLink>
            </div>
            <div className="w-100 d-flex justify-content-center flex-column align-items-center">
                <div className="p-3 border rounded d-flex justify-content-center align-items-center flex-column">
                    <img className="m-4" src={person} alt="" />
                    <h4>Jesteś zalogowany jako: USERNAME</h4>
                </div>
                <h2 className="p-5">Produkty w twoim koszyku:</h2>
                <div className="w-75 pt-3">
                    <table className="table fs-5">
                        <thead>
                            <tr className="text-center">
                                <th>Id</th>
                                <th>Nazwa</th>
                                <th>Cena</th>
                                <th>Usuń</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td className="p-3">1</td>
                                <td className="p-3">masło</td>
                                <td className="p-3">2.50 zł</td>
                                <td>
                                    <button className="p-2 w-50 btn btn-outline-danger">
                                        Usuń
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
