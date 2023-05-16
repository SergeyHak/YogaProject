/* eslint-disable react-hooks/exhaustive-deps */
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  setUserData,
  setUserWorkoutProgressData,
} from "../store/userDatabaseSlice";
import { getDatabase, ref, onValue } from "firebase/database";

export function useQueryUsersCourseDatabase(refURL) {
  const dispatch = useDispatch();
  firebase
    .database()
    .ref(`users/${refURL.toLowerCase()}`)
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

export async function useQueryUsersWorkoutProgressDatabase(refURL) {
  const db = getDatabase();
  const dispatch = useDispatch();
  const emailPath = refURL.replace(/\./g, "-");

  const workoutProgressRef = ref(db, `users/${emailPath}`);
  useEffect(() => {
    onValue(workoutProgressRef, (snapshot) => {
      const data = snapshot.val();
      dispatch(
        setUserWorkoutProgressData({
          user_workouts: data.workouts,
        })
      );
    });
    return () => {};
  }, []);
}
