
import firebase from "firebase/compat/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase/app";
import "firebase/compat/database";

export const firebaseConfig = {
  apiKey: "AIzaSyD0Y0SlGB8NLbUylBAF7-VNn0FIIIs53m4",
  authDomain: "yoga-prodject.firebaseapp.com",
  projectId: "yoga-prodject",
  databaseURL:
    "https://yoga-prodject-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "yoga-prodject.appspot.com",
  messagingSenderId: "749413357426",
  appId: "1:749413357426:web:3cf2f35c820ef6d01befeb",
  measurementId: "G-B2L0P9JB8M",
};

firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// console.log(analytics);

// const databaseURL =
//   "https://yoga-prodject-default-rtdb.europe-west1.firebasedatabase.app";

export function getDataBase() {
  firebase
    .database()
    .ref("/courses/ab1c3f")
    .once("value")
    .then((snapshot) => {
      const data = snapshot.val();
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
