/* eslint-disable no-restricted-globals */
import { useState } from "react";
import { Button } from "../../components/button/button";
import { PopupExercises } from "../../components/popupExercises/popupExercises";
import { UserHeader } from "../../components/userHeader/userHeader";
import * as S from "./styles";

export default function Lesson({ props, inputValueOne }) {
  const [popupActive, setPopupActive] = useState(false);

  const HandleClickPopup = () => {
    setPopupActive(true);
  };
  return (
    <S.ContainerDiv>
      <S.ContentDiv>
        <UserHeader />
        <S.TitleText>Йога</S.TitleText>
        <S.HeadNav>Красота и здоровье</S.HeadNav>
        <S.SlashSpan>/ </S.SlashSpan>
        <S.HeadNav>Йога на каждый день</S.HeadNav>
        <S.SlashSpan>/ </S.SlashSpan>
        <S.HeadNav>2 день</S.HeadNav>
        <S.WorkoutVideo>
          <iframe
            width="1160"
            height="639"
            src="https://www.youtube.com/embed/v-xTLFDhoD0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </S.WorkoutVideo>
        <S.BlockProgressLesson>
          <S.ExercisesNumber>
            <S.TitleTextSpanLogin>Упражнения</S.TitleTextSpanLogin>
            <S.TextExercisesRepetitions>
              <S.TextLi>Наклон вперед (10 повторений)</S.TextLi>
              <S.TextLi> Наклон назад (10 повторений)</S.TextLi>
              <S.TextLi>
                Поднятие ног, согнутых в коленях (5 повторений)
              </S.TextLi>
            </S.TextExercisesRepetitions>
            <Button
              onClick={HandleClickPopup}
              btnName="Заполнить свой прогресс"
            />
            {popupActive === true ? (
              <PopupExercises active={popupActive} setActive={setPopupActive} />
            ) : null}
          </S.ExercisesNumber>
          <S.ProgressLesson>
            <S.TitleTextSpanLogin>
              Мой прогресс по тренировке 2:
            </S.TitleTextSpanLogin>
            <S.BlockAllExercises>
              <S.BlockProgress>
                <S.NameExerciseProgress>Наклоны вперед</S.NameExerciseProgress>
                <S.VisuallyProgressOne
                  name="one"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={inputValueOne}
                />
              </S.BlockProgress>
              <S.BlockProgress>
                <S.NameExerciseProgress>Наклоны назад</S.NameExerciseProgress>
                <S.VisuallyProgressTwo
                  name="two"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                />
              </S.BlockProgress>
              <S.BlockProgress>
                <S.NameExerciseProgress>
                  Поднятие ног, согнутых в коленях
                </S.NameExerciseProgress>
                <S.VisuallyProgressThree
                  name="three"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                />
              </S.BlockProgress>
            </S.BlockAllExercises>
          </S.ProgressLesson>
        </S.BlockProgressLesson>
      </S.ContentDiv>
    </S.ContainerDiv>
  );
}
