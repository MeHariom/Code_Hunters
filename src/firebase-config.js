import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCBg28-A1bRmuQMk72Tv9vXw7mgbEYlgG9",
  authDomain: "Code_Hunters.firebaseapp.com",
  projectId: "Code_Hunters",
  storageBucket: "Code_Hunters.appspot.com",
  messagingSenderId: "383320371943",
  appId: "1:383320371942:web:3e276892ce9e4647b64128",
  measurementId: "G-1JS5VN4662"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
export { auth, storage, db, googleProvider };
