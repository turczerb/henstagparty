import DetailCard from "./DetailCard";
import { useData } from "../Context/DataContext";
import styled from "styled-components"; //css

const FirstContainer = styled.div`
  background-color: rgba(223, 239, 242, 1);
  padding: 3rem 1rem;
  text-align: center;
`;

const Title = styled.h1`
  color: rgba(176, 146, 89, 1);
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const DetailsContainer = () => {
  const { data } = useData();

  return (
    <FirstContainer>
      <Title>The details</Title>

      <DetailCard data={data} />
    </FirstContainer>
  );
};

export default DetailsContainer;
