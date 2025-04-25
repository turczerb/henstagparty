import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <input placeholder="username" value={userName}></input>
        <input placeholder="password" type="password" value={password}></input>
        <button>login</button>
        <Link to="/admin_login">admin login</Link>
      </form>
    </div>
  );
};

export default Login;
