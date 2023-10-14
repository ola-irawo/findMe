import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Nav from "./layouts/navbar/Nav";
import Footer from "./layouts/footer/Footer";
import Widget from "./layouts/widget/Widget";

function App() {
  return (
    <>
      <Routes>
        <Route
          element={
            <div className="app-container">
              <Nav />
              <Outlet />
              <Widget />
            </div>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
