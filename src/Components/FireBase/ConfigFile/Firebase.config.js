import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC4Yco_69X1XDeALM98Bdvry6jjX7xWwvc",
    authDomain: "whatsapp-2087c.firebaseapp.com",
    projectId: "whatsapp-2087c",
    storageBucket: "whatsapp-2087c.appspot.com",
    messagingSenderId: "690083071805",
    appId: "1:690083071805:web:1ee77e5395ebe86980e754"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;