/* eslint-disable no-restricted-globals */
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../../components/button/button";
import { PopupExercises } from "../../components/popupExercises/popupExercises";
import { UserHeader } from "../../components/userHeader/userHeader";
import { PopupConfirm } from "../../components/popupConfirm/popupConfirm";
import * as S from "./styles";
import { useParams } from "react-router-dom";
import { useDatabaseForWorkout } from "../../services/firebaseApi";
import { useQueryUsersWorkoutProgressDatabase } from "../../services/queryFirebaseUsersApi";

export default function Lesson() {
  const [popupActive, setPopupActive] = useState(false);
  const [popupConfirmActive, setPopupConfirmActive] = useState(false);
  const params = useParams();

  const HandleClickPopup = () => {
    setPopupActive(true);
  };

  useDatabaseForWorkout("workouts");
  const workouts = useSelector((state) => state.workouts.workouts);

  useQueryUsersWorkoutProgressDatabase(localStorage.getItem("login"));
  const allWorkoutsProgress = useSelector(
    (state) => state.userData.user_workouts
  );

  let workoutProgress = ["0", "0", "0", "0"];

  console.log(allWorkoutsProgress, params.id);

  if (
    typeof allWorkoutsProgress !== "undefined" &&
    typeof allWorkoutsProgress[params.id] !== "undefined"
  ) {
    workoutProgress = allWorkoutsProgress[params.id].progress;
  }

  let lesson = [];
  let listExercises = [];
  if (typeof workouts.workouts !== "undefined") {
    lesson = workouts.workouts[params.id];
    listExercises = lesson.exercises;
  }

  let listExercisesSorted = [];

  if (typeof listExercises[0] !== "undefined") {
    listExercisesSorted = listExercises.map((exerciseString, index) => {
      let title = listExercises[index].split("(")[0];
      const colorAll = ["blue", "orange", "purple"];
      const color = index % 3;

      let count = parseInt(listExercises[index].match(/\d+/));
      return { count: count, title: title, color: colorAll[color] };
    });
  }

  return (
    <S.ContainerDiv>
      <S.ContentDiv>
        <UserHeader />
        <S.TitleText>{lesson.course}</S.TitleText>
        <S.TitleWorkout>
          {lesson.name}
          {lesson.title}
        </S.TitleWorkout>
        <S.WorkoutVideo>
          <iframe
            width="1160"
            height="639"
            src={lesson.video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </S.WorkoutVideo>
        <S.BlockProgressLesson>
          {typeof listExercises[0] !== "undefined" && listExercises !== [] ? (
            <S.ExercisesNumber>
              <S.TitleTextSpanLogin>Упражнения</S.TitleTextSpanLogin>
              <S.TextExercisesRepetitions>
                {listExercises.map((item) => (
                  <S.TextLi key={item}>{item}</S.TextLi>
                ))}
              </S.TextExercisesRepetitions>
              <Button
                onClick={HandleClickPopup}
                btnName="Заполнить свой прогресс"
              />
            </S.ExercisesNumber>
          ) : null}
          {typeof listExercises[0] !== "undefined" &&
          listExercisesSorted !== [] ? (
            <S.ProgressLesson>
              <S.TitleTextSpanLogin>
                Мой прогресс по тренировке 2:
              </S.TitleTextSpanLogin>
              <S.BlockAllExercises>
                {listExercisesSorted.map((item, ind) => (
                  <S.BlockProgress key={ind}>
                    <S.NameExerciseProgress>
                      {item.title}
                    </S.NameExerciseProgress>
                    <S.InputMaster>
                      {item.color === "blue" ? (
                        <S.VisuallyProgressBlue
                          key={ind}
                          name={item}
                          type="range"
                          min="0"
                          max={item.count}
                          step="1"
                          value={workoutProgress[ind]}
                          readOnly
                        />
                      ) : null}
                      {item.color === "orange" ? (
                        <S.VisuallyProgressOrange
                          key={ind}
                          name={item}
                          type="range"
                          min="0"
                          max={item.count}
                          step="1"
                          value={workoutProgress[ind]}
                          readOnly
                        />
                      ) : null}
                      {item.color === "purple" ? (
                        <S.VisuallyProgressPurple
                          key={ind}
                          name={item}
                          type="range"
                          min="0"
                          max={item.count}
                          step="1"
                          value={workoutProgress[ind]}
                          readOnly
                        />
                      ) : null}
                    </S.InputMaster>
                  </S.BlockProgress>
                ))}
              </S.BlockAllExercises>
            </S.ProgressLesson>
          ) : null}
        </S.BlockProgressLesson>

        {popupActive === true ? (
          <PopupExercises
            setPopupActive={setPopupActive}
            setPopupConfirmActive={setPopupConfirmActive}
            label={listExercises}
            workoutID={params.id}
          />
        ) : null}
        {popupConfirmActive === true ? (
          <PopupConfirm setPopupConfirmActive={setPopupConfirmActive} />
        ) : null}
      </S.ContentDiv>
    </S.ContainerDiv>
  );
}
