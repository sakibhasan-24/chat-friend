import React from "react";
import MessageSideBar from "./MessageSideBar";
import MessageSendingBody from "./MessageSendingBody";

export default function MessageContainer() {
  return (
    <div className="max-w-3xl text-slate-100   mx-auto grid grid-cols-8 gap-12 bg-slate-600 p-8 shadow-2xl shadow-blue-900 rounded-2xl">
      {/* message Sidebar */}
      <div className="col-span-3 font-bold text-xl">
        <MessageSideBar />
      </div>
      {/* text-send body */}
      <div className="col-span-5 font-bold text-xl">
        <MessageSendingBody />
      </div>
    </div>
  );
}
