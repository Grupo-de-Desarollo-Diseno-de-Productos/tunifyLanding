import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, set, ref, get, child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js"

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

document.querySelector('#enviar').addEventListener('click', enviar)


var nameValue = document.getElementById("nomBox");
var emailValue = document.getElementById("emaBox");
const dbRef = ref(getDatabase());

let pk = 0;

getPk();

function enviar() {
  writeUserData(pk, nameValue.value, emailValue.value);
  nameValue.value = "";
  emailValue.value = "";
  let valor = pk + 1
  set(ref(database, 'pk'), {value: valor});
  getPk();
}

function getPk() {
  get(child(dbRef, `pk`)).then((snapshot) => {
    if (snapshot.exists()) {
      pk = snapshot.val().value;
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

function writeUserData(pk, name, email) {
    set(ref(database, 'suscrito/' + pk), {
      name: name,
      email: email,
    });
  }


