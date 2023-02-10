import { createContext, useContext, useState } from 'react'
import { firebaseAuth } from './firebase'
import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { createUser } from './db'

const authContext = createContext()

export const useAuth = () => {
  return useContext(authContext)
}

export function AuthProvider({ children }) {
  const auth = useAuthProvider()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

function useAuthProvider() {
  const [user, setUser] = useState(null)

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser)
      setUser(user)
      return user
    } else {
      setUser(false)
      return false
    }
  }

  const signinWithGithub = () => {
    signInWithPopup(firebaseAuth, new GithubAuthProvider())
      .then((result) => {
        // The signed-in user info.
        const user = handleUser(result.user)

        createUser(user.uid, user)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        // const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error)
        // ...
      })
  }

  const appSignOut = () => {
    signOut(firebaseAuth)
      .then(() => {
        // Sign-out successful.
        handleUser(false)
      })
      .catch((error) => {
        // An error happened.
      })
  }

  return {
    user,
    signinWithGithub,
    appSignOut,
  }
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
  }
}
