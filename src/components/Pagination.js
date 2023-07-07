import { useRouter } from "next/router";
import React from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

export default function Pagination({ pageNumber, maxPageNumber, muted }) {
  const router = useRouter();
  function prev() {
    // double checking to avoid inspect element hackers, lol
    if (pageNumber > 1) {
      router.push(`/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
    }
    playClick();
  }
  function next() {
    if (pageNumber < maxPageNumber) {
      router.push(`/${pageNumber + 1}`).then(() => window.scrollTo(0, 0));
      playClick();
    }
  }
  function playClick() {
    if (!muted) {
      document.getElementById("clickAudio").play();
    }
  }
  return (
    <div className="flex justify-center gap-8 items-center">
      {/* Previous Button */}
      <button
        className="flex items-center bg-zinc-800 relative rounded-full text-white pl-4 pr-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-all ease-in-out duration-100 shadow-xl"
        disabled={pageNumber === 1}
        onClick={prev}
      >
        <BsCaretLeftFill /> Prev
        <span className="hidden sm:block">ious Page</span>
      </button>
      <span className="">
        <span className="text-2xl font-bold mr-1">#</span>
        {pageNumber}/{maxPageNumber}
      </span>
      {/* Next Button */}
      <button
        className="flex items-center bg-zinc-800 relative rounded-full text-white pl-6 pr-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-all ease-in-out duration-100 shadow-xl"
        disabled={pageNumber === maxPageNumber}
        onClick={next}
      >
        Next<span className="hidden sm:block">&nbsp;Page</span>
        <BsCaretRightFill />
      </button>
      <audio id="clickAudio" src="/click.mp3" className="hidden" />
    </div>
  );
}
