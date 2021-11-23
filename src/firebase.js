import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyALT0R_leZUcr4H23vqI2yjFL0XH0rJLBE",
    authDomain: "project-three-safe-spaces.firebaseapp.com",
    projectId: "project-three-safe-spaces",
    storageBucket: "project-three-safe-spaces.appspot.com",
    messagingSenderId: "715148708039",
    appId: "1:715148708039:web:a822874098394da39dd6e2"
};

firebase.initializeApp(firebaseConfig);

export default firebase;