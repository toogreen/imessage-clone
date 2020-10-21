import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5_VFrFaigelE_KNaRm_KKVlLly2OlCZc",
  authDomain: "tg-imessage-clone.firebaseapp.com",
  databaseURL: "https://tg-imessage-clone.firebaseio.com",
  projectId: "tg-imessage-clone",
  storageBucket: "tg-imessage-clone.appspot.com",
  messagingSenderId: "1034070979430",
  appId: "1:1034070979430:web:97509976894c5becc68ea7",
  measurementId: "G-J1PCJCM0VB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;