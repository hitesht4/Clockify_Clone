// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD60byQOozbDouCwlM_OzaRnvJC8oPRKXU",
  authDomain: "react-authentication-eb0b5.firebaseapp.com",
  projectId: "react-authentication-eb0b5",
  storageBucket: "react-authentication-eb0b5.appspot.com",
  messagingSenderId: "612304930821",
  appId: "1:612304930821:web:b0b0f3b21e5ddc0bccb46c",
  measurementId: "G-ZRJWH30FJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app;
const analytics = getAnalytics(app);