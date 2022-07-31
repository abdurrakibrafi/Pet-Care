import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDazTtCy5NjAdmtAeu56JVLRwlvrOHnnak",
  authDomain: "pet-care-a627c.firebaseapp.com",
  projectId: "pet-care-a627c",
  storageBucket: "pet-care-a627c.appspot.com",
  messagingSenderId: "367595755338",
  appId: "1:367595755338:web:5d4a74bb1712c9ad9d13b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
