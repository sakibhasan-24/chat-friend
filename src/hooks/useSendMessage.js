import React, { useState } from "react";
import useConversation from "../store/useConversations";
import axios from "axios";
import toast from "react-hot-toast";

export default function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    // console.log(data);
    setLoading(true);
    try {
      const res = await axios.post(
        `/api/message/send-message/${selectedConversation._id}`,
        { message }
      );

      setMessages([...messages, res.data]);
    } catch (error) {
      toast.error("Error sending message");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
}

// api/message/send-message/:id
