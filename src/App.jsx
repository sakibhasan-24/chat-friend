import React, { useContext } from "react";
import Home from "./pages/Home/Home";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
export default function App() {
  const { user } = useContext(AuthProvider);
  // console.log(user);
  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Home /> : <Navigate to="/login" />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <SignUp />,
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
  ]);
  return (
    <div className="max-2-6xl mx-auto my-12 p-8">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}
