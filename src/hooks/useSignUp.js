import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signUp = async (data) => {
    const { fullName, userName, password, confirmPassword, gender } = data;
    // handle error
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
      toast.error("Please fill all fields");
      return;
    }
    setIsPending(true);
    try {
      const res = await axios.post("/api/auth/signup", data);
      console.log(res.data);
      if (res.data) {
        toast.success("Signup successful");
      }
    } catch (error) {
      toast.error(error.message);
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };
  return { error, isPending, signUp };
};

export default useSignUp;
