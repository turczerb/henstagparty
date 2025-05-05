import DetailCard from "./DetailCard";
import { useData } from "../Context/DataContext";

const DetailsContainer = () => {
  const { data } = useData();

  return (
    <div>
      <div>
        <h1>The details</h1>
      </div>

      <div>
        <DetailCard data={data} />
      </div>
    </div>
  );
};

export default DetailsContainer;
