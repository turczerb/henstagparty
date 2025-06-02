import styled from "styled-components"; //css

const FirstContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9); /* enyhén áttetsző fehér */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  gap: 1.2rem;
  text-align: center;

  margin: 2rem auto;
  width: 90%;
  max-width: 800px; /* hogy gépen se legyen túl széles */
  border-radius: 16px;

  h1 {
    font-size: 2.5rem;
    color: rgba(176, 146, 89, 1);
  }

  h2 {
    font-size: 1.5rem;
    color: rgba(176, 146, 89, 1);
  }

  button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-style: solid;
    border-color: rgba(176, 146, 89, 1);
    color: rgba(176, 146, 89, 1);

    border-radius: 8px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.2rem;
    }

    button {
      width: 100%;
    }
  }
`;

const MainInfo = () => {
  return (
    <FirstContainer>
      <div>
        <h2>Together with the family and friends</h2>
      </div>
      <div>
        <h1>Zsofi and Mate</h1>
      </div>
      <div>
        <h2>joyfully invite you to their hen and stag party!</h2>
      </div>
      <div>
        <h2>July 22, 2025</h2>
      </div>
      <div>
        <h2>At Balatonfured</h2>
      </div>
    </FirstContainer>
  );
};

export default MainInfo;
