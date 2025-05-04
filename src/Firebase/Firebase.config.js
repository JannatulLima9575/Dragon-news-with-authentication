// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtzu_MebdHA_ICXK2jC47A7M064847IGo",
  authDomain: "dragon-news-feed.firebaseapp.com",
  projectId: "dragon-news-feed",
  storageBucket: "dragon-news-feed.firebasestorage.app",
  messagingSenderId: "861296373976",
  appId: "1:861296373976:web:372ddb820df367f7c3e7ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;