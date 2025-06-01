import { useData } from "../Context/DataContext";

const FrameInfo = ({ id }) => {
  const { data } = useData();

  if (!data || !Array.isArray(data)) {
    return <p>No data available</p>; // Visszaadhatunk egy üzenetet vagy üres listát
  }
  return (
    <div id={id}>
      <div>
        {data[1].frame.map((item, index) => (
          <div key={index}>
            <div>
              <ul>
                <li>{item.description}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrameInfo;
//https://photos.app.goo.gl/cqHWjjBYyJ8UEEyj9
