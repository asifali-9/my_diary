// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1Art3r46U4DhnH-o6RPbovZaXJrO_5hQ",
  authDomain: "my-diary-9.firebaseapp.com",
  projectId: "my-diary-9",
  storageBucket: "my-diary-9.appspot.com",
  messagingSenderId: "691354109208",
  appId: "1:691354109208:web:b9c3e9b2eb0f6721520a6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;