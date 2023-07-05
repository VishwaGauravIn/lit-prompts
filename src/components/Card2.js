import React from "react";
import {
  BsWhatsapp,
  BsClipboard,
  BsBookmarkHeart,
  BsLink45Deg,
} from "react-icons/bs";

export default function Card2({ key, index, act, prompt, fullSize }) {
  function copyLink() {
    navigator.clipboard.writeText(window.location.origin + "/prompts/" + index);
  }
  return (
    <div
      key={key}
      className={`max-[800px]:w-full md: w-[40vw] ${ fullSize ? "max-w-[95vw]" : "max-[800px]:max-w-[95vw] max-w-sm" } rounded-xl card p-6 text-zinc-200 flex flex-wrap flex-col gap-4 m-4 self-center`}
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
      <div className="flex gap-8 text-zinc-400 justify-around">
        <BsClipboard className="w-6 h-6 transition-all ease-in-out hover:text-yellow-300 active:scale-90 cursor-pointer" />
        <BsLink45Deg
          onClick={() => copyLink()}
          className="w-7 h-7 transition-all ease-in-out hover:text-cyan-300 active:scale-90 cursor-pointer"
        />
        <BsWhatsapp className="w-6 h-6 transition-all ease-in-out hover:text-green-300 active:scale-90 cursor-pointer" />
        <BsBookmarkHeart className="w-6 h-6 transition-all ease-in-out hover:text-red-300 active:scale-90 cursor-pointer" />
      </div>
    </div>
  );
}
