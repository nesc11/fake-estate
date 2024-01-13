// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: 'fake-estate-16d72.firebaseapp.com',
	projectId: 'fake-estate-16d72',
	storageBucket: 'fake-estate-16d72.appspot.com',
	messagingSenderId: '444255584394',
	appId: '1:444255584394:web:ece1153d5a31eb19a22d73',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
