import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCMH-Txj-A8diVP-BnqoHduh7x8Np5PaJU",
    authDomain: "orgarch-2f5fd.firebaseapp.com",
    projectId: "orgarch-2f5fd",
    storageBucket: "orgarch-2f5fd.appspot.com",
    messagingSenderId: "613056593060",
    appId: "1:613056593060:web:2fbab7308e3b2a0eafba31"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage=getStorage(app)