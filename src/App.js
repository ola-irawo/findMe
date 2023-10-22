import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Logout from "./pages/Logout";
import Nav from "./layouts/navbar/Nav";
import Footer from "./layouts/footer/Footer";
import Widget from "./layouts/widget/Widget";
import Setting from "./pages/Setting";
import UserDetails from "./pages/UserDetails";
import UserProfile from "./pages/UserProfile";

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
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
