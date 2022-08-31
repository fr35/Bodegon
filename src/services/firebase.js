import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBAy4ncAoardrAICjK2OSDz7DJEvehnpEM",
    authDomain: "bodegon-bfb8f.firebaseapp.com",
    projectId: "bodegon-bfb8f",
    storageBucket: "bodegon-bfb8f.appspot.com",
    messagingSenderId: "939030903196",
    appId: "1:939030903196:web:8056ee2e4b8300c1d2f059"
};

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app)

export default dataBase

