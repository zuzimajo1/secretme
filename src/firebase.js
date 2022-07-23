// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASEKEY,
  authDomain: "letterme-eb1d3.firebaseapp.com",
  projectId: "letterme-eb1d3",
  storageBucket: "letterme-eb1d3.appspot.com",
  messagingSenderId: "1009472357190",
  appId: "1:1009472357190:web:fd4b41d37837faf5b19b47",
  measurementId: "G-QQLFFXMZEM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
