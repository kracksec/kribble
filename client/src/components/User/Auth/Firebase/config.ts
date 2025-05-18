import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsb27RpMJ8vGmx_BjcA79evQn28-BwxaA",
  authDomain: "kribble-auth.firebaseapp.com",
  projectId: "kribble-auth",
  storageBucket: "kribble-auth.firebasestorage.app",
  messagingSenderId: "297152129128",
  appId: "1:297152129128:web:d8ae10cc520de118d7f3dd"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { auth, GoogleAuthProvider, signInWithPopup };
