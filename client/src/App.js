import { Routes, Route } from "react-router-dom";
import DataHandler from "./components/Admin/DataHandler";
import NavBar from "./components/NavBar/NavBar";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import { DataProvider } from "./components/Context/DataContext";
import "react-vertical-timeline-component/style.min.css";

import styled from "styled-components"; //css

const Hatterkep = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url("/victor01052.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

function App() {
  //const [cookies] = useCookies(["access_token"]);
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
    <Hatterkep>
      <div>{isLoggedIn && <NavBar onLogout={handleLogout} />}</div>
      <DataProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isLoggedIn={isLoggedIn}
                onLoginSuccess={handleLoginSuccess}
              />
            }
          />

          <Route path="/data_upload" element={<DataHandler />} />
        </Routes>
      </DataProvider>
    </Hatterkep>
  );
}

export default App;
