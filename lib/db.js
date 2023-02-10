import { collection, setDoc, doc } from 'firebase/firestore'
import { db } from './firebase'

export const createUser = async (userId, user) => {
  try {

    await setDoc(doc(db, 'users', userId), user)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
