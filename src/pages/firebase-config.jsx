// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyB1u5zCnYYsxIob6kn5UBe13p1_WLlvzMg",
  authDomain: "try01-ae596.firebaseapp.com",
  projectId: "try01-ae596",
  storageBucket: "try01-ae596.appspot.com",
  messagingSenderId: "945230619662",
  appId: "1:945230619662:web:d91d1ab49b275c5a57c85f",
  measurementId: "G-JD9D0EWDFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
