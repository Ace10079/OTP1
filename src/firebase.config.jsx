// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALtsLZOiE95aHBO24YPAv6cZWkgiyYJUI",
  authDomain: "otp-demo-6a40f.firebaseapp.com",
  projectId: "otp-demo-6a40f",
  storageBucket: "otp-demo-6a40f.appspot.com",
  messagingSenderId: "821079404529",
  appId: "1:821079404529:web:a72fafcfffbedc95385e50",
  measurementId: "G-E6510JV8XC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)