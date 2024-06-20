// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ac6b0.firebaseapp.com",
  projectId: "mern-estate-ac6b0",
  storageBucket: "mern-estate-ac6b0.appspot.com",
  messagingSenderId: "530510936345",
  appId: "1:530510936345:web:30c673c6ae72d68ed96d88"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);