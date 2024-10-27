import {getFirestore} from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXu1m4lQ4COyb0gIzFVKTwgoTFBDNWFRA",

  authDomain: "dev-dd897.firebaseapp.com",

  projectId: "dev-dd897",

  storageBucket: "dev-dd897.appspot.com",

  messagingSenderId: "293667554057",

  appId: "1:293667554057:web:0773ed00ee986128c249d8",

  measurementId: "G-5BJ3V00ZRT"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const imageDb = getStorage(app)