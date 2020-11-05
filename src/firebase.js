import Firebase from "firebase/app";
import config from "./config";
import "firebase/firestore";
import "firebase/storage";

const firebaseApp = Firebase.initializeApp(config);

const db = firebaseApp.firestore().collection("books");

const storage = firebaseApp.storage();

export { db, storage };
