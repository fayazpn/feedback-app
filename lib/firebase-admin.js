import { initializeApp, applicationDefault } from 'firebase-admin/app'
// import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { getApp, getApps } from 'firebase-admin/app'

function createFirebaseAdminApp() {
  if (getApps().length === 0) {
    return initializeApp({
      credential: applicationDefault(),
      databaseURL: 'https://feedback-2a039.firebaseio.com',
    })
  } else {
    return getApp()
  }
}

// Retrieve services via the defaultApp variable...
const firebaseAdminApp = createFirebaseAdminApp()
export const db = getFirestore(firebaseAdminApp)

// import admin from 'firebase-admin'

// import serviceAccount from '../serviceAccountKey.json';
// console.log('done1')
// if (!admin.apps.length) {
//   try {
//     console.log('done')
//     admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount),
//     });

//   } catch (error) {
//     console.log("Firebase admin initialization error", error.stack);
//   }
// }
// export default admin.firestore();
