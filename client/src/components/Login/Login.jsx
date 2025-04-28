import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [redirect, setRedirect] = useState(false);

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
