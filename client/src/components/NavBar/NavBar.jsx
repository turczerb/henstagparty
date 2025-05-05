import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ({ onLogout }) => {
  /*const [cookies, setCookies, removeCookie] = useCookies([
    "access_token",
    "userID",
    "logged_in",
    "isAdmin",
  ]);*/
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    /*removeCookie("access_token");
    removeCookie("userID");
    removeCookie("logged_in");
    removeCookie("isAdmin");*/

    localStorage.removeItem("access_token");
    localStorage.removeItem("userID");
    localStorage.removeItem("isAdmin");
    onLogout(); // ez visszaállítja az isLoggedIn állapotot is false-ra az App-ban
    navigate("/");
  };

  /*useEffect(() => {
    setVisible(!!cookies.access_token);
  }, [cookies.access_token]);*/
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setVisible(!!token); // If token exists, show the navbar and logout button
  }, []);

  const isAdmin = JSON.parse(localStorage.getItem("isAdmin")) === true;

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
        <div>{isAdmin && <button>Szerkesztés</button>}</div>
        {visible && <button onClick={logout}>Logout</button>}
      </nav>
    </div>
  );
};

export default NavBar;
