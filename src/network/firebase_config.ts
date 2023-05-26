// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcu-EqjgwrRMbHY_pLcwQSftkKfl_k2Cc",
  authDomain: "artadewana-b0538.firebaseapp.com",
  projectId: "artadewana-b0538",
  storageBucket: "artadewana-b0538.appspot.com",
  messagingSenderId: "919109773995",
  appId: "1:919109773995:web:d618f90b18cb89e0a365ee",
  measurementId: "G-07PS1N5DZ5",
};

let frstore: Firestore;

const app = firebase.initializeApp(firebaseConfig);
frstore = getFirestore(app);

export default frstore;

