import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        onAuthStateChanged, 
        signOut, 
        GoogleAuthProvider, 
        signInWithPopup, 
        sendPasswordResetEmail, } from 'firebase/auth';
import { auth } from '../firebase.jsx'

export const authContext = createContext();

export const useAuth = () => {
	const context = useContext(authContext)
  if (!context) throw new Error("no hay Auth provider");
	return context;
};


export default function AuthProvider ({ children }) {
  //estado usuario
  const [user, setUser] = useState(null);

  // estado loading
  const [loading, setLoading] = useState(true);
  
  // registro
  const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  //login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password); 
  }

  //logOut
  const logout = () => signOut(auth);

  //login google
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    
    return signInWithPopup(auth, googleProvider)
  }

  //reset password
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email )
  }

  //estado de autenticacion del usuario
  useEffect ( () => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false)
    });

    return () => unsubscribe();
  }, [])
  
	return <authContext.Provider 
           value= {{ signUp, 
           login, 
           user, 
           logout, 
           loading, 
           loginWithGoogle, 
           resetPassword, 
           }}>{children}</authContext.Provider>
}
