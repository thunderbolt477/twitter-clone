// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzxFZ3ON_EZh07W6fJXi9X-RJOdDKzM7E",
  authDomain: "twitter-clone-2f020.firebaseapp.com",
  projectId: "twitter-clone-2f020",
  storageBucket: "twitter-clone-2f020.appspot.com",
  messagingSenderId: "716018238104",
  appId: "1:716018238104:web:03b6c8eb7adce6fc0c86ed",
  measurementId: "G-2F42BXHF0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);