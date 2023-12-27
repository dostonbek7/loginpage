import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function useCollection(col) {
  const [documents, setDocuments] = useState(null);
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const c = collection(db, col);
  useEffect(() => {
    setIsPending(true)
    const unsubscribe = onSnapshot(c,(snapshot) => {
        const result = [];
        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(result)
        setIsPending(false)
      },
      (error) => {
        console.log(error);
        setError(error)
        setIsPending(false)
      }
    );
    return () => unsubscribe();
  }, []);

  return { documents, isPending, error };
}

export default useCollection;
