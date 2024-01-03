import { styled } from "styled-components";
import sky from "../../images/blue-sky.png";

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
const ButtonBox = styled.div`
  /* padding-top: 40px; */
  position: absolute;
  top: 5%;
  right: 5%;
  & > button {
    margin-left: 10px;
  }
`;

export const S = {
  Wrapper,
  Shadowbox,
  Flexbox,
  Tempbox,
  ButtonBox,
};
