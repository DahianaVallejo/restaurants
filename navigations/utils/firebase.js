import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDh0cihk7nslUZ_A44lfhqYbwBVc7lgUrE",
    authDomain: "restaurants-cc3ff.firebaseapp.com",
    projectId: "restaurants-cc3ff",
    storageBucket: "restaurants-cc3ff.appspot.com",
    messagingSenderId: "613759001975",
    appId: "1:613759001975:web:468431a2aa9d7ebd4ced72"
  }

  export const firebaseApp =  firebase.initializeApp(firebaseConfig)