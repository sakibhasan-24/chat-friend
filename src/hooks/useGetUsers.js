import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useGetUsers() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getAllConversationAndUsers = async () => {
      setLoading(true);
      try {
        const res = await axios("/api/users/getUsers");
        // console.log(res.data);
        setConversations(res.data);
      } catch (error) {
        console.log(error);
        toast.error(error.messsage);
      } finally {
        setLoading(false);
      }
    };
    getAllConversationAndUsers();
  }, []);
  return { loading, conversations };
}
