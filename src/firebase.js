import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCowNt6XNrP6tL8K7MhQ3IIZcc-LURH3n8",
    authDomain: "hotel-app-9e0d7.firebaseapp.com",
    projectId: "hotel-app-9e0d7",
    storageBucket: "hotel-app-9e0d7.appspot.com",
    messagingSenderId: "564221027721",
    appId: "1:564221027721:web:3592ab828ce20f10182d58",
    measurementId: "G-LN50B205BG"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };