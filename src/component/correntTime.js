import { useEffect, useState } from "react";

const CurrentTimePage = () => {
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    // 컴포넌트가 마운트될 때와 매 분마다 현재 시간을 업데이트
    const intervalId = setInterval(() => {
      const now = new Date(); //현재시간
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";
      // 시간을 12시간 형식으로 변경
      const formattedHours = hours % 12 || 12;

      // 시간을 두 자리 숫자로 포맷팅
      const formattedTime = `${ampm} ${formattedHours}:${String(
        minutes
      ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
      /*
          ${String(minutes).padStart(2, "0")}: 현재 시간의 분을 표시
          String(minutes)는 minutes 변수를 문자열로 변환하고, padStart(2, "0")는 
          두 자리로 만들기 위해 앞에 0으로 채운다 -> 예를 들어, 1분이라면 "01"로 표시.
          */
      // 현재 시간을 상태에 업데이트
      setCurrentTime(formattedTime);
    }, 1000); // 1초마다 업데이트

    // 컴포넌트가 언마운트될 때 clearInterval로 interval 해제
    return () => clearInterval(intervalId);
  }, []);
  //   console.log(currentTime);
  return <>{currentTime}</>;
};
export default CurrentTimePage;
