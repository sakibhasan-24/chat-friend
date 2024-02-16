import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext";
import axios from "axios";

const useLogIn = () => {
  const { setUser } = useContext(AuthProvider);
  const [loading, setLoading] = useState(false);
  const logIn = async (userName, password) => {
    setLoading(true);
    if (!userName || !password) {
      toast.error("Please fill all fields");
    }
    const res = await axios.post("/api/auth/login", { userName, password });
    localStorage.setItem("user-information", JSON.stringify(res.data));
    setUser(res.data);
    try {
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { logIn, loading };
};

export default useLogIn;
