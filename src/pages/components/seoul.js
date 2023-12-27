import { useEffect, useState } from "react";
import { Api } from "../../apis/coree";
import CurrentTimePage from "../../component/correntTime";
import styled from "styled-components";
import sky from "../../images/blue-sky.png";

const SEOUL = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  // 예외처리 if(data) {} => 아래 이펙트 리액트쿼리로 바꿔보기
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
  if (!weatherData) {
    return <p>Loading...</p>;
  }
  console.log(weatherData);

  // 날씨 정보에서 필요한 데이터 추출
  const sunriseTimestamp = weatherData.sys.sunrise * 1000; // 일출 시간 (UNIX 타임스탬프)
  const sunsetTimestamp = weatherData.sys.sunset * 1000;

  //타임스탬프를 Date 객체로 변환
  const sunriseDate = new Date(sunriseTimestamp);
  const sunsetDate = new Date(sunsetTimestamp);

  console.log(sunriseDate);
  return (
    <Wrapper>
      <h1>SEOUL</h1>
      <Shadowbox>
        <CurrentTimePage />
      </Shadowbox>
      <Tempbox>
        <p>{weatherData.main.temp}°</p>
        <span>최고:{weatherData.main.temp_max}°</span>
        <span>최저:{weatherData.main.temp_min}°</span>
        <span>체감:{weatherData.main.feels_like}°</span>
      </Tempbox>
      <Shadowbox>
        <Flexbox>
          <div>
            <p>습도:{weatherData.main.humidity}%</p>
            <p>풍속:{weatherData.wind.speed}m/s</p>
          </div>
          <div>
            <p>일출: {sunriseDate.toLocaleTimeString("en-US")}</p>
            <p>일몰:{sunsetDate.toLocaleTimeString("en-US")} </p>
          </div>
        </Flexbox>
      </Shadowbox>
    </Wrapper>
  );
};
export default SEOUL;

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${sky});
  background-size: cover;
  background-position: bottom;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  & > h1 {
    font-size: 66px;
    text-shadow: 5px 6px 10px grey;
  }
`;

const Shadowbox = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  width: 520px;
  margin: 0 auto;
  font-size: 77px;
  padding: 10px 0;
  box-shadow: 5px 6px 9px rgba(0, 0, 0, 0.3);
  & > div > div > p {
    font-size: 24px;
    /* font-weight: 400; */
  }
`;
const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  text-align: left;
`;

const Tempbox = styled.div`
  & > p {
    font-size: 77px;
    margin: 0;
  }
  font-size: 24px;
  padding: 50px 0;
  text-shadow: 5px 6px 10px grey;
`;
