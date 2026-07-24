// src/firebase/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvuAtALRXY_xA9srnaKMX2FgqgfkmAL-s",
  authDomain: "melodia--musicplayer.firebaseapp.com",
  projectId: "melodia--musicplayer",
  storageBucket: "melodia--musicplayer.firebasestorage.app",
  messagingSenderId: "572627904910",
  appId: "1:572627904910:web:8d64a93d22ccac742a1cdf",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;