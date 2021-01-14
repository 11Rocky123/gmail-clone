import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAxcD-UfMu3mNB9J1kWMnLPhUs1dXrgkLQ",
	authDomain: "clone-3857a.firebaseapp.com",
	projectId: "clone-3857a",
	storageBucket: "clone-3857a.appspot.com",
	messagingSenderId: "112912455967",
	appId: "1:112912455967:web:74feb0ca26a03690ccf82a",
	measurementId: "G-QB3DZTF8SB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
