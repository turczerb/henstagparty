import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/Login/AdminLogin";
import DataHandler from "./components/Admin/DataHandler";
import NavBar from "./components/NavBar/NavBar";

import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/data_upload" element={<DataHandler />} />
      </Routes>
    </>
  );
}

export default App;
