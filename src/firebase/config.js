import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyALT0R_leZUcr4H23vqI2yjFL0XH0rJLBE",
  authDomain: "project-three-safe-spaces.firebaseapp.com",
  databaseURL: "https://project-three-safe-spaces-default-rtdb.firebaseio.com",
  projectId: "project-three-safe-spaces",
  storageBucket: "project-three-safe-spaces.firebasestorage.app",
  messagingSenderId: "715148708039",
  appId: "1:715148708039:web:a822874098394da39dd6e2"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app); 

export { database };
