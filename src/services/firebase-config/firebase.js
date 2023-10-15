import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhhAx2Ozb8JMWhB7E7H-f_-hl0401Mf7o",
  authDomain: "findme-12c11.firebaseapp.com",
  projectId: "findme-12c11",
  storageBucket: "findme-12c11.appspot.com",
  messagingSenderId: "1068437225652",
  appId: "1:1068437225652:web:46c72450a7501c8c3597e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
