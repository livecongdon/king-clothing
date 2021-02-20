import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBHFnTGWyief5UFtW7sWIcsIS0z1Yg9ChM",
    authDomain: "king-clothing-c32fe.firebaseapp.com",
    projectId: "king-clothing-c32fe",
    storageBucket: "king-clothing-c32fe.appspot.com",
    messagingSenderId: "657842172735",
    appId: "1:657842172735:web:2dcd600c5f4baa5b15198a",
    measurementId: "G-53XKDLGVZL"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;