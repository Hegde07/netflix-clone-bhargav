import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyF_tujyeh4bzJVThNBrIT4wi_5-w4jSY",
  authDomain: "netflix-clone-bhargav-1cf8e.firebaseapp.com",
  projectId: "netflix-clone-bhargav-1cf8e",
  storageBucket: "netflix-clone-bhargav-1cf8e.appspot.com",
  messagingSenderId: "874166350459",
  appId: "1:874166350459:web:ac59fdc4915dd7da2428de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
