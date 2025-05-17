import { Koszyk, Login, Dashboard, Register } from "./components";
import { Route, Routes, Navigate, BrowserRouter, Outlet } from "react-router";
import "./App.scss";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function PrivateRoute() {
  const isLogged = getCookie("token");
  if (isLogged) {
    return <Outlet />
  } else {
    return <Navigate to={"/login"} />
  }
}

function NotLogged() {
  const isLogged = getCookie("token");
  if (isLogged) {
    return <Navigate to={"/"} />
  } else {
    return <Outlet />
  }
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NotLogged />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
          <Route path="koszyk" element={<Koszyk />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
