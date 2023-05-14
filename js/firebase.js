
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDXiNQGBXzEekOiTd-t9xOL8gTz15C7S_A",
    authDomain: "bootcamp-8c755.firebaseapp.com",
    projectId: "bootcamp-8c755",
    storageBucket: "bootcamp-8c755.appspot.com",
    messagingSenderId: "580657702488",
    appId: "1:580657702488:web:522675883d88760cb88c2d"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


