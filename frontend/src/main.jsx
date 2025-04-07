import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Login from "./components/login/login.jsx";
import Register from "./components/register/register.jsx";
import Koszyk from "./components/koszyk/koszyk.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="koszyk" element={<Koszyk />} />

                <Route path="" element={<App />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
