import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"; //css

const NavBarOut = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem;
  color: white;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    background: white;
    padding: 1rem;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 999;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;

  span {
    width: 25px;
    height: 3px;
    background: white;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavBar = ({ onLogout }) => {
  const [open, setOpen] = useState(false);
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
    <NavBarOut>
      <NavContent>
        <h3 style={{ color: "white" }}>Zsófi & Máté</h3>

        {/* Hamburger ikon – csak mobilon látszik */}
        <Hamburger onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </Hamburger>

        {/* Menü lista – mobilon ki-be csúszik */}
        <Menu open={open}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Details</a>
          </li>
          <li>
            <a href="/">Getting there</a>
          </li>
          <li>
            <a href="/">Program</a>
          </li>
          <li>
            <a href="/">Upload pic at xy</a>
          </li>
          {isAdmin && (
            <li>
              <button>Szerkesztés</button>
            </li>
          )}
          {visible && (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          )}
        </Menu>
      </NavContent>
    </NavBarOut>
  );
};

export default NavBar;
