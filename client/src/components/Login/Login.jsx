import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [_, setCookies] = useCookies(["access_token"]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();

  //e.target.value gives you the current text the user has entered.
  //When a user types into the input, the onChange event is triggered,
  // and this function is called with the event object e.
  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //stops the page to reload.we dont need that.
    try {
      const response = await axios.post(
        "http://localhost:3001/auth_user/login",
        {
          userName,
          password,
        }
      );
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  //When you press the button inside a
  //<form> (and the button is of type submit), the onSubmit function will run.
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          value={userName}
          onChange={handleUsernameChange}
        ></input>
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <button type="submit">login</button>
        <Link to="/admin_login">admin login</Link>
      </form>
    </div>
  );
};

export default Login;
