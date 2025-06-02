import { useData } from "../Context/DataContext";
import styled from "styled-components"; //css
import { GiClick } from "react-icons/gi";

const FrameContainer = styled.div`
  color: rgba(176, 146, 89, 1);
  max-width: 800px;
  padding: 2rem 1rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 3rem 1rem;
  text-align: center;
  margin: 2rem auto;
  width: 90%;
  max-width: 990px; /* hogy gépen se legyen túl széles */
  border-radius: 16px;
`;

const Stilo = styled.a`
  color: rgba(176, 146, 89, 1);
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: rgba(176, 146, 89, 0.1);
    color: rgba(120, 90, 40, 1);
  }

  &:focus,
  &:active {
    background-color: rgba(176, 146, 89, 0.2);
    color: rgba(120, 90, 40, 1);
    outline: none;
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

const FrameInfo = ({ id }) => {
  const { data } = useData();

  if (!data || !Array.isArray(data)) {
    return <p>No data available</p>; // Visszaadhatunk egy üzenetet vagy üres listát
  }
  return (
    <FrameContainer id={id}>
      <div>
        {data[0].frame.map((item, index) => (
          <InfoRow key={index}>
            <div>
              <ul>
                <li>
                  {index === 0 || index === 1 ? (
                    <Stilo
                      href={
                        index === 0
                          ? "https://photos.app.goo.gl/cqHWjjBYyJ8UEEyj9"
                          : "https://apps.apple.com/br/app/the-frame-camera/id750863887?l=en-GB"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.description}{" "}
                      <GiClick size={14} style={{ marginLeft: "4px" }} />
                    </Stilo>
                  ) : (
                    item.description
                  )}
                </li>
              </ul>
            </div>
          </InfoRow>
        ))}
      </div>
    </FrameContainer>
  );
};

export default FrameInfo;
//https://photos.app.goo.gl/cqHWjjBYyJ8UEEyj9
