  // Import the functions you need from the SDKs you need
  
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";

  // Import the necessary Firebase libraries (if you are using a build tool, like Webpack, you may use imports)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDWwwF3VvOUek2TwRqxjLSm6TzH0u_dEUM",
    authDomain: "soiltestagent.firebaseapp.com",
    projectId: "soiltestagent",
    storageBucket: "soiltestagent.appspot.com",
    messagingSenderId: "17440438662",
    appId: "1:17440438662:web:127420a0204da633691407",
    measurementId: "G-K97ZN0G3T4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);
  
