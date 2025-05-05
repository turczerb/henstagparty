import styled from "styled-components"; //css

const DetailCardContainer = styled.div`
  color: rgba(176, 146, 89, 1);
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;

  border-radius: 1rem;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap; /* Fontos, hogy engedjük a sorbontást */

  @media (max-width: 768px) {
    flex-direction: column; /* Mobilon egymás alá */
  }
`;

const InfoBox = styled.div`
  flex: 1;
  min-width: 280px; /* Garantálja, hogy legalább ennyi helyet foglaljon */
  padding: 1rem;
`;

const DetailCard = ({ data }) => {
  if (!data) return <p>Loading...</p>;

  return (
    <DetailCardContainer>
      <>
        {data.map((item, index) => (
          <InfoRow key={index}>
            <InfoBox>
              <h2>When</h2>
              <h3>{item.basic_info.time}</h3>
              <h2>Where</h2>
              <p>{item.basic_info.infoLocation}</p>
            </InfoBox>
          </InfoRow>
        ))}
      </>
    </DetailCardContainer>
  );
};

export default DetailCard;
