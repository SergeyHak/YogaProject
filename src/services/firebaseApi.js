import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { useDispatch } from "react-redux";
import { setCourses } from "../store/coursesSlice";

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
          id: data.id,
          name: data.name,
          workouts: data.workouts,
        })
      );
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
