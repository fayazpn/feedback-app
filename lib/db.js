import { collection, setDoc, doc } from 'firebase/firestore'
import { db } from './firebase'

export const createUser = async (userId, user) => {
  try {
    // const docRef = await addDoc(collection(db, "users", userId), user);
    // console.log("Document written with ID: ", docRef.id);
    // const cityRef = doc(db, 'cities', 'BJ')
    // setDoc(cityRef, { capital: true }, { merge: true })

    const docRef = await setDoc(doc(db, 'users', userId), user)
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
