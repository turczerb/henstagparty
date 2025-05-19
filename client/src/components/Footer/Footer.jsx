import styled from "styled-components"; //css
import { IoMdArrowUp } from "react-icons/io";

const FooterContainer = styled.div`
  background-color: rgba(209, 186, 142, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0 20px;
  gap: 45px;
`;

const Footertext = styled.h2`
  color: rgba(84, 69, 40, 1);
  margin: 0;
  text-align: center;
`;

const UpIcon = styled(IoMdArrowUp)`
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px); /* kis lebegés hatás */
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterContainer>
      <div>
        <UpIcon onClick={scrollToTop} aria-label="Ugrás a lap tetejére" />
      </div>
      <Footertext>Zsófi & Máte 2025&copy;</Footertext>
    </FooterContainer>
  );
};

export default Footer;
