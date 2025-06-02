import styled from "styled-components"; //css
import { FaClock, FaMapMarkerAlt, FaGlassCheers } from "react-icons/fa";

const Text = styled.div`
  color: rgba(176, 146, 89, 1);
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  border-bottom: 1px solid #f3e9d2;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TimeColumn = styled.div`
  flex: 0 0 120px;
  font-weight: bold;
  font-size: 1rem;
  color: #b09259;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0.5rem;
  }
`;

const InfoColumn = styled.div`

  flex: 1;
  text-align: left;

    @media (max-width: 768px) {
    text-align: center;
  }

  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    color: #b09259;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }
  }

  p {
    margin: 0.2rem 0;
    
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 768px) {
      justify-content: center;
    }
  
  }
`;

const ProgramCard = ({ data }) => {
  console.log("Program data:", data);
  if (!data || !Array.isArray(data)) {
    return <p>No data available</p>; // Visszaadhatunk egy üzenetet vagy üres listát
  }

  return (
    <div>
      <div>
        {data[0].program.map((item, index) => (
          <Row key={index}>
            <Text>
              <TimeColumn>
                <FaClock />
                {item.time}
              </TimeColumn>
              <InfoColumn>
                <h3>
                  <FaMapMarkerAlt />
                  {item.location_name}
                </h3>
                <p>{item.prog_location_street}</p>
                <p>{item.activity}</p>
              </InfoColumn>
            </Text>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default ProgramCard;
