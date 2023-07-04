import AnimatedBG from "@/components/AnimatedBG";
import { Ysabeau } from "next/font/google";

const customFont = Ysabeau({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${customFont.className} relative`}>
        <div className="flex flex-col gap-1 justify-center items-center w-max m-2 shadow-lg relative z-10">
          <div className="w-80 bg-zinc-800 rounded-lg p-4 text-white text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
          <span className="w-4 h-4 bg-zinc-800 rounded-full" />
          <span className="w-2 h-2 bg-zinc-800 rounded-full" />
          <div className="relative w-80 grad1 p-4 rounded-lg border border-b-0 text-justify z-10 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            tempora, sint ex error perferendis reprehenderit.
          </div>
          <div className="relative w-80 bg-fuchsia-200 h-12 -mt-4 border rounded-lg p-4 pt-5 text-fuchsia-900"></div>
        </div>
      </main>
      <AnimatedBG/>
    </>
  );
}
