// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

cred = credentials.Certificate('src/appli-94e33-firebase-adminsdk-fbsvc-81156869e2.json')
app = firebase_admin.initialize_app(cred)



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp4AdP6dufjw0Zj8sWeeC517K-weD0huk",
  authDomain: "appli-94e33.firebaseapp.com",
  projectId: "appli-94e33",
  storageBucket: "appli-94e33.firebasestorage.app",
  messagingSenderId: "313065180901",
  appId: "1:313065180901:web:2b71371fa251ca03e6ce0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);