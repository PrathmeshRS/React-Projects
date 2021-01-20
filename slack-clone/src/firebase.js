import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAT2VlQlLdhKeBycWDLtjh7YMFH9DAXfZo",
    authDomain: "slack-clone-84610.firebaseapp.com",
    projectId: "slack-clone-84610",
    storageBucket: "slack-clone-84610.appspot.com",
    messagingSenderId: "851963101127",
    appId: "1:851963101127:web:a09b377d49ccc6e71fe3e2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
