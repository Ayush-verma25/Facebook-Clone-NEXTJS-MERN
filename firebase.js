import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB0wWa4s1FxxzjctJLAgd3lH4-WX56-Epo",
    authDomain: "facebook-2-clone-55aa9.firebaseapp.com",
    projectId: "facebook-2-clone-55aa9",
    storageBucket: "facebook-2-clone-55aa9.firebasestorage.app",
    messagingSenderId: "46116814993",
    appId: "1:46116814993:web:ebe86f90f9c4770ed43f30"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = app.storage();

export { db, storage };