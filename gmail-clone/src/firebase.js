import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCRMmcP8tOfBXLfixm99cbzyv8QCm2tI3s",
    authDomain: "clone-d40f1.firebaseapp.com",
    projectId: "clone-d40f1",
    storageBucket: "clone-d40f1.appspot.com",
    messagingSenderId: "898466593939",
    appId: "1:898466593939:web:28f3686ced2a199c99a166"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };