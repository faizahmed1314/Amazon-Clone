import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeTGDCSxKLZ4DU-YMqFtIof74Mx7amVNw",
  authDomain: "clone-f09dd.firebaseapp.com",
  databaseURL: "https://clone-f09dd.firebaseio.com",
  projectId: "clone-f09dd",
  storageBucket: "clone-f09dd.appspot.com",
  messagingSenderId: "374876758002",
  appId: "1:374876758002:web:5222d274500e4da2e3556b",
  measurementId: "G-0570C2TT45",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebaseApp.firestore();

export { db, auth };
