// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASBb9o2BgbswoAC6nm0olSXMAaS1lGUIk",
  authDomain: "logintemplatetesting.firebaseapp.com",
  projectId: "logintemplatetesting",
  storageBucket: "logintemplatetesting.appspot.com",
  messagingSenderId: "984632586985",
  appId: "1:984632586985:web:948c0a3882824afb92f678"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true });
} else {
  app = firebase.app();
}


export { firebase };