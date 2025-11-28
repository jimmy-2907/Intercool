const firebaseConfig = {
  apiKey: "YAIzaSyCk8-uz8q9ezBnfBARKcKvfbjkeX9ncfEE",
  authDomain: "intercool-3cc4c.firebaseapp.com",
  projectId: "intercool-3cc4c",
  databaseURL:
    "https://intercool-3cc4c-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "intercool-3cc4c.firebasestorage.app",
  messagingSenderId: "693287248576",
  appId: "1:693287248576:web:b24d565c4beff838578325",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const ADMIN_EMAILS = ["tranduonglx2020@gmail.com"];
