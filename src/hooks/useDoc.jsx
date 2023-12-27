import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

 export function useDoc(id) {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const getSingleDoc = async () => {
      const docRef = doc(db, "foods", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setRecipe(docSnap.data());
        setIsPending(false);
        setError(null)
      } else {
        toast.error("No such document!");
        setIsPending(false);
        setError('"No such document!"')
      }
    };
    getSingleDoc();
  }, [id])

  return { recipe, isPending, error }
}
