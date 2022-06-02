import * as firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {

    apiKey: "AIzaSyCEbWYJ8dBagEDYyuNhvT0_T7hrkz0-Jes", //Hide this in an .env file

    authDomain: "core-class.firebaseapp.com",

    projectId: "core-class",

    storageBucket: "core-class.appspot.com",

    messagingSenderId: "652392313857",

    appId: "1:652392313857:web:45d5f5d5ff50265d72fc00",

    measurementId: "G-05G49DE570"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

//Initialize firebase authentication
const auth = getAuth(app);