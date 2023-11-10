import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";

let pk = 2;
var nameValue = document.getElementById("nombre");
var emailValue = document.getElementById("email");

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {

    apiKey: "AIzaSyBJjN-FfC61s6sI1Dr7xJujXKm_7gn35VQ",
  
    authDomain: "tunifynewsletter.firebaseapp.com",
  
    databaseURL: "https://tunifynewsletter-default-rtdb.firebaseio.com",
  
    projectId: "tunifynewsletter",
  
    storageBucket: "tunifynewsletter.appspot.com",
  
    messagingSenderId: "457680778850",
  
    appId: "1:457680778850:web:645771e87221cbe7e3c33b"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

function writeUserData(pk, name, email) {
    set(ref(database, 'suscrito/' + pk), {
      name: name,
      email: email,
    });
    pk += 1;
  }

function enviar() {
  writeUserData(pk, nameValue.value, emailValue.value);
  nameValue.value = "";
  emailValue.value = "";
}
