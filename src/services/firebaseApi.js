import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { firebaseConfig } from "../firebase";
// const databaseURL =
//   "https://yoga-prodject-default-rtdb.europe-west1.firebasedatabase.app";

export function getDatabase(value) {
  firebase
    .database()
    .ref(firebaseConfig.databaseURL)
    .once(value)
    .then((snapshot) => {
      const data = snapshot.val();
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
