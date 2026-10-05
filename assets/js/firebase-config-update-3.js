// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu8QL-Mz6tc56WNoL0TRcQqUgBHLfuLX8",
  authDomain: "pyquest-38d86.firebaseapp.com",
  databaseURL: "https://pyquest-38d86-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pyquest-38d86",
  storageBucket: "pyquest-38d86.firebasestorage.app",
  messagingSenderId: "574788675253",
  appId: "1:574788675253:web:0280af7882d284d0f480fc",
  measurementId: "G-GS04GXZXGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
window.PYQUEST_FIREBASE = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  appId: ""
};
