// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDts365OnIMqEvD3gZSOe0qIZ79OYz4FbU",
  authDomain: "fir-web001-a5a6d.firebaseapp.com",
  projectId: "fir-web001-a5a6d",
  storageBucket: "fir-web001-a5a6d.firebasestorage.app",
  messagingSenderId: "462328871617",
  appId: "1:462328871617:web:aea8c87827c08bd0ecf240",
  measurementId: "G-EJRD285WXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);