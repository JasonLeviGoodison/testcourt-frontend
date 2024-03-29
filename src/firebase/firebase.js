/*
    Code largely taken from psatler/react-firebase-authentication on Github
*/

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA-XFHNa8AHtMmj4p9UezuJrQL9KXUc5Ug',
  authDomain: 'testcourt-4db3c.firebaseapp.com',
  projectId: 'testcourt-4db3c',
  storageBucket: 'testcourt-4db3c.appspot.com',
  messagingSenderId: '787262980802',
  appId: '1:787262980802:web:dfc5e4671184c84a39715b',
  measurementId: 'G-VVYS60PC3F',
};

if (!firebase.apps.length) {
  // initializing with the config object
  firebase.initializeApp(firebaseConfig);
}

// separting database API and authentication
const db = firebase.database();
const auth = firebase.auth();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, facebookProvider };
