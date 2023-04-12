// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC17Ye0MEd5VTcp4DHyRMTVDuGc95Aqnfs",
  authDomain: "react-curso-a3819.firebaseapp.com",
  projectId: "react-curso-a3819",
  storageBucket: "react-curso-a3819.appspot.com",
  messagingSenderId: "42715716756",
  appId: "1:42715716756:web:a133ac943f48a2e7f4e881"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)

