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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;