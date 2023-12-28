// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import {getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAilaYYgT2dDwl-pj3VSD138bsV6A7l_WE",
  authDomain: "ip-matchmaking.firebaseapp.com",
  projectId: "ip-matchmaking",
  storageBucket: "ip-matchmaking.appspot.com",
  messagingSenderId: "1047692180149",
  appId: "1:1047692180149:web:95a8677dafe5faaae0dcfc",
  measurementId: "G-KGBGL83DW3"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
const analytics = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB =getFirestore(FIREBASE_APP);