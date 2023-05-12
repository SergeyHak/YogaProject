import firebase from "firebase/compat/app";
import "firebase/compat/database";

export function mutationUsersDatabase(email) {
  const emailPath = email.replace(/\./g, "-");
  const database = firebase.database();

  database.ref(`users/${emailPath}`).set({
    user_email: email,
    status: true,
  });
}

export function mutationUsersCourseDatabase(email, course, img) {
  const emailPath = email.replace(/\./g, "-");
  const database = firebase.database();

  database.ref(`users/${emailPath}/courses/${course}`).set({
    purchased: true,
    id: course,
    img: img,
  });
}

export function mutationUsersWorkoutProgressDatabase(
  email,
  workoutID,
  inputValues
) {
  const emailPath = email.replace(/\./g, "-");
  const database = firebase.database();

  database.ref(`users/${emailPath}/workouts/${workoutID}`).set({
    id: workoutID,
    progress: inputValues,
  });
}
