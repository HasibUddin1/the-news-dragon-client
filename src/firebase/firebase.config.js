// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5SOjnQ5O3iWlIEg2r4Pc72LtUsGjj7dE",
  authDomain: "the-news-dragon-d5eb8.firebaseapp.com",
  projectId: "the-news-dragon-d5eb8",
  storageBucket: "the-news-dragon-d5eb8.appspot.com",
  messagingSenderId: "907389516805",
  appId: "1:907389516805:web:9c5a3af9dfbbecee17f06c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;