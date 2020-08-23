import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCah-bXIiajV2fEnkTcALi3YKeTBCDBCAM",
    authDomain: "test-b8479.firebaseapp.com",
    databaseURL: "https://test-b8479.firebaseio.com",
    projectId: "test-b8479",
    storageBucket: "test-b8479.appspot.com",
    messagingSenderId: "489596940328",
    appId: "1:489596940328:web:2d6412157d1c4401f9451d"
  })
}

const db = firebase.firestore();
export { db }
