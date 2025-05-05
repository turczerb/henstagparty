import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/Login/AdminLogin";
import DataHandler from "./components/Admin/DataHandler";
import NavBar from "./components/NavBar/NavBar";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Home from "./components/Home/Home";

function App() {
  const [cookies] = useCookies(["access_token"]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); //we are not logged in

  /* useEffect(() => {
    setIsLoggedIn(!!cookies.access_token);
  }, [cookies.access_token]);*/

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // if login goed the state changes to true.
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <div>{isLoggedIn && <NavBar onLogout={handleLogout} />}</div>
      <Routes>
        <Route
          path="/"
          element={
            <Home isLoggedIn={isLoggedIn} onLoginSuccess={handleLoginSuccess} />
          }
        />

        <Route path="/data_upload" element={<DataHandler />} />
      </Routes>
    </>
  );
}

export default App;
