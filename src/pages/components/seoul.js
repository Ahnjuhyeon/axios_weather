import { useEffect, useState } from "react";
import { Api } from "../../apis/coree";
import CurrentTimePage from "../../component/correntTime";

const SEOUL = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    Api.getdata({
      lat: 37.5683,
      lon: 126.9778,
    }).then((data) => {
      console.log("데이터가 성공적으로 가져와졌습니다:", data);
      // 데이터를 가지고오는걸 성공했다면 setWeatherData에 저장 => 그럼 초기값으로 또 저장
      setWeatherData(data);
    });
  }, []);
  // 데이터가 아직 없을 때의 처리
  // if (!weatherData) {
  //   return <p>Loading...</p>;
  // }
  console.log(weatherData);

  return (
    <>
      <h1>SEOUL</h1>
      <div>{/* <CurrentTimePage /> */}</div>
      {/* <div>
        <p>{weatherData.main.temp}°</p>
        <span>최고:{weatherData.main.temp_max}°</span>
        <span>최저:{weatherData.main.temp_min}°</span>
        <span>체감:{weatherData.main.feels_like}°</span>
      </div>
      <div>
        <div>
          <p>습도:{weatherData.main.humidity}%</p>
          <p>풍속:{weatherData.wind.speed}m/s</p>
        </div>
        <div>
          <p>일출:AM </p>
          <p>일몰:PM </p>
        </div>
      </div> */}
    </>
  );
};
export default SEOUL;
