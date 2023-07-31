import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBOq-P0tGJ00dYAGfv7EXgS8OIT8DxKr3o",
    authDomain: "fir-todo-9869d.firebaseapp.com",
    projectId: "fir-todo-9869d",
    storageBucket: "fir-todo-9869d.appspot.com",
    messagingSenderId: "544535156033",
    appId: "1:544535156033:web:e701d8bfbe1be4499ffdc0"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);