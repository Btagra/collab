import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyAvpYteIFgohiNWveJMw4JwZKLbmY6bHf4",
    authDomain: "collab-30acf.firebaseapp.com",
    databaseURL: "https://collab-30acf.firebaseio.com",
    projectId: "collab-30acf",
    storageBucket: "collab-30acf.appspot.com",
    messagingSenderId: "169294315116"
};
const fire = firebase.initializeApp(config);
export default fire;
