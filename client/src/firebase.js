// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "mern-auth-3feb4.firebaseapp.com",
	projectId: "mern-auth-3feb4",
	storageBucket: "mern-auth-3feb4.appspot.com",
	messagingSenderId: "898421427876",
	appId: "1:898421427876:web:9f1164758a14f9a28ee031",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
