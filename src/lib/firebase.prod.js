import Firebase from 'firebase/app'
import 'firebase/firestore'
import'firebase/auth' 
// import {seedDatabase} from '../seed'
const firebaseConfig = {
    apiKey: "AIzaSyBsI7YNHenrEM-yH5vHH_JjoBrVIgt86Tg",
    authDomain: "netflix-utube.firebaseapp.com",
    databaseURL: "https://netflix-utube.firebaseio.com",
    projectId: "netflix-utube",
    storageBucket: "netflix-utube.appspot.com",
    messagingSenderId: "559187055605",
    appId: "1:559187055605:web:9d8f75e01e7df2546406bc"
  };
  const firebase=Firebase.initializeApp(firebaseConfig)
  
//   seedDatabase(firebase)
  export {firebase}