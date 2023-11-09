import { collection, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

export const useDb = () => {
  const readDoc = async (collectionName, userId) => {
    const docRef = doc(db, collectionName, userId);
    const snapshot = await getDoc(docRef);

    return snapshot.data();
  };

  const writeDoc = async (collectionName, userId, payload) => {
    const collectionRef = collection(db, collectionName);
    await setDoc(doc(collectionRef, userId), payload);
  };

  return { readDoc, writeDoc };
};
