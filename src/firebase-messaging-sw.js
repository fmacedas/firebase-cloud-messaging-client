importScripts(
  "https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCsAX684t2dnAw7omIy8Q65nMfu4Ec8Uwo",
  authDomain: "test-only-1cba0.firebaseapp.com",
  projectId: "test-only-1cba0",
  storageBucket: "test-only-1cba0.firebasestorage.app",
  messagingSenderId: "19780782070",
  appId: "1:19780782070:web:8abe4f6459cfb8ea33e9d7",
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
