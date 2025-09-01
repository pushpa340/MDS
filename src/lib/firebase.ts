// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  projectId: "leadflow-central-jt2vl",
  databaseURL: "https://leadflow-central-jt2vl.firebaseio.com",
  appId: "1:180656532872:web:15eff92462d2be5a1d1e3d",
  storageBucket: "leadflow-central-jt2vl.firebasestorage.app",
  apiKey: "AIzaSyDjQDd-wOfROwuatAR695l-0_mnz8vlqqg",
  authDomain: "leadflow-central-jt2vl.firebaseapp.com",
  messagingSenderId: "180656532872"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
