import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ({ onLogout }) => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("userID");
    localStorage.removeItem("isAdmin");
    onLogout(); // ez visszaállítja az isLoggedIn állapotot is false-ra az App-ban
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setVisible(!!token); // If token exists, show the navbar and logout button
  }, []);

  const isAdmin = JSON.parse(localStorage.getItem("isAdmin")) === true;

  return (
    <nav>
      <div>
        <div>
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
