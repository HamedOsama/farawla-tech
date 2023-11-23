// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from '@firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2ru7iH-YmHmsiz19xAnihjq5WtSNjuiw", 
  authDomain: "farawla-blogs.firebaseapp.com", 
  projectId: "farawla-blogs", 
  storageBucket: "farawla-blogs.appspot.com", 
  messagingSenderId: "617204225682", 
  appId: "1:617204225682:web:3dfda0b2982900ec45f84b"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)