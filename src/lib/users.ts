import { setDoc, doc } from 'firebase/firestore';
import { collectionRefUsers } from '@/firebase/firebaseConfig';

// create user items in firestore
export const addUserToFirestore = (credentials: {
  uid: string;
  email: string;
  fbPhoto: string;
  photoURL: string;
  displayName: string;
}) => {
  const { uid, displayName, email, photoURL, fbPhoto } = credentials || {};

  try {
    setDoc(doc(collectionRefUsers, uid), {
      email: email,
      name: displayName,
      photo: fbPhoto || photoURL,
    });
  } catch (error) {
    console.error(error);
  }
};
