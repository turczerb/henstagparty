import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/");
  };

  useEffect(() => {
    if (cookies.access_token) {
      setVisible(true); // Show logout when the user is logged in
    } else {
      setVisible(false); // Hide logout when the user is not logged in
    }
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
