import styled from "styled-components"; //css

const ProgramCard = ({ data }) => {
  console.log("Program data:", data);
  if (!data || !Array.isArray(data)) {
    return <p>No data available</p>; // Visszaadhatunk egy üzenetet vagy üres listát
  }

  return (
    <div>
      <div>
        {data[1].program.map((item, index) => (
          <div key={index}>
            <div>
              <h2>{item.time}</h2>
              <h2>{item.location_name}</h2>
              <p>{item.prog_location_street}</p>
              <p>{item.activity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramCard;
