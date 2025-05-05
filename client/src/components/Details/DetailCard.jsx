const DetailCard = ({ data }) => {
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <>
        {data.map((item, index) => (
          <div key={index}>
            <h2>When</h2>
            <h3>{item.basic_info.time}</h3>
            <h2>Where</h2>
            <p>{item.basic_info.infoLocation}</p>
          </div>
        ))}
      </>
    </div>
  );
};

export default DetailCard;
