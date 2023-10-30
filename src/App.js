import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Nav from "./layouts/navbar/Nav";
import Setting from "./pages/Setting";
import UserDetails from "./pages/UserDetails";
import UserProfile from "./pages/UserProfile";
import SinglePost from "./pages/SinglePost";
import Filter from "./pages/Filter";
import Message from "./pages/Message";
import ProtectedRoute from "./componets/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          element={
            <div className="app-container">
              <Nav />
              <Outlet />
            </div>
          }
        >
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path=":id" element={<SinglePost />} />
            <Route path="/settings" element={<Setting />} />
            {/* <Route path="/user-profile" element={<UserProfile />} /> */}
            <Route path="/search" element={<Filter />} />
            <Route path="/message" element={<Message />} />
            <Route path="/user-details" element={<UserDetails />} />
          </Route>
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
