
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD0Y0SlGB8NLbUylBAF7-VNn0FIIIs53m4",
  authDomain: "yoga-prodject.firebaseapp.com",
  projectId: "yoga-prodject",
  storageBucket: "yoga-prodject.appspot.com",
  messagingSenderId: "749413357426",
  appId: "1:749413357426:web:3cf2f35c820ef6d01befeb",
  measurementId: "G-B2L0P9JB8M",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);


