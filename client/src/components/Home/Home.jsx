import Login from "../Login/Login";
import DetailsContainer from "../Details/DetailsContainer";
import ProgramsContainer from "../Programs/ProgramsContainer";
import Footer from "../Footer/Footer";
import CountDown from "../CountDown/CountDown";
import MainInfo from "../MainInfo/MainInfo";
import Whatsapp from "../WhatsApp/Whatsapp";
import styled from "styled-components"; //css

const LoginSurface = styled.div``;

const Conti = styled.div`
  padding-top: 70px; // kb. a NavBar magassága
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Home = ({ isLoggedIn, onLoginSuccess }) => {
  return (
    <Conti>
      <LoginSurface>
        <div>
          {" "}
          <CountDown />
        </div>
        {!isLoggedIn && <Login onLoginSuccess={onLoginSuccess} />}
      </LoginSurface>

      {isLoggedIn && (
        <>
          <MainInfo />
          <DetailsContainer />
          <ProgramsContainer />

          <Footer />
        </>
      )}
    </Conti>
  );
};

export default Home;
