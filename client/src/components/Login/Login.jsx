import { useState } from "react";
import axios from "axios";
//import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"; //css

const FirstContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: grid;
  gap: 0.4rem;
  padding: 2rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  min-width: 300px;

  @media (max-width: 480px) {
    padding: 1.5rem;
    input,
    button {
      font-size: 0.95rem;
    }
  }
`;

const StyledInput = styled.input`
  border-radius: 7px;
  height: 20px;
`;

const StyledButton = styled.button`
  height: 40px; /* Gomb magassága */
  width: 100%; /* Gomb szélességét is 100%-ra állítjuk */
  background-color: #d2a679; /* Pezsgő szín */
  background-color: rgba(176,146,89,1)
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b58a59; /* Sötétebb szín hover állapotban */
  }

  &:disabled {
    background-color: #ccc; /* Disable gomb szín */
    cursor: not-allowed;
  }
`;

const Login = ({ onLoginSuccess }) => {
  //const [_, setCookies] = useCookies(["access_token"]);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [isAdmin, setIsAdmin] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

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

      localStorage.setItem("access_token", result.data.token); // Tárolás localStorage-ban
      localStorage.setItem("userID", result.data.userID);
      localStorage.setItem("isAdmin", JSON.stringify(result.data.isAdmin));
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
    <FirstContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          placeholder="username"
          value={username}
          onChange={handleUsernameChange}
        ></StyledInput>
        <StyledInput
          placeholder="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        ></StyledInput>
        <StyledButton
          type="submit"
          disabled={username && password ? false : true}
        >
          login
        </StyledButton>
      </StyledForm>
    </FirstContainer>
  );
};

export default Login;
