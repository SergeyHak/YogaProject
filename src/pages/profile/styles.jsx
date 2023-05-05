import styled from "styled-components";
export const ContainerDiv = styled.div`
  position: relative;
  width: 1440px;
  height: 1440px;
  background: #fafafa;
  margin: 0 auto;
  margin-top: 200px;
`;
export const ContentDiv = styled.div`
  margin-left: 140px;
  margin-right: 140px;
`;

export const SubTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserNameSpan = styled.span``;
export const EnterButton = styled.button`
  width: 77px;
  height: 36px;
  left: 1223px;
  top: 24px;
  background: #140d40;
  border-radius: 46px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  &:hover {
    background: #2d1f79;
  }
  &:active {
    background: #3b29a2;
  }
`;
export const TitleTextSpan = styled.span`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  padding-top: 74px;
`;
export const ProfCardImg = styled.img`
  width: 360px;
  height: 480px;
  left: 0px;
  top: 0px;
  border-radius: 30px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); /* Параметры тени */
`;
export const SportChoiceDiv = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 34px;
  row-gap: 44px;
  position: relative;
  background-color: #fafafa;
`;
export const TitleTextSpanLogin = styled.span`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  padding-top: 40px;
  margin-right: 5px;
`;
export const TitleTextSpanPass = styled.span`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  padding-top: 20px;
  margin-right: 5px;
`;
export const ChangeLogPassDiv = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  padding-bottom: 75px;
`;
export const LogButton = styled.button`
  width: 275px;
  height: 52px;
  left: 140px;
  top: 360px;
  background: #580ea2;
  border-radius: 46px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  border-color: #580ea2;
`;
export const PassButton = styled.button`
  width: 275px;
  height: 52px;
  left: 140px;
  top: 360px;
  background: #580ea2;
  border-radius: 46px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  border-color: #580ea2;
`;
export const TitleCourseSpan = styled.span`
  padding-top: 70px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
`;
export const SportDiv = styled.div`
  b: 150px;
  position: relative;
`;
export const SportButton = styled.button`
  width: 136px;
  height: 43px;
  left: 30px;
  top: 410px;
  background: #c7e957;
  border-radius: 80px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  position: absolute;
`;
export const HeadContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const UserLoginInput = styled.input`
  border-left: transparent;
  border-right: transparent;
  border-top: transparent;
  outline: none;
  text-align: center;
  font-size: 15px;
`;
export const LoginButton = styled.button`
  background: #39316c;
  border-radius: 46px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  height: 30px;
    width: 100px;
  &:hover {
    background: #120b3c;
  }
  &:active {
    background: #3b29a2;
  }
`;
export const SpanText = styled.span`
  margin-left: 10px;
`;

export const textNoPay = styled.h2`
  margin-top: 50px;
  font-weight: 400;
  font-size: 30px;
  line-height: 24px;
  color: black;
`;

export const buttonNextPay = styled.button`
  margin-top: 50px;
  background: #39316c;
  border-radius: 46px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  height: 30px;
  width: 100px;
  &:hover {
    background: #120b3c;
  }
  &:active {
    background: #3b29a2;
  }
`;