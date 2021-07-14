import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBF7RYa19bPZo0ANnMgDbQBOfshd6bHfxg",
    authDomain: "disneytest-c8640.firebaseapp.com",
    projectId: "disneytest-c8640",
    storageBucket: "disneytest-c8640.appspot.com",
    messagingSenderId: "242925131651",
    appId: "1:242925131651:web:8863d770e3d33edf6408b6",
    measurementId: "G-1JZY09LQ41"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage}
export default db;