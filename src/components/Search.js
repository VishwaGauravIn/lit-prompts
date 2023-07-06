import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  function searchFun() {
    alert("ae vedya");
  }
  return (
    <div className="group absolute top-3 md:top-4 left-1/2 -translate-x-1/2 opacity-75 focus-within:opacity-100 transition-all ease-in-out z-10">
      <form onSubmit={searchFun} className="bg-white rounded-full">
        <input
          type="text"
          name=""
          id=""
          required
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="ring ring-zinc-800 outline-none bg-transparent h-10 sm:h-12 w-48 group-focus-within:w-80 sm:group-focus-within:w-96 rounded-full px-4 transition-all ease-in-out"
        />
        <button type="submit">
          <BsSearch className="absolute top-2.5 sm:top-3 right-3 h-5 sm:h-6 w-5 sm:w-6 fill-zinc-800" />
        </button>
      </form>
      <div className="w-full bg-white relative -mt-3 p-4 pt-8 -z-10 rounded-b-xl flex flex-col flex-wrap max-w-[12rem] group-focus-within:max-w-[20rem] sm:group-focus-within:max-w-[24rem] font-medium">
        <span className="w break-all">Lorem ipsum dolor sit.</span>
        <hr className="opacity-10 w-full border border-zinc-800 my-2" />
        <span className="w break-all">Lorem ipsum dolor sit.</span>
      </div>
    </div>
  );
}
