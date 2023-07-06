import React from "react";
import {
  BsWhatsapp,
  BsClipboard,
  BsBookmarkHeart,
  BsLink45Deg,
} from "react-icons/bs";

export default function Card2({ index, act, prompt, fullSize }) {
  function copyLink() {
    navigator.clipboard.writeText(window.location.origin + "/prompts/" + index);
  }
  return (
    <div
      className={`max-[800px]:w-full md: w-[40vw] ${
        fullSize ? "max-w-[95vw]" : "max-[800px]:max-w-[95vw] max-w-sm"
      } rounded-xl card p-6 text-zinc-200 flex flex-wrap flex-col gap-4 m-4 self-center`}
    >
      <div className="flex w-full justify-between items-baseline">
        <p className="flex flex-wrap font-semibold text-xl md:text-2xl w-8/12">
          {act}
        </p>
        <p className="font-bold text-5xl text-zinc-500 flex justify-end flex-wrap relative pulse w-3/12">
          #{index}
        </p>
      </div>
      <hr className="opacity-10" />
      <p className="text-zinc-300">{prompt}</p>
      <hr className="opacity-10" />
      {/* Tools */}
      <div className="flex gap-8 text-zinc-400 justify-around -mt-1 -mb-3">
        <div className="group hover:bg-yellow-100/20 p-2 rounded-full w-12 h-12 flex justify-center items-center">
          <BsClipboard className="w-6 h-6 transition-all ease-in-out group-hover:text-yellow-300 active:scale-90 cursor-pointer" />
        </div>
        <div className="group hover:bg-cyan-100/20 p-2 rounded-full w-12 h-12 flex justify-center items-center">
          <BsLink45Deg
            onClick={() => copyLink()}
            className="w-7 h-7 transition-all ease-in-out group-hover:text-cyan-300 active:scale-90 cursor-pointer"
          />
        </div>
        <div className="group hover:bg-green-100/20 p-2 rounded-full w-12 h-12 flex justify-center items-center">
          <BsWhatsapp className="w-6 h-6 transition-all ease-in-out group-hover:text-green-300 active:scale-90 cursor-pointer" />
        </div>
        <div className="group hover:bg-red-100/20 p-2 rounded-full w-12 h-12 flex justify-center items-center">
          <BsBookmarkHeart className="w-6 h-6 transition-all ease-in-out group-hover:text-red-300 active:scale-90 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
