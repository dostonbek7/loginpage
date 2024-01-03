import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

export function useAddDoc() {
  const navigate = useNavigate();
  
  const createNewDoc = (document, col) => {
    addDoc(collection(db, col), {
      ...document,
    })
      .then((result) => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return { createNewDoc };
}