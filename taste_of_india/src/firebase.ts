// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "redacted",
    authDomain: "taste-of-india-58e23.firebaseapp.com", 
    projectId: "taste-of-india-58e23", 
    storageBucket: "taste-of-india-58e23.firebasestorage.app", 
    messagingSenderId: "828151024308", 
    appId: "1:828151024308:web:29709e32d6914f288b25e1"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
