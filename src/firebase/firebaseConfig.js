import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBqB2v_8oJ6F7BY0TxqZ0c_YJFGG6KbVo8",
  authDomain: "my-kitchen-test.firebaseapp.com",
  projectId: "my-kitchen-test",
  storageBucket: "my-kitchen-test.appspot.com",
  messagingSenderId: "594742054614",
  appId: "1:594742054614:web:9435a15acad94dc0390377"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
