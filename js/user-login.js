import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

import { app } from "./firebase.js";

import {
  getDatabase,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const auth = getAuth(app);
const database = getDatabase(app);
if(localAcc == null){
  let localAcc;
}

document.getElementById("button").addEventListener("click", (e) => {
  let email = document.querySelector("#user").value;
  let password = document.querySelector("#pass").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      let lgDate = new Date();
      const user = userCredential.user;
      update(ref(database, "users/" + user.uid), {
        last_login: lgDate,
      })
        .then(() => {
          alert("user logged successfully");
          localStorage.setItem('localUser',"1")
          window.location ="index.html"
        })
        .catch((error) => {
          alert(error);
          alert("wrong email or password");
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      e.preventDefault()
    });
});
