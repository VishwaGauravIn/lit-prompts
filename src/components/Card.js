import React from "react";
import {
  BsWhatsapp,
  BsClipboard,
  BsBookmarkHeart,
  BsLink45Deg,
} from "react-icons/bs";

export default function Card({ key, index, act, prompt, fullSize }) {
  const colorClass = `grad${Math.floor(Math.random() * 9) + 1}`;
  return (
    <div
      id={index}
      key={key}
      className="flex flex-col gap-1 justify-center items-center w-max relative z-10 m-6 self-center"
    >
      <p className="font-bold text-xl text-zinc-700">
        <span className="text-4xl mr-0.5 text-zinc-800">#</span>
        {index}
      </p>

      <div className={`${fullSize ? "w-10/12" : "w-80"} max-w-xl bg-zinc-800/90 border-2 border-zinc-800 backdrop-blur-lg rounded-xl p-6 text-white text-justify font-bold`}>
        {act}
      </div>
      <span className="w-4 h-4 bg-zinc-800 rounded-full" />
      <span className="w-2 h-2 bg-zinc-800 rounded-full" />
      <div
        className={`relative ${fullSize ? "w-10/12" : "w-80"} max-w-xl ${colorClass} p-6 rounded-lg text-justify z-10 bg-opacity-75 bg-blend-lighten`}
      >
        {prompt}
      </div>
      <div className={`relative ${fullSize ? "w-9/12" : "w-[18rem]"} max-w-xl bg-zinc-800/90 backdrop-blur-lg h-16 -mt-8 rounded-xl p-4 pt-5 text-fuchsia-900`}></div>
      <div
        className={`relative ${fullSize ? "w-10/12" : "w-[21rem]"} max-w-xl ${colorClass} py-4 px-8 h-16 rounded-xl -mt-4 text-justify z-10 font-semibold flex gap-2 justify-between`}
      >
        <BsClipboard
          title="Copy to Clipboard"
          className="w-6 h-6 opacity-90 hover:opacity-100 ease-in-out transition-all active:scale-90 cursor-pointer duration-100 stroke-[0.2]"
        />
        <BsLink45Deg
          title="Copy Link"
          onClick={() =>
            navigator.clipboard.writeText(
              "https://litprompts.itsvg.in/#" + index
            )
          }
          className="w-7 h-7 opacity-90 hover:opacity-100 ease-in-out transition-all active:scale-90 cursor-pointer duration-100 stroke-[0.2]"
        />
        <a
          href={`whatsapp://send?text=*Act:* ${act} %0a%0a*Prompt:* ${prompt}%0a%0a*Share your own prompts at https://litprompts.itsvg.in* %0a%0a*LitPrompts*`}
          data-action="share/whatsapp/share"
          className=""
        >
          <BsWhatsapp
            title="Share on WhatsApp"
            className="w-6 h-6 opacity-90 hover:opacity-100 ease-in-out transition-all active:scale-90 cursor-pointer duration-100 stroke-[0.1]"
          />
        </a>
        <BsBookmarkHeart
          title="Bookmark it"
          className="w-6 h-6 opacity-90 hover:opacity-100 ease-in-out transition-all active:scale-90 cursor-pointer duration-100 stroke-[0.2]"
        />
      </div>
    </div>
  );
}
