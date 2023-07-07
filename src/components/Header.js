import React, { useEffect } from "react";
import { BsBookmarkHeart, BsGithub } from "react-icons/bs";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import Search from "./Search";
import { Tooltip } from "react-tooltip";
import Link from "next/link";

export default function Header({ searchBarvisible, muted, setMuted }) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollYval = scrollY;
      if (scrollYval > 50) {
        document.getElementById("navbar").style.backgroundColor =
          "rgb(18, 18, 18, 0.9)";
        document.getElementById("navbar").style.backdropFilter = "blur(12px)";
        document.getElementById("logo").classList.remove("logo-black");
      } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.backdropFilter = "blur(0px)";
        document.getElementById("logo").classList.add("logo-black");
      }
    });
  }, []);
  return (
    <div
      id="navbar"
      className="flex justify-between w-full px-4 md:px-6 py-4 md:py-3 top-0 sticky z-30"
    >
      <Link href="/">
        <div id="logo" className="flex justify-center items-center text-2xl font-bold text-yellow-400 pointer-events-none select-none logo-black">
          <img
            
            src="/logo.png"
            alt=""
            className="w-12 md:w-14 h-12 p-2 md:p-0 md:h-14 bg-zinc-800 md:bg-transparent rounded-full md:rounded-none"
            draggable="false"
          />
          <span className="hidden md:block">Lit Prompts</span>
        </div>
      </Link>
      {searchBarvisible && <Search />}
      <div className="flex justify-center items-center gap-4">
        {/* Disabling this option to mute/unmute for now */}
        {/* {muted !== undefined && (
          <button
            className="text-white bg-zinc-800 w-7 h-7 flex justify-center items-center rounded-full"
            data-tooltip-id="tooltip"
            data-tooltip-content={muted ? "Unmute" : "Mute"}
            data-tooltip-delay-show={1000}
            onClick={() => setMuted(!muted)}
          >
            {muted ? <HiVolumeOff /> : <HiVolumeUp />}
          </button>
        )} */}
        <a
          href="https://github.com/VishwaGauravIn/lit-prompts"
          target="_blank"
          rel="noreferrer noopener"
          className="group bg-zinc-800 hover:bg-fuchsia-300 p-2 rounded-full h-12 w-12 sm:w-auto flex justify-center items-center cursor-pointer transition-all ease-in-out gap-2 text-fuchsia-400 hover:text-zinc-800 font-semibold sm:px-4"
          data-tooltip-id="tooltip"
          data-tooltip-content="GitHub Repo"
          data-tooltip-delay-show={1000}
        >
          <BsGithub className="w-7 h-7 active:scale-90 outline-none" />
          <span className="hidden sm:block">GitHub Repo</span>
        </a>
        {/* <div
          className="group bg-zinc-800 hover:bg-red-400 p-2 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer transition-all ease-in-out"
          data-tooltip-id="tooltip"
          data-tooltip-content="Saved Prompts"
          data-tooltip-delay-show={1000}
        >
          <BsBookmarkHeart className="w-6 h-6 transition-all ease-in-out text-red-400 group-hover:text-zinc-800 active:scale-90 outline-none" />
        </div> */}
      </div>
      <Tooltip id="tooltip" />
    </div>
  );
}
