import firebase from 'firebase';

const firebaseKey = `${process.env.REACT_APP_FIREBASE_API_KEY}`;

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: firebaseKey,
    authDomain: "collab-30acf.firebaseapp.com",
    databaseURL: "https://collab-30acf.firebaseio.com",
    projectId: "collab-30acf",
    storageBucket: "collab-30acf.appspot.com",
    messagingSenderId: "169294315116"
};
const fire = firebase.initializeApp(config);
const database = fire.database().ref().child('messages');

export { database };

export default fire;
