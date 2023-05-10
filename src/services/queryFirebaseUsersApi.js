import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/userDatabaseSlice";

export function useQueryUsersCourseDatabase(refURL) {
  
  const dispatch = useDispatch();
  firebase
    .database()
    .ref(`users/${refURL}`)
    .once("value")
    .then((snapshot) => {
      const data = snapshot.val();
     
      dispatch(
        setUserData({
          user_email: data.user_email,
          user_courses: data.courses,
          user_workouts: data.workouts,
        })
      );
    })
    .catch((error) => {
      console.error(error);
    });
}
