import { useEffect, useState } from "react";

const SunTime = () => {
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  useEffect(() => {
    // 날씨 정보에서 필요한 데이터 추출
    const sunriseTimestamp = weatherData.sys.sunrise * 1000; // 일출 시간 (UNIX 타임스탬프)
    const sunsetTimestamp = weatherData.sys.sunset * 1000;

    //  // 타임스탬프를 Date 객체로 변환
    const sunriseDate = new Date(sunriseTimestamp);
    const sunsetDate = new Date(sunsetTimestamp);

    //    // 일출과 일몰 시간
    //  setSunrise(sunriseDate.toLocaleTimeString("en-US"));
    //  setSunset(sunsetDate.toLocaleTimeString("en-US"));
  }, []);
};
export default SunTime;
