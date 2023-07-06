import React, { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    let scrollYval = scrollY;
    try {
      const scrollEvent = window.addEventListener("scroll", () => {
        if (scrollYval > 50) {
          document.getElementById("navbar").style.backgroundColor =
            "rgb(18, 18, 18, 0.9)";
        } else {
          document.getElementById("navbar").style.backgroundColor =
            "transparent";
        }
      });
    } catch {
      window.removeEventListener(scrollEvent);
    }
  }, []);
  return (
    <div
      id="navbar"
      className="flex justify-between w-full px-6 py-3 top-0 sticky z-30"
    >
      <div className="flex justify-center items-center text-2xl font-bold text-yellow-400">
        <img src="/logo.png" alt="" className="w-14 h-14" />
        Lit Prompts
      </div>
    </div>
  );
}
