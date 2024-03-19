// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY1,
  authDomain: "mern-estate-85ffe.firebaseapp.com",
  projectId: "mern-estate-85ffe",
  storageBucket: "mern-estate-85ffe.appspot.com",
  messagingSenderId: "978970083691",
  appId: "1:978970083691:web:601adc30b993912b724c2e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);