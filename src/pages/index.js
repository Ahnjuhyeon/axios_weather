import { useSearchParams } from "react-router-dom";
import LA from "./components/la";
import SEOUL from "./components/seoul";
import LONDON from "./components/london";
import PARIS from "./components/paris";
import SYDNEY from "./components/sydeny";

const AREAGROUP = ["seoul", "la", "lon", "paris", "sydeny"];

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const area = searchParams.get("area");
  return (
    <>
      <div>
        {area === "seoul" && <SEOUL />}
        {area === "la" && <LA />}
        {area === "lon" && <LONDON />}
        {area === "paris" && <PARIS />}
        {area === "sydeny" && <SYDNEY />}
        {AREAGROUP.map((el) => (
          <button
            onClick={() => {
              setSearchParams({ area: el });
            }}
          >
            {el}
          </button>
        ))}
      </div>
    </>
  );
};

export default MainPage;
