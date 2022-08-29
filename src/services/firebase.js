import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC-Sx7GRkq-dCbvPDNZpajILEW3ptaSqaY",
    authDomain: "bodegon-36873.firebaseapp.com",
    projectId: "bodegon-36873",
    storageBucket: "bodegon-36873.appspot.com",
    messagingSenderId: "419229389277",
    appId: "1:419229389277:web:2706ba2a3affdfc478a634"
};

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app)

export default dataBase