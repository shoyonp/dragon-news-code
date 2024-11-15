// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArjEPjVHpdm5J544fgO0e9snjdgqeJnM4",
  authDomain: "dragon-news-b2dfb.firebaseapp.com",
  projectId: "dragon-news-b2dfb",
  storageBucket: "dragon-news-b2dfb.firebasestorage.app",
  messagingSenderId: "743416750812",
  appId: "1:743416750812:web:2df6545dfb8da283a84a19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);