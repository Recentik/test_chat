import * as firebase from "firebase/app";
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/messaging'

const config = {
  apiKey: "AIzaSyBm4AwwJZC9qkV19hc5P_mr2WqT0R-jugQ",
  authDomain: "chat-2153b.firebaseapp.com",
  databaseURL: "https://chat-2153b-default-rtdb.firebaseio.com",
  projectId: "chat-2153b",
  storageBucket: "chat-2153b.appspot.com",
  messagingSenderId: "836237168600",
  appId: "1:836237168600:web:c7515b1c131e2e10526cad",
  measurementId: "G-CYZ7N40Y3R"
}
const db = firebase.initializeApp(config);
export default db;

