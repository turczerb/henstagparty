import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ({ onLogout }) => {
  const [cookies, setCookies, removeCookie] = useCookies([
    "access_token",
    "userID",
    "logged_in",
  ]);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    removeCookie("access_token");
    removeCookie("userID");
    removeCookie("logged_in");
    onLogout(); // ez visszaállítja az isLoggedIn állapotot is false-ra az App-ban
    navigate("/");
  };

  useEffect(() => {
    setVisible(!!cookies.access_token);
  }, [cookies.access_token]);

  return (
    <div>
      <nav>
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/">Details</a>
        </div>
        <div>
          <a href="/">Getting there</a>
        </div>
        <div>
          <a href="/">Program</a>
        </div>
        <div>
          <a href="/">Upload pic at xy</a>
        </div>
        {visible && cookies.access_token ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
