import axios from "axios";
import { useEffect } from "react";

const API_KEY = `29b1ddf8120a76b9c30ea01353da61f0`;
// const CITY = `Seoul`;
const LANG = `kr`;
//lat 위도 lon경도 &units=metric = 섭씨로 변경
export const axiosInstance = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&lang=${LANG}`,
});
//&lat=37.5683&lon=126.9778&units=metric
const getdata = async ({ lat, lon }) => {
  const res = await axiosInstance.get(`&lat=${lat}&lon=${lon}8&units=metric`);
  return console.log(res.data);
  // return res.data;
};

export const Api = {
  getdata,
};

// const Page2 = () => {
//   useEffect(() => {
//     getdata({
//       lat: 37.5683,
//       lon: 126.9778,
//     });
//   }, []);
//   return <>didi</>;
// };
// export default Page2;

// 오 일단 설정값으로 부르니 데이터는 불러와진다
/* 

목표 : https://jennnn.tistory.com/44
[12/17]
오늘 한일
아이피 키 만들기 
axios연결
데이터 가져온거 console 확인 

내일 할일
데이터 정리 인자로 받을 수 있도록 정리 
서울만했어

화면에 어떻게 띄울지 정리 
피그마든 구상해서 디자인 완료 완료하기!!

[12/19] 계획
디자인 구성 했으면 자료 화면에 띄우기 


*/
