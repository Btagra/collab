import firebase from "firebase";

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API="AIzaSyAvpYteIFgohiNWveJMw4JwZKLbmY6bHf4",
    authDomain: "collab-30acf.firebaseapp.com",
    databaseURL: "https://collab-30acf.firebaseio.com",
    projectId: "collab-30acf",
    storageBucket: "collab-30acf.appspot.com",
    messagingSenderId: "169294315116"
};

const firebaseApp = firebase.initializeApp(config);
// export const provider = new firebase.auth.GoogleAuthProvider();
export { firebaseApp };
export default firebase;
