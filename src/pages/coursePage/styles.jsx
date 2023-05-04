import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  min-height: 1623px;
  margin: 0 auto;
  background-color: #fafafa;
  box-sizing: border-box;
  padding-bottom: 50px;
  margin-bottom: 200px;
`;

export const ContentBlock = styled.div`
  margin-left: 140px;
  margin-right: 140px;
`;

export const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 36px;
`;
export const LogoImg = styled.img``;

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
  :hover {
    background-color: #2d1f79;
  }
  :active {
    background-color: #3b29a2;
  }
`;

export const HeadContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 75px;
  margin-bottom: 75px;
  width: 1160px;
  height: 310px;
  background: rgba(205, 205, 205, 0.1);
  backdrop-filter: blur(14.5187px);
  background-size: contain;
  background-position: top;
  background: cover;
  border-radius: 30px;
`;

export const SubTitleBlock = styled.div`
  margin-left: 30px;
`;

export const TitleText = styled.h1`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  opacity: 0.5;
  margin-top: 30px;
  padding: 0;
`;
export const ButtonPay = styled.button`
  margin-top: 80px;
  width: 275px;
  height: 55px;
  left: 140px;
  top: 360px;
  background: rgb(88, 14, 162);
  border-radius: 46px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 24px;
  letter-spacing: -0.05px;
  font-feature-settings: "pnum", "lnum";
  color: rgb(255, 255, 255);
  border-color: rgb(249, 235, 255);
`;
export const TitleDirectionsText = styled.p`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.8px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
`;

export const TitleLikeText = styled.p`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.8px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
`;

export const LikesBlock = styled.div`
  display: flex;
  gap: 87px;
  width: 1153px;
  height: 128px;
  margin-top: 40px;
  margin-bottom: 75px;
`;

export const LikesSubBlock = styled.div`
  display: flex;
  column-gap: 24px;
  width: 335px;
`;

export const LikesImg = styled.img`
  width: 67px;
  height: 67px;
`;

export const LikesTextBlock = styled.div`
  width: 244px;
`;

export const LikesText = styled.p`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  margin: 0;
  padding: 0;
`;

export const DirectionsBlock = styled.div`
  display: flex;
  gap: 168px;
  width: 650px;
  margin-top: 22px;
`;

export const DirectionsSubBlock = styled.div`
  width: 260px;
`;

export const DirectionsList = styled.ul``;

export const DirectionsListLi = styled.li`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  white-space: pre-wrap;
  color: black;
`;

export const InfoBlock = styled.div`
  width: 1160px;
  margin-top: 75px;
`;

export const InfoText = styled.p`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  margin: 0;
  padding: 0;
`;

export const FooterContentBlock = styled.div`
  position: relative;
  display: flex;
  margin-top: 75px;
  width: 1160px;
  height: 300px;
  background-color: #f9ebff;
  border-radius: 30px;
`;

export const FooterSubBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  width: 823px;
  margin-top: 46px;
  margin-left: 52px;
`;

export const FooterTextBlock = styled.div``;

export const FooterText = styled.p`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  margin: 0;
  padding: 0;
`;

export const SignUpTrainingButton = styled.button`
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
  :hover {
    background-color: #3f007d;
  }
  :active {
    background-color: #271a58;
  }
`;

export const HandsetImg = styled.img`
  position: absolute;
  width: 330px;
  height: 290px;
  left: 830px;
  top: 0px;
`;
