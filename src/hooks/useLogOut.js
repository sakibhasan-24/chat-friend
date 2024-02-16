import React, { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

export default function useLogOut() {
  const { setUser } = useContext(AuthProvider);
  const logOut = async () => {
    try {
      const res = await axios.post("/api/auth/logout");
      setUser(null);
      localStorage.removeItem("user-information");
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setUser(null);
    }
  };
  return { logOut };
}
