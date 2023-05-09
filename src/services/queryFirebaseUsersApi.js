import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/userDatabaseSlice";

export function useQueryUsersCourseDatabase(refURL) {
  console.log(refURL);
  const dispatch = useDispatch();
  firebase
    .database()
    .ref(`users/${refURL}`)
    .once("value")
    .then((snapshot) => {
      const data = snapshot.val();
      console.log(data);
      dispatch(
        setUserData({
          user_email: data.user_email,
          courses: data.courses,
          user_workouts: data.workouts,
        })
      );
    })
    .catch((error) => {
      console.error(error);
    });
}
