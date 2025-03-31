import Login from "../Login/Login";
import DetailsContainer from "../Details/DetailsContainer";
import ProgramsContainer from "../Programs/ProgramsContainer";
import Footer from "../Footer/Footer";
import CountDown from "../CountDown/CountDown";
import Whatsapp from "../WhatsApp/Whatsapp";

const Home = () => {
  return (
    <div>
      <Login />
      <CountDown />
      <DetailsContainer />
      <ProgramsContainer />
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default Home;
