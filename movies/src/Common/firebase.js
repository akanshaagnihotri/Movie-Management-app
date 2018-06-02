import Firebase from 'firebase';
const config = {
    apiKey: "AIzaSyD2HCvBS352wGwEVQ3Q8UJpR2Sg7sLeps0",
    authDomain: "movies-20a47.firebaseapp.com",
    databaseURL: "https://movies-20a47.firebaseio.com",
    projectId: "movies-20a47",
    storageBucket: "movies-20a47.appspot.com",
    messagingSenderId: "781196235694"
  };

const FirebaseInstance = Firebase.initializeApp(config);
export default FirebaseInstance;