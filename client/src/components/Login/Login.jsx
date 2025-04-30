import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = ({ onLoginSuccess }) => {
  const [_, setCookies] = useCookies(["access_token"]);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      const result = await axios.post("http://localhost:3001/auth_user/login", {
        username,
        password,
      });
      console.log(result); // Check the response
      setCookies("access_token", result.data.token);
      setCookies("userID", result.data.userID);
      setCookies("logged_in", true);
      //window.localStorage.setItem("access_token", result.data.token); // Tárolás localStorage-ban
      //window.localStorage.setItem("userID", result.data.userID);
      //window.localStorage.setItem("isAdmin", result.data.isAdmin);
      // Ellenőrzés, hogy tényleg bekerültek-e az adatok a localStorage-ba

      navigate("/");
      onLoginSuccess();
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
          value={username}
          onChange={handleUsernameChange}
        ></input>
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <button type="submit" disabled={username && password ? false : true}>
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
