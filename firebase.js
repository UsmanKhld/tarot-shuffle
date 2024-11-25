// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import dotenv from "dotenv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseApiKey = process.env.FIRE_BASE_API_KEY;
const firebaseAppId = process.env.FIRE_BASE_APP_ID;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: firebaseApiKey,
	authDomain: "tarot-shuffle.firebaseapp.com",
	projectId: "tarot-shuffle",
	storageBucket: "tarot-shuffle.firebasestorage.app",
	messagingSenderId: "317465772805",
	appId: firebaseAppId,
	measurementId: "G-5TMGM4Z97D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");
