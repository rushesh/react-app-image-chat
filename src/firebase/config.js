import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBXcfa5uDYuPhULD4hyQ5nM5H6QX724GVk",
  authDomain: "photoes-app-d440f.firebaseapp.com",
  databaseURL: "https://photoes-app-d440f-default-rtdb.firebaseio.com",
  projectId: "photoes-app-d440f",
  storageBucket: "photoes-app-d440f.appspot.com",
  messagingSenderId: "296078546019",
  appId: "1:296078546019:web:f6aff14049cb804cbe1456",
  measurementId: "G-ZFH4M62SEP"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };