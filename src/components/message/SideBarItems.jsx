import React, { useEffect, useState } from "react";
import { CiSearch, CiLogout } from "react-icons/ci";
import Users from "./Users";
import useLogOut from "../../hooks/useLogOut";

import useGetUsers from "../../hooks/useGetUsers";
export default function SideBarItems() {
  const { loading, conversations } = useGetUsers();

  const { logOut } = useLogOut();

  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <div>
      <form className="flex items-center gap-6 ">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search"
          className="w-full text-slate-900 mx-auto py-2 px-4 rounded-lg focus:bg-slate-300 text-xs focus:outline-none focus:text-white"
        />
        <CiSearch className="text-4xl cursor-pointer" />
      </form>
      {/* users */}
      <div>
        {conversations.length < 1
          ? "currently no users"
          : conversations &&
            conversations?.map((conversation) => (
              <Users key={conversation._id} conversation={conversation} />
            ))}
      </div>
      {/* logout */}
      <CiLogout
        onClick={handleLogOut}
        className=" text-2xl font-bold cursor-pointer"
      />
    </div>
  );
}
