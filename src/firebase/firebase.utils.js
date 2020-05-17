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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

