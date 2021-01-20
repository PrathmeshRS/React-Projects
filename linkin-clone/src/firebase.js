import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDPPLKELrO8-H7ih6tLAiMtLsSy7yGL91o",
    authDomain: "linkin-clone-3f1c9.firebaseapp.com",
    projectId: "linkin-clone-3f1c9",
    storageBucket: "linkin-clone-3f1c9.appspot.com",
    messagingSenderId: "893577710454",
    appId: "1:893577710454:web:5d572f883bfe3fb115c857"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };