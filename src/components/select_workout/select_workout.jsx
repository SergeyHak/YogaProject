import * as S from "./style"
export default function MainPage() {
    return (
      <S.ContainerDiv>
        <S.TitleWindowSpan>Выберите тренировку</S.TitleWindowSpan>
        <S.ChoiceTrainingDiv>
          <S.TrainingButton>
          Утренняя практика 
          <S.TextSpan>Йога на каждый день / 1 день
          </S.TextSpan>
          </S.TrainingButton>
          <S.TrainingButton>
          Красота и здоровье
          <S.TextSpan>Йога на каждый день / 2 день
          </S.TextSpan>
          </S.TrainingButton>
          <S.TrainingButton>
          Асаны стоя
          <S.TextSpan>Йога на каждый день / 3 день
          </S.TextSpan>
          </S.TrainingButton>
          <S.TrainingButton>
          Растягиваем мышцы бедра 
          <S.TextSpan>Йога на каждый день / 4 день
          </S.TextSpan>
          </S.TrainingButton>
          <S.TrainingButton>
          Гибкость спины 
          <S.TextSpan>Йога на каждый день / 5 день
          </S.TextSpan>
          </S.TrainingButton>        
        </S.ChoiceTrainingDiv>
      </S.ContainerDiv>
    );
  }