import AnimatedBG from "@/components/AnimatedBG";
import Card from "@/components/Card";
import { prompts } from "@/data/prompts";
import { Open_Sans } from "next/font/google";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const customFont = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={`${customFont.className} relative scroll-smooth flex flex-wrap gap-10 justify-center`}
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }} className="w-full">
          <Masonry>
            {prompts.map((prompt, index) => (
              <Card key={index} index={index+1} act={prompt.act} prompt={prompt.prompt} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </main>
      <AnimatedBG />
    </>
  );
}
