import styled from "styled-components";

export const Container = styled.div`
  height: 110vh;
  width: 150vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupContent = styled.div`
  height: 360px;
  width: 444px;
  background-color: #f5f5f5;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PopupTitle = styled.div`
  margin-top: 41px;
  margin-bottom: 11px;
  width: 268px;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
`;

export const PopupImg = styled.img`
  height: 212px;
  width: 195px;
`;
