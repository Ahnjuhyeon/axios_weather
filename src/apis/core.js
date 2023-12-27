import axios from "axios";
import { useEffect } from "react";

const API_KEY = `170Sd1lcLc6WOMa%2BMRa1567ueijTsI0zIvLfbv8bUEGHMPggDZ9VYERHQeeIRioTuxzwBneU1GyDZ2TTu71Qgw%3D%3D`;
export const axiosInstance = axios.create({
  baseURL: `http://apis.data.go.kr/1352000/ODMS_STAT_46/callStats46Api?serviceKey=${API_KEY}`,
});
//&pageNo=1&numOfRows=10&apiType=JSON&year=2016
const getdata = async ({ pageNo, numOfRows, apiType, year }) => {
  const res = await axiosInstance.get(
    `&pageNo=1&numOfRows=20&apiType=JSON&year=2016`
  );
  return console.log(res.data);
};

// export const Api = {
//   getdata,
// };

const Page = () => {
  useEffect(() => {
    getdata({
      // pageNo: 1,
      // numOfRows: 10,
      // apiType: "JSON",
      // year: 2016,
    });
  }, []);

  return <div>얍</div>;
};

export default Page;
/*

const res = await axiosInstance.get(&lat=${lat}&lon=${lon}8&units=metric);
axiosInstance.get('/', {
 parmas: {
   lat,
   lon
   units:metric
 }
})
*/
