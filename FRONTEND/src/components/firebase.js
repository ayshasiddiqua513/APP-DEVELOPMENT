import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVXkib0SNJCmAJUfER9wSWFGSJxpK6ckg",
  authDomain: "farmer-s-from.firebaseapp.com",
  projectId: "farmer-s-from",
  storageBucket: "farmer-s-from.appspot.com",
  messagingSenderId: "815790226369",
  appId: "1:815790226369:web:6ffef58e373b400caacd40",
  measurementId: "G-FR3E4TRG34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
