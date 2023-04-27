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
  height: 554px;
  width: 444px;
  background-color: #f5f5f5;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PopupTitle = styled.div`
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  margin-top: 36px;
  margin-bottom: 30px;
`;
