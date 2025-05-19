import ProgramCard from "../Programs/ProgramCard";
import { useData } from "../Context/DataContext";
import styled from "styled-components"; //css

const ProgramsContainer = ({ id }) => {
  const { data } = useData();
  return (
    <div id={id}>
      progikat visszaa adjakkk
      <div>
        <ProgramCard data={data} />
      </div>
    </div>
  );
};

export default ProgramsContainer;
