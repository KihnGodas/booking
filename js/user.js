import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { app } from "./firebase.js";
import { getDatabase } from"https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const auth = getAuth(app);
const database = getDatabase(app);

document.getElementById("button").addEventListener("click", (e) =>{
    let email = document.querySelector("#user").value;
    let password = document.querySelector("#pass").value;
   
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("user created successfully")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error.message)
        });
})