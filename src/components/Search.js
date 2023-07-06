import { prompts } from "@/data/prompts";
import Link from "next/link";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  function searchFun(e) {
    e.preventDefault();
    let searchTerm = e.target.value;
    let tempArr = [];
    // checking for the searchTerm in each prompt
    prompts.forEach((prompt, index) => {
      // Here we are checking if the search term is not empty after removing the spaces and if the prompt contains the search term
      if (
        searchTerm.replaceAll(" ", "").length !== 0 &&
        prompt.act.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        // pushing the prompt to the tempArr (to avoid mutating the state and re-rendering the component)
        tempArr.push({
          act: prompt.act,
          href: `/prompts/${prompt.index}`,
        });
      }
    });
    // setting the searchResults state to the tempArr
    setSearchResults(tempArr);
  }
  return (
    <div className="group absolute top-5 md:top-4 left-1/2 -translate-x-1/2 opacity-75 focus-within:opacity-100 transition-all ease-in-out z-10">
      <div className="bg-white rounded-full">
        <input
          type="text"
          name=""
          id=""
          required
          onChange={(e) => {
            searchFun(e);
          }}
          placeholder="Search..."
          className="ring ring-zinc-800 outline-none bg-transparent h-10 sm:h-12 w-48 group-focus-within:w-[90vw] sm:group-focus-within:w-96 rounded-full px-4 transition-all ease-in-out"
        />
        <BsSearch className="absolute top-2.5 sm:top-3 right-3 h-5 sm:h-6 w-5 sm:w-6 fill-zinc-800" />
      </div>
      {searchResults.length !== 0 && (
        <div className="w-full max-h-[50vh] bg-white relative -mt-3 p-4 pt-8 -z-10 rounded-b-xl hidden group-focus-within:flex flex-col overflow-y-auto max-w-[12rem] group-focus-within:max-w-[90vw] sm:group-focus-within:max-w-[24rem] font-medium ease-in-out transition-all hide-scrollbar shadow-xl">
          {searchResults.map((result, i) => (
            <Link key={i} href={result.href}>
              <span className="w break-all">{result.act}</span>
              <hr className="opacity-10 w-full border border-zinc-800 my-2" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
