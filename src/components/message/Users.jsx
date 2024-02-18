import React from "react";
import useConversation from "../../store/useConversations";
export default function Users({ conversation }) {
  console.log("before click", conversation);
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  console.log("after click", conversation);
  return (
    <section
      onClick={() => setSelectedConversation(conversation)}
      className={`my-12 text-xs font-semibold flex gap-10  items-center bg-blue-800 p-4 rounded-lg cursor-pointer  
      ${isSelected ? "bg-black" : ""}`}
    >
      <div className="flex  gap-2 items-center">
        <img
          src={conversation?.profilePicture}
          alt="image"
          className="w-10 h-10 rounded-full "
        />
        <h1>{conversation?.userName}</h1>
      </div>
      <p>👍</p>
    </section>
  );
}
