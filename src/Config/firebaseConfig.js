import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import { getFirestore } from 'redux-firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...  apiKey: "AIzaSyBrSE0XTqVH5W7PjdhVzZBG1q7JoCgB64M",
  authDomain: "artist-notes.firebaseapp.com",
  projectId: "artist-notes",
  storageBucket: "artist-notes.appspot.com",
  messagingSenderId: "144098550685",
  appId: "1:144098550685:web:e5a913d718c3b44a004574",
  measurementId: "G-N14PBFB813"
};

const app = initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

// export default firebaseConfig;

export const firestore = getFirestore(app);