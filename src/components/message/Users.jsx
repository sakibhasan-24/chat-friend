import React from "react";

export default function Users() {
  return (
    <section className="my-12 text-xs font-semibold flex gap-10  items-center bg-blue-950 p-4 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-500">
      <div className="flex  gap-2 items-center">
        <img
          src="https://i.pinimg.com/736x/09/24/a7/0924a7ef295741e916c8f42512bbe5bd.jpg"
          alt="image"
          className="w-10 h-10 rounded-full "
        />
        <h1>Sakib</h1>
      </div>
      <p>👍</p>
    </section>
  );
}
