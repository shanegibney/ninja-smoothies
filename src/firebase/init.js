import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCD_4AR2W9N5wKMud3ph8dQ_6XhVz2UrpA",
  authDomain: "udemy-ninja-smoothie-d3f18.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothie-d3f18.firebaseio.com",
  projectId: "udemy-ninja-smoothie-d3f18",
  storageBucket: "udemy-ninja-smoothie-d3f18.appspot.com",
  messagingSenderId: "735612849675"
};
const firebaseApp = firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true
})

export default firebaseApp.firestore()