import * as S from "./styles";
import logoBlack from "../../img/logoBlack.png";
import UserPhoto from "../../img/EllipsePhoto.png";
import VideoImg from "../../img/yoga.png";

export default function Lesson() {
  return (
    <S.ContainerDiv>
      <S.ContentDiv>
        <S.HeadContentDiv>
          <S.LogoTitleDiv>
            <S.LogoImg src={logoBlack} alt="logo" />
          </S.LogoTitleDiv>
          <S.UserDiv>
            <S.UserPhotoImg src={UserPhoto} alt="userphoto" />
            <S.UserNameSpan>Сергей ↓</S.UserNameSpan>
          </S.UserDiv>
        </S.HeadContentDiv>
        <S.SubTitleDiv>
          <S.TitleTextSpan>Йога</S.TitleTextSpan>
          <S.TitleTextSpanLogin>
            Красота и здоровье / Йога на каждый день / 2 день
          </S.TitleTextSpanLogin>
        </S.SubTitleDiv>
        <S.ImgYogoVideo src={VideoImg} />
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
            <S.fillProgressButton>Заполнить свой прогресс</S.fillProgressButton>
          </S.ExercisesNumber>
          <S.ProgressLesson>
            <S.TitleTextSpanLogin>
              Мой прогресс по тренировке 2:
            </S.TitleTextSpanLogin>
            <S.BlockAllExercises>
              <S.BlockProgress>
                <S.NameExerciseProgress>Наклоны вперед</S.NameExerciseProgress>
                <S.VisuallyProgressOne>
                  <S.VisuallyOne>45%</S.VisuallyOne>
                </S.VisuallyProgressOne>
              </S.BlockProgress>
              <S.BlockProgress>
                <S.NameExerciseProgress>Наклоны назад</S.NameExerciseProgress>
                <S.VisuallyProgressTwo>
                  <S.VisuallyTwo>45%</S.VisuallyTwo>
                </S.VisuallyProgressTwo>
              </S.BlockProgress>
              <S.BlockProgress>
                <S.NameExerciseProgress>
                  Поднятие ног, согнутых в коленях
                </S.NameExerciseProgress>
                <S.VisuallyProgressThree>
                  <S.VisuallyThree>45%</S.VisuallyThree>
                </S.VisuallyProgressThree>
              </S.BlockProgress>
            </S.BlockAllExercises>
          </S.ProgressLesson>
        </S.BlockProgressLesson>
      </S.ContentDiv>
    </S.ContainerDiv>
  );
}
