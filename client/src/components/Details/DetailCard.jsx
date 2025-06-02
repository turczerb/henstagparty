import styled from "styled-components"; //css

const DetailCardContainer = styled.div`
  color: rgba(176, 146, 89, 1);
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  border-radius: 1rem;
  h2,
  h3,
  p {
    color: rgba(176, 146, 89, 1);
  }
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

const formatDateTime = (isoString) => {
  const date = new Date(isoString); //Ez létrehoz egy JavaScript Date objektumot az ISO stringből.
  //Figyelem: Ez automatikusan átalakítja a dátumot a helyi időzónára

  const dateString = date.toISOString().split("T")[0]; // UTC dátum
  // Közvetlenül az ISO stringből vágjuk ki az időt, így nem módosul időzóna alapján
  const timeString = isoString.split("T")[1].slice(0, 5);

  return { dateString, timeString };
};

const DetailCard = ({ data }) => {
  if (!data) return <p>Loading...</p>;

  return (
    <DetailCardContainer>
      <>
        {data.map((item, index) => {
          const { dateString, timeString } = formatDateTime(
            item.basic_info.time
          );

          return (
            <InfoRow key={index}>
              <InfoBox>
                <h2>When</h2>
                <h3>
                  {dateString} {timeString}
                </h3>
                <h2>Where</h2>
                <h3>{item.basic_info.infoLocation}</h3>
              </InfoBox>
            </InfoRow>
          );
        })}
      </>
    </DetailCardContainer>
  );
};

export default DetailCard;
