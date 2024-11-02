import { setDoc, doc } from 'firebase/firestore';
import { collectionRefUsers } from '@/firebase/firebaseConfig';

// create user items in firestore
export const addUserToFirestore = (credentials: Record<string, string>) => {
  const { uid, displayName, email, photoURL, fbPhoto } = credentials || {};

  try {
    setDoc(doc(collectionRefUsers, uid), {
      email: email,
      name: displayName,
      photo: fbPhoto || photoURL,
      id: uid,
    });
  } catch (error) {
    console.error(error);
  }
};
