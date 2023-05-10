import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { useDispatch } from "react-redux";
import { setCourses } from "../store/coursesSlice";
import { setWorkouts } from "../store/workoutsSlice";

export function useDataBase(refURL) {
  const dispatch = useDispatch();
  firebase
    .database()
    .ref(refURL)
    .once("value")
    .then((snapshot) => {
      const data = snapshot.val();
      dispatch(
        setCourses({
          description: data.description,
          directions: data.directions,
          fit: data.fit,
          id: data._id,
          img: data.img,
          name: data.name,
          workouts: data.workouts,
        })
      );
    })
    .catch((error) => {
      console.error(error);
    });
}

export function useDatabaseForWorkout() {
  const dispatch = useDispatch();
  firebase
    .database()
    .ref("workouts")
    .once("value")
    .then((snapshot) => {
      const data = snapshot.val();
      dispatch(
        setWorkouts({
          workouts: data,
        })
      );
    })
    .catch((error) => {
      console.error(error);
    });
}
