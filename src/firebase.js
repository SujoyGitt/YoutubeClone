import firebase from "firebase/compat/app";
import "firebase/compat/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAIMxDr7u2dXWKXNzAyMFrt_BeGcTr_Jbg",
  authDomain: "clone-7aac7.firebaseapp.com",
  projectId: "clone-7aac7",
  storageBucket: "clone-7aac7.appspot.com",
  messagingSenderId: "494974836381",
  appId: "1:494974836381:web:557e1eb23ae57d059c7e74",
  measurementId: "G-WBBNM18P6N"
};
firebase.initializeApp(firebaseConfig)
export default firebase.auth()