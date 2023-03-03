import { collection, setDoc, doc, addDoc } from 'firebase/firestore'
import { db } from './firebase'

export const createUser = async (userId, user) => {
  try {

    await setDoc(doc(db, 'users', userId), user)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export const addSite = async (siteData) => {
  try {
    await addDoc(collection(db, "sites"),siteData)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
