import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAEUdb6dVjLJhwFF-Otry5gmoONxogeORI',
  authDomain: 'phillips-clothing.firebaseapp.com',
  projectId: 'phillips-clothing',
  storageBucket: 'phillips-clothing.appspot.com',
  messagingSenderId: '966466842710',
  appId: '1:966466842710:web:c3b25396c94b82feb90bf7',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
