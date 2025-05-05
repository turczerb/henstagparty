import styled from "styled-components"; //css

const ProgramCard = ({ data }) => {
  console.log("Program data:", data);
  if (!data || !Array.isArray(data)) {
    return <p>No data available</p>; // Visszaadhatunk egy üzenetet vagy üres listát
  }

  return (
    <div>
      <div>
        <>
          {data.map((item, index) => (
            <div key={index}>
              <div>
                <h2>{item.program?.time}</h2>
                <p>{item.program?.prog_location}</p>
                <p>{item.program?.activity}</p>
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default ProgramCard;
