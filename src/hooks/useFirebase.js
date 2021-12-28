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
  getIdToken,
} from "firebase/auth";
import useAxios from "./useAxios";
//initialize firebase app
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { admin, client } = useAxios();

  const [error, setError] = useState("");
  const auth = getAuth();
  //google sign
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = (navigate, location) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const user = res.user;
        saveUser(user.email, user.displayName, "PUT");
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
        //save user to database
        saveUser(email, name, "POST");
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
        navigate("/");
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
  //admin
  useEffect(() => {
    //axios
    admin.get(`users/${user.email}`).then((response) => {
      setIsAdmin(response.data.admin);
    });
  }, [user]);
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
  }, [auth, user.email]);
  //save user to db
  const saveUser = (email, displayName, method) => {
    setIsLoading(true);
    const user = { email, displayName };
    //axios
    switch (method) {
      case "POST":
        client.post("/users", user).then((response) => {
          console.log(response.data);
        });
        break;
      case "PUT":
        client.put("/users", user).then((response) => {
          console.log(response.data);
        });
        break;
      default:
        break;
    }
  };
  return {
    isAdmin,
    user,
    error,
    signInWithGoogle,
    registerUser,
    loginUser,
    logout,
  };
};

export default useFirebase;
