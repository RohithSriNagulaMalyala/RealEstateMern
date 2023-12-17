// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-589cc.firebaseapp.com",
  projectId: "mern-estate-589cc",
  storageBucket: "mern-estate-589cc.appspot.com",
  messagingSenderId: "697110476582",
  appId: "1:697110476582:web:e5aa9e0bdcf68e945f73e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);