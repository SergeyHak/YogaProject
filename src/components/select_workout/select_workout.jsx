import * as S from "./style";
import { Link } from "react-router-dom";
import { workouts } from "../../data/workouts";

export default function SelectWorkoutWindow() {
  const workoutsID = ["f4u2xs", "7konvt", "i14akb", "fw7nbq", "ni19tv"];

  let selectedWorkouts = workoutsID.map((p) => workouts[p]);

  return (
    <S.ContainerDiv>
      <S.TitleWindowSpan>Выберите тренировку</S.TitleWindowSpan>
      <S.ChoiceTrainingDiv>
        <ul>
          {selectedWorkouts.map((item) => (
            <li key={item.toString()}>
              <Link to={`/lesson/${item._id}`}>
                <S.TrainingButton>
                  {item.name}
                  <S.TextSpan>{item.title}</S.TextSpan>
                </S.TrainingButton>
              </Link>
            </li>
          ))}
        </ul>
      </S.ChoiceTrainingDiv>
    </S.ContainerDiv>
  );
}
