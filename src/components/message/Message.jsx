import React, { useContext } from "react";
import { AuthProvider } from "../../context/AuthContext";
import useConversation from "../../store/useConversations";

export default function Message({ message }) {
  //   console.log(message);
  const { user } = useContext(AuthProvider);
  const { selectedConversation } = useConversation();
  const formMe = message?.senderId === user._id;

  const chatClassName = formMe ? "chat-end" : "chat-start";
  const profilePic = formMe
    ? user.profilePicture
    : selectedConversation.profilePicture;
  const bgColor = formMe ? "bg-green-500" : "bg-gray-300";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bgColor} pb-2`}>
        {message?.newMessage?.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12.10
      </div>
    </div>
  );
}
