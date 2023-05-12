import styled from "styled-components";
export const ContainerDiv = styled.div`
  position: absolute;
  width: 444px;
  height: 626px;
  background: #ffffff;
  border-radius: 12px;
  margin: 0 auto;
  top: 50px;
  left: 500px;
`;
export const ContentDiv = styled.div``;
export const TitleWindowSpan = styled.span`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  margin-left: 53px;
  margin-right: 54px;
  padding-top: 36px;
  display: flex;
`;
export const ChoiceTrainingDiv = styled.div`
  margin-left: 83px;
  margin-right: 83px;
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  overflow: auto;
  width: 278px;
  height: 480px;
`;
export const Div = styled.div`
  &:hover {
    color: #c9eabd;
  }
`;
export const TrainingButton = styled.button`
  width: 278px;
  height: 76px;
  border: 1px solid #000000;
  border-radius: 26px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  color: #000000;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  &:hover {
    color: #c9eabd;
    border-color: #2da02d;
    &> span{
      color: #c9eabd;
    }
  }
`;
export const TextSpan = styled.span`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
`;
