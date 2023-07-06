import React, { useEffect } from "react";
import { BsBookmarkHeart } from "react-icons/bs";
import Search from "./Search";

export default function Header({ searchBarvisible }) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollYval = scrollY;
      if (scrollYval > 50) {
        document.getElementById("navbar").style.backgroundColor =
          "rgb(18, 18, 18, 0.9)";
        document.getElementById("navbar").style.backdropFilter = "blur(12px)";
      } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.backdropFilter = "blur(0px)";
      }
    });
  }, []);
  return (
    <div
      id="navbar"
      className="flex justify-between w-full px-4 md:px-6 py-4 md:py-3 top-0 sticky z-30"
    >
      <div className="flex justify-center items-center text-2xl font-bold text-yellow-400">
        <img src="/logo.png" alt="" className="w-8 md:w-14 h-8 md:h-14" />
        <span className="hidden md:block">Lit Prompts</span>
      </div>
      {searchBarvisible && <Search />}
      <div className="">
        <BsBookmarkHeart />
      </div>
    </div>
  );
}
