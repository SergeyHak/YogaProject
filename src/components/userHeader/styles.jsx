import styled from "styled-components";

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
  cursor: pointer;
  padding-top: 24px;
`;
export const LogoImg = styled.img`
  width: 182.96px;
  height: 28.56px;
`;
export const UserPhotoImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const UserNameSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  text-align: right;
  letter-spacing: -0.1px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
`;

export const HeadContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ExitUser = styled.div`
  width: 150px;
  padding-top: 12px;
  height: 50px;
  text-align: center;
  color: white;
  font-size: 22px;
  position: absolute;
  top: 105px;
  margin-left: 18px;
  border-radius: 20px;
  background-color: #580ea2;
`;