import { setDoc, doc } from 'firebase/firestore';
import { collectionRefUsers } from '@/firebase/firebaseConfig';

export type UserType = {
  email: string;
  password: string;
};

// create user items in firestore
export const addUserToFirestore = (credentials: any) => {
  const { uid, displayName, email, photoURL, fbPhoto } = credentials || {};

  try {
    setDoc(doc(collectionRefUsers, uid), {
      email: email,
      name: displayName,
      photo: fbPhoto || photoURL,
    });
  } catch (error) {
    console.log(error);
  }
};
