import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInAnonymously,
} from "firebase/auth";
import { auth } from "../Firebase";
import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const guestLogin = () => {
    return signInAnonymously(auth);
  };

  const signOut = () => {
    return auth.signOut();
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) { 
        setUser(user);
        localStorage.setItem("isSignedIn", true);
      } else {
        setUser(null);
        localStorage.setItem("isSignedIn", false);
      }
    });
  }, []);

  const globalFunctions = { user, signUp, login, guestLogin, signOut };

  return <AuthContext.Provider value={globalFunctions}>{children}</AuthContext.Provider>;
};
