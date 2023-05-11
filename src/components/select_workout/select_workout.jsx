import { useSelector } from "react-redux";
import * as S from "./style";
import { Link } from "react-router-dom";
import { useDataBase, useDatabaseForWorkout } from "../../services/firebaseApi";

export default function SelectWorkoutWindow({ refURL }) {
  useDataBase(refURL);
  const workoutsID = useSelector((state) => state.courses.workouts);

  useDatabaseForWorkout("workouts");
  const workouts = useSelector((state) => state.workouts.workouts);



  let selectedWorkouts = [];
  if (workoutsID.length > 0 && Object.entries(workouts).length > 0) {
    selectedWorkouts = workoutsID.map((p) => workouts.workouts[p]);
  }
  return (
    <S.ContainerDiv>
      <S.TitleWindowSpan>Выберите тренировку</S.TitleWindowSpan>
      <S.ChoiceTrainingDiv>
        <ul>
          {selectedWorkouts.map((item) => (
            <li key={item._id}>
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
