import { Api } from "../../apis/coree";
import CurrentTimePage from "../../component/correntTime";
import { useQuery } from "react-query";
import ButtonPage from "../../component/button";
import { S } from "./style";

const SEOUL = () => {
  // const [weatherData, setWeatherData] = useState(null);
  // 예외처리 if(data) {} => 아래 이펙트 리액트쿼리로 바꿔보기
  //weatherData
  const { data: weatherData } = useQuery(["getTodo"], () =>
    Api.getdata({
      lat: 37.5683,
      lon: 126.9778,
    })
  );
  console.log(weatherData);
  //꺄 보내졌다아아아아아ㅏ아아아아아아아아아아아ㅏ 짞!짞!짞!짞!짞
  // 바꿧다.. 바꿧어 아이고...
  // useEffect(() => {
  //   Api.getdata({
  //     lat: 37.5683,
  //     lon: 126.9778,
  //   }).then((data) => {
  //     console.log("데이터가 성공적으로 가져와졌습니다:", data);
  //     // 데이터를 가지고오는걸 성공했다면 setWeatherData에 저장 => 그럼 초기값으로 또 저장
  //     setWeatherData(data);
  //   });
  // }, []);
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
    <S.Wrapper>
      <h1>SEOUL</h1>
      <S.Shadowbox>
        <CurrentTimePage />
      </S.Shadowbox>
      <S.Tempbox>
        <p>{Math.round(weatherData.main.temp)}°</p>
        <span>최고:{Math.round(weatherData.main.temp_max)}°</span>
        <span>최저:{Math.round(weatherData.main.temp_min)}°</span>
        <span>체감:{Math.round(weatherData.main.feels_like)}°</span>
      </S.Tempbox>
      <S.Shadowbox>
        <S.Flexbox>
          <div>
            <p>습도:{weatherData.main.humidity}%</p>
            <p>풍속:{weatherData.wind.speed}m/s</p>
          </div>
          <div>
            <p>일출: {sunriseDate.toLocaleTimeString("en-US")}</p>
            <p>일몰:{sunsetDate.toLocaleTimeString("en-US")} </p>
          </div>
        </S.Flexbox>
      </S.Shadowbox>
      <S.ButtonBox>
        <ButtonPage size="small" variant="primary">
          Prev
        </ButtonPage>
        <ButtonPage size="small" variant="primary">
          Next
        </ButtonPage>
      </S.ButtonBox>
    </S.Wrapper>
  );
};
export default SEOUL;
