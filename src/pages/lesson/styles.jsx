import styled from "styled-components";
export const ContainerDiv = styled.div`
  position: relative;
  width: 1440px;
  height: 1764px;
  background: #fafafa;
  margin: 0 auto;
`;
export const ContentDiv = styled.div`
  margin-left: 140px;
  margin-right: 140px;
`;

export const TitleText = styled.div`
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  padding-top: 74px;
`;

export const TitleWorkout = styled.div`
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
`;

export const WorkoutVideo = styled.div`
  margin-top: 40px;
`;

export const HeadContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TitleTextSpanLogin = styled.span`
  padding-top: 40px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #000000;
`;

export const BlockProgressLesson = styled.div`
  display: flex;
  padding-top: 40px;
  width: 1160px;
  height: 639px;
`;

export const ExercisesNumber = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

export const TextExercisesRepetitions = styled.ul`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: black;
`;

export const TextLi = styled.li`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
`;

export const fillProgressButton = styled.button`
  width: 275px;
  height: 52px;
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

export const ProgressLesson = styled.div`
  background: #f2f2f2;
  border-radius: 30px;
  width: 638px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BlockAllExercises = styled.div`
  width: 100%;
`;

export const BlockProgress = styled.div`
  padding: 15px 37px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NameExerciseProgress = styled.div`
  width: 227px;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
`;

export const VisuallyProgressBlue = styled.input`
  overflow: hidden;
  -webkit-appearance: none;
  width: 278px;
  height: 36px;
  background-color: #edecff;
  border: 2px solid #565eef;
  border-radius: 22px;

  &::-webkit-slider-thumb {
    width: 0px;
    -webkit-appearance: none;
    height: 0px;
    box-shadow: -290px 0 0 290px #565eef;
  }
`;

export const InputMaster = styled.div``;

export const VisuallyProgressOrange = styled.input`
  overflow: hidden;
  -webkit-appearance: none;
  width: 278px;
  height: 36px;
  background: #fff2e0;
  border: 2px solid #ff6d00;
  border-radius: 22px;

  &::-webkit-slider-thumb {
    width: 0px;
    -webkit-appearance: none;
    height: 0px;
    box-shadow: -290px 0 0 290px #ff6d00;
  }
`;

export const VisuallyProgressPurple = styled.input`
  overflow: hidden;
  -webkit-appearance: none;
  width: 278px;
  height: 36px;
  background: #f9ebff;
  border: 2px solid #9a48f1;
  border-radius: 22px;

  &::-webkit-slider-thumb {
    width: 0px;
    -webkit-appearance: none;
    height: 0px;
    box-shadow: -290px 0 0 290px #9a48f1;
  }
`;
