import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDhUd7P7UUMN5I9efedpnFZhOkU2JODuVo",
    authDomain: "snapchat-clone-ca430.firebaseapp.com",
    projectId: "snapchat-clone-ca430",
    storageBucket: "snapchat-clone-ca430.appspot.com",
    messagingSenderId: "875193348681",
    appId: "1:875193348681:web:22ca8ebe04fe355d91c598"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };