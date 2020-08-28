import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCx__JDwNv8WeGEog7u2QAJSg7cmk-nXkc',
  authDomain: 'ninja-smoothies-77ca0.firebaseapp.com',
  databaseURL: 'https://ninja-smoothies-77ca0.firebaseio.com',
  projectId: 'ninja-smoothies-77ca0',
  storageBucket: 'ninja-smoothies-77ca0.appspot.com',
  messagingSenderId: '232099722004',
  appId: '1:232099722004:web:5ac7decd9570ababa04801',
  measurementId: 'G-PKXNBD100D',
};
// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);

// export firestore database
export default firebaseapp.firestore();
