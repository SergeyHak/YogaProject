import firebase from "firebase/compat/app";

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