import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9im8lQv0am1-trKuFQp4O0dhtIRgOGNs",
  authDomain: "chef-kiss-aa4a5.firebaseapp.com",
  projectId: "chef-kiss-aa4a5",
  storageBucket: "chef-kiss-aa4a5.appspot.com",
  messagingSenderId: "1061615411466",
  appId: "1:1061615411466:web:ab17c01898097d65f0daf3",
  measurementId: "G-4C0XHY68CH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

export { db, storage };
