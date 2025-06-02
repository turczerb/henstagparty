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
  width: 90%;
  max-width: 990px; /* hogy gépen se legyen túl széles */
  border-radius: 16px;
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
