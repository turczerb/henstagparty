import Login from "../Login/Login";
import DetailsContainer from "../Details/DetailsContainer";
import ProgramsContainer from "../Programs/ProgramsContainer";
import Footer from "../Footer/Footer";
import CountDown from "../CountDown/CountDown";
import Whatsapp from "../WhatsApp/Whatsapp";
import styled from "styled-components"; //css

const LoginSurface = styled.div`
  min-height: 100vh;
  background-image: url("/victor01052.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Home = ({ isLoggedIn, onLoginSuccess }) => {
  return (
    <div>
      <LoginSurface>
        <div>
          {" "}
          <CountDown />
        </div>
        {!isLoggedIn && <Login onLoginSuccess={onLoginSuccess} />}
      </LoginSurface>

      {isLoggedIn && (
        <>
          <DetailsContainer />
          <ProgramsContainer />
          <Whatsapp />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
