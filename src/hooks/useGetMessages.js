import React, { useEffect, useState } from "react";
import useConversation from "../store/useConversations";
import toast from "react-hot-toast";
import axios from "axios";

export default function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await axios(
          `/api/message/get-message/${selectedConversation?._id}`
        );
        setMessages(res.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);
  return { loading, messages };
}
