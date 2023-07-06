// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM8mk_PBNDe1Vj4wd_hq6tHM_x9DJyFuY",
  authDomain: "blog-3d1dd.firebaseapp.com",
  projectId: "blog-3d1dd",
  storageBucket: "blog-3d1dd.appspot.com",
  messagingSenderId: "487342409445",
  appId: "1:487342409445:web:cc0c5a410336f0a774760c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();