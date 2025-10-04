import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpPVEuJ5ZIvaR72jL18XhjvyJXaHN6qvc",
  authDomain: "delta-cd3ee.firebaseapp.com",
  projectId: "delta-cd3ee",
  storageBucket: "delta-cd3ee.firebasestorage.app",
  messagingSenderId: "157706592376",
  appId: "1:157706592376:web:c1cbf20432b9c7f4ab8d8d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



