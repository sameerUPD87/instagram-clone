//the below code is for old version (SDK v8)
// import Firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//here i imported the seed file
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyD5G2OEnh0P35Szu5pUJypv4gHbsSX7EyQ",
  authDomain: "instagram-clone-3863f.firebaseapp.com",
  projectId: "instagram-clone-3863f",
  storageBucket: "instagram-clone-3863f.appspot.com",
  messagingSenderId: "250445669771",
  appId: "1:250445669771:web:a95e445a1442f8e5a97b8e",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//here i called the seed file (only ONCE!!)
// seedDatabase(firebase);

export { firebase, FieldValue };
