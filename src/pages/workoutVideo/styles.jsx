import styled from "styled-components";
export const ContainerDiv = styled.div`
  position: relative;
  width: 1440px;
  height: 1764px;
  background: #fafafa;
  margin: 0 auto;
  margin-top: 200px;
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
export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 24px;
`;
export const LogoImg = styled.img``;
export const UserPhotoImg = styled.img``;
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
export const HeadContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
