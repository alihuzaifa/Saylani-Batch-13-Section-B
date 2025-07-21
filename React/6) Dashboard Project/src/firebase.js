import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDK66kGv7ul5eewQx0uQ9u2Lma7-FHB8V8",
  authDomain: "lms-system-02.firebaseapp.com",
  projectId: "lms-system-02",
  storageBucket: "lms-system-02.firebasestorage.app",
  messagingSenderId: "502992179366",
  appId: "1:502992179366:web:b54131bf068d04003fe467",
  measurementId: "G-F4FD7NVZ9N",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
