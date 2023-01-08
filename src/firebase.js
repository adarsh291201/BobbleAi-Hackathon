import firebase from 'firebase';	

const firebaseConfig = {
  apiKey: "AIzaSyDhNgQwr6Wf2vyr4K7KiBW1l3PUmPgosL8",
  authDomain: "whatsapp-clone-b9d41.firebaseapp.com",
  projectId: "whatsapp-clone-b9d41",
  storageBucket: "whatsapp-clone-b9d41.appspot.com",
  messagingSenderId: "546687732692",
  appId: "1:546687732692:web:92f19cba6bbf25b1402441",
  measurementId: "G-RPG02FCGFR",
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;