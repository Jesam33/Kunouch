import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwFOMhqmUp5W1oqRrmIJqC190WOYuWer8",
  authDomain: "kunouch-f9a20.firebaseapp.com",
  projectId: "kunouch-f9a20",
  storageBucket: "kunouch-f9a20.firebasestorage.app",
  messagingSenderId: "74810052944",
  appId: "1:74810052944:web:0f1ce45b4a9cb4efa69c55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);