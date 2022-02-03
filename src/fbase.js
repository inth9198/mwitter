import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBd-RqnP2cmGTjbOYW7rYEV90n7vBwuH0k",
    authDomain: "mwitter-11237.firebaseapp.com",
    projectId: "mwitter-11237",
    storageBucket: "mwitter-11237.appspot.com",
    messagingSenderId: "867027352826",
    appId: "1:867027352826:web:5cb8b330488f343da89d43"
  };
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
