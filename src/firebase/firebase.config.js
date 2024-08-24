// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJPWuNol-TAjLdprm5ns_vLX07hdQLgoo",
  authDomain: "the-dragon-news-auth-5efc1.firebaseapp.com",
  projectId: "the-dragon-news-auth-5efc1",
  storageBucket: "the-dragon-news-auth-5efc1.appspot.com",
  messagingSenderId: "64723764016",
  appId: "1:64723764016:web:acd3c63ee2c7da75d0bef5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;