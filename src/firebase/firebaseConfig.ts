// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';

// Firebase keys
import {
  appId,
  apiKey,
  projId,
  senderId,
  authDomain,
  measurementId,
  storageBucket,
} from '@/constant/keys';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  appId: appId,
  apiKey: apiKey,
  projectId: projId,
  authDomain: authDomain,
  messagingSenderId: senderId,
  measurementId: measurementId,
  storageBucket: storageBucket,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Firebase utils
export const auth = getAuth();
export const db = getFirestore(app);

// Auth providers
export const googleProvider = new GoogleAuthProvider();

// Firestore collections
export const collectionRefUsers = collection(db, 'users');
export const collecetionRefFeeds = collection(db, 'feed');
