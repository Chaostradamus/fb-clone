import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDN1L7qm9zJ7sDFFXU5KfRK_tAdoTYO8bE",
  authDomain: "facebook-yt-80c13.firebaseapp.com",
  projectId: "facebook-yt-80c13",
  storageBucket: "facebook-yt-80c13.appspot.com",
  messagingSenderId: "407266868705",
  appId: "1:407266868705:web:a75e92cbc584574a48a6a0",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
