import ProgramCard from "../Programs/ProgramCard";
import { useData } from "../Context/DataContext";
import styled from "styled-components"; //css

const FirstContainer = styled.div`
  background-color: white;
  padding: 3rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  gap: 1.2rem;
  text-align: center;

  margin: 2rem auto;
  width: 100%;
  max-width: 800px; /* hogy gépen se legyen túl széles */
  border-radius: 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2rem 1rem; /* kisebb padding mobilon */
    width: 95%; /* hogy ne érjen teljesen a széléig */
  }
`;

const ProgramsContainer = ({ id }) => {
  const { data } = useData();
  return (
    <FirstContainer id={id}>
      <div>
        <ProgramCard data={data} />
      </div>
    </FirstContainer>
  );
};

export default ProgramsContainer;
