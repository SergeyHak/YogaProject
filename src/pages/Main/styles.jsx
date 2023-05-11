import styled from "styled-components";
export const ContainerDiv = styled.div`
  position: relative;
  width: 100%;
  background: #271a58;
  padding-left: calc(50% - 800px);
  padding-right: calc(50% - 800px);
`;
export const ContentDiv = styled.div`
  margin-left: 140px;
  margin-right: 140px;
`;
export const LogoTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 36px;
  margin-right: 16px;
`;
export const HeadContentDiv = styled.div`
  display: flex;
  gap: 162px;
`;
export const LogoImg = styled.img``;
export const SubTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 35px;
`;

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
  font-size: 20px;
  line-height: 115%;
  letter-spacing: -0.05px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  opacity: 0.5;
`;
export const TitleTextSpanH = styled.span`
  width: 830px;
  height: 110px;
  left: 140px;
  top: 140px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 91.5%;
  letter-spacing: -1.16878px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #f4f4ff;
  padding-top: 17px;
`;
export const SaleStickerImg = styled.img`
  width: 212.27px;
  height: 151.74px;
  left: 1158.99px;
  top: 100px;
  transform: rotate(15deg);
  padding-top: 47px;
`;
export const ProfCardImg = styled.img`
  width: 360px;
  height: 480px;
  left: 0px;
  top: 0px;
  border-radius: 30px;
`;
export const SportChoiceDiv = styled.div`
  padding-top: 52px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 34px;
  row-gap: 44px;
`;
export const UpButton = styled.button`
  margin-bottom: 50px;
  width: 147px;
  height: 48px;
  left: 646px;
  top: 1340px;
  background: #c7e957;
  border-radius: 46px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.1px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  &:hover {
    background: #daf289;
  }
  &:active {
    background: #ebffab;
  }
`;
export const ButtonDiv = styled.div`
  padding-top: 34px;
  display: flex;
  justify-content: center;
`;

export const ExitUser = styled.div`
  width: 150px;
  z-index: 1;
  padding-top: 12px;
  height: 50px;
  text-align: center;
  color: white;
  font-size: 22px;
  position: absolute;
  top: 123px;
  margin-left: 65px;
  border-radius: 20px;
  background-color: #580ea2;
`;
