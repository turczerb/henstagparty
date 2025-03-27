import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/Login/AdminLogin";
import DataUpload from "./components/Admin/DataUpload";

import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/data_upload" element={<DataUpload />} />
      </Routes>
    </>
  );
}

export default App;
