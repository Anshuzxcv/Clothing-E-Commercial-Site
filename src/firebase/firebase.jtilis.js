import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDBJm6bcEvDZOP-T-eLmrZhcudQLOB3qOA',
  authDomain: 'crawn-db-ec79e.firebaseapp.com',
  databaseURL: 'https://crawn-db-ec79e.firebaseio.com',
  projectId: 'crawn-db-ec79e',
  storageBucket: 'crawn-db-ec79e.appspot.com',
  messagingSenderId: '852913532066',
  appId: '1:852913532066:web:9fee420e35725921643bfb',
  measurementId: 'G-30X3EN4GT5',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
