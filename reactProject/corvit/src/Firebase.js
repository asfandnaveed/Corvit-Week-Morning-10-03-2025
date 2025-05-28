import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBw2fBPIEtgAdxXIZzWFMTPlmgyQ9IU0Qo",
  authDomain: "corvit-week-mor-10-03-2025.firebaseapp.com",
  databaseURL: "https://corvit-week-mor-10-03-2025-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "corvit-week-mor-10-03-2025",
  storageBucket: "corvit-week-mor-10-03-2025.firebasestorage.app",
  messagingSenderId: "978873761310",
  appId: "1:978873761310:web:7669be89ed0fbd625b780f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);