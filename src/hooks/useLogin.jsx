import { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";

function useLogin() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useGlobalContext();

  const login = (email, password) => {
    setIsPending(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success("You login succsessfuly");
        setIsPending(false);
      })
      .catch((error) => {
        setError(error);
        const errorMessage = error.message;
        setError(errorMessage);
        toast.error("Incorrect email or password");
        setIsPending(false);
      });
  };
  const enterWithGoogle = () => {
    setIsPending(true)
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user });
        setIsPending(false);
        setError(null);
        toast.success("Well come back");
        setIsPending(false)
      })
      .catch((error) => {
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        setError(errorMessage);
        setIsPending(false)
      });
  };

  return { login, error, isPending, enterWithGoogle };
}

export { useLogin };