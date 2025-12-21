// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwUv_YUinjTHkEu1JNtPcLRa7UXFQWszU",
  authDomain: "netflixgpt-aff13.firebaseapp.com",
  projectId: "netflixgpt-aff13",
  storageBucket: "netflixgpt-aff13.firebasestorage.app",
  messagingSenderId: "628209052932",
  appId: "1:628209052932:web:92ca3a0a8f89e5ddfb7451",
  measurementId: "G-HR5BP7EVVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();