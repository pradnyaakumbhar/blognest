// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'blognest-af760.firebaseapp.com',
  projectId: 'blognest-af760',
  storageBucket: 'blognest-af760.appspot.com',
  messagingSenderId: '197609670204',
  appId: '1:197609670204:web:9f7aca8f001da66c47e539',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
