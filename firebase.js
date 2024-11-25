// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDGTL80Hmi9vxIOgj3AKKJ3pPftMGU_hJQ",
	authDomain: "tarot-shuffle.firebaseapp.com",
	projectId: "tarot-shuffle",
	storageBucket: "tarot-shuffle.firebasestorage.app",
	messagingSenderId: "317465772805",
	appId: "1:317465772805:web:cedcd33843f1d3a9e3ad6c",
	measurementId: "G-5TMGM4Z97D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
