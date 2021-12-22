import React, { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
//initialize firebase app
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const auth = getAuth();
  //google sign
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = (navigate, location) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const user = res.user;
        const destination = location?.state?.from || "/";
        navigate(destination);
        setError("");
        console.log("google signedIn", user);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };
  //register email
  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        //send name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            setError("");
          })
          .catch((error) => {
            setError(error.message);
          });
        console.log("email register", result.user);
        navigate.replace("/");
      })
      .finally(() => setIsLoading(false));
  };
  //email signIn

  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setError("");
        console.log("email signIn", result.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setError("");
      })
      .catch((error) => {
        setError("");
      })
      .finally((error) => setIsLoading(false));
  };
  //observer user current state
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribe;
  }, [auth]);
  return { user, error, signInWithGoogle, registerUser, loginUser, logout };
};

export default useFirebase;
