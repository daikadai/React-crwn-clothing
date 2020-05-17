import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBbegAc17IKnd_JMpP-bVHoFcHRxlsGGoE",
  authDomain: "crwn-db-4d2ad.firebaseapp.com",
  databaseURL: "https://crwn-db-4d2ad.firebaseio.com",
  projectId: "crwn-db-4d2ad",
  storageBucket: "crwn-db-4d2ad.appspot.com",
  messagingSenderId: "120823305417",
  appId: "1:120823305417:web:8d689f2dc43c444ab26918"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message);
      
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

