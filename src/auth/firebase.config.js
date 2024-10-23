import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4-xXzBVqyYwLPZ3LPjnSzYLODsOCBit4",
  authDomain: "auth-private-route-c7014.firebaseapp.com",
  projectId: "auth-private-route-c7014",
  storageBucket: "auth-private-route-c7014.appspot.com",
  messagingSenderId: "527689824904",
  appId: "1:527689824904:web:b19be4ee54dd871c56bd3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;