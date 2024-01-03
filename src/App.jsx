import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
//layout
import MainLayout from "./layout/MainLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useGlobalContext } from "./hooks/useGlobalContext"
//firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Create from "./pages/Create";

function App() {
  const { user, isAuthReady, dispatch } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />,
        </ProtectedRoutes>
      ),
      children:[
        {
          index: true,
          element: <Home/>
        },
        {
          path:'recipe/:id',
          element: <Recipe/>,
        },
        {
          path:'create',
          element: <Create/>,
        },
      ]
    },
    {
      path: "login",
      element: <>{user ? <Navigate to="/" /> : <Login />}</>,
    },
    {
      path: "signup",
      element: <>{user ? <Navigate to="/" /> : <Signup />}</>,
    },
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "IS_AUTH_CHANGE" });
    });
  }, [])

  return isAuthReady && <RouterProvider router={routes} />
}

export default App
