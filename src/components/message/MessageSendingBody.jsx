import React, { useContext, useState } from "react";
import { AuthProvider } from "../../context/AuthContext";
import useConversation from "../../store/useConversations";
import MessageInput from "./MessageInput";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";

export default function MessageSendingBody() {
  const { user } = useContext(AuthProvider);
  const [message, setMessage] = useState("");
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { loading, sendMessage } = useSendMessage();
  const { messages } = useGetMessages();
  //   console.log("messages", messages);
  const handleSendMessage = async (e) => {
    e.preventDefault();
    await sendMessage(message);
    setMessage("");
  };
  //   console.log(message);
  return (
    <div className="max-w-xl mx-auto relative ">
      {!selectedConversation ? (
        <>
          <p>Welcome Back mr {user.fullName}</p>
        </>
      ) : (
        <div>
          <p className="text-xl font-semibold ">
            message for{" "}
            <span className="text-orange-600">
              {selectedConversation.fullName}
            </span>
          </p>

          <div className="max-h-full bg-slate-500 p-2 rounded-lg overflow-x-auto">
            {/* all messages */}
            <div className="flex flex-col gap-4 min-h-full">
              {messages &&
                messages.length > 0 &&
                messages?.map((message) => (
                  <Message key={message._id} message={message} />
                ))}
            </div>
            {/* message send */}
            <form className="relative" onSubmit={handleSendMessage}>
              <input
                type="text"
                name="message"
                id="message"
                placeholder="send message"
                className="w-full p-4 text-slate-950 rounded-lg text-xs focus:outline-none focus:border-orange-600  my-6 "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="absolute bottom-8 right-8 text-slate-950 rounded-full p-2 hover:bg-slate-200 transition-all duration-300"
              >
                <BsSend />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
