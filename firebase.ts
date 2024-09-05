import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhHvcvEESqJX03lG3tYPsRqHATQTcGHbU",
  authDomain: "chat-with-pdf-challange-53371.firebaseapp.com",
  projectId: "chat-with-pdf-challange-53371",
  storageBucket: "chat-with-pdf-challange-53371.appspot.com",
  messagingSenderId: "310839882716",
  appId: "1:310839882716:web:f4d3d6b2b7d446f28d5519",
};

//checking if the client is already setup.
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
