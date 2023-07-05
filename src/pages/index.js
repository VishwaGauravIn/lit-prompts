import AnimatedBG from "@/components/AnimatedBG";
import Card from "@/components/Card";
import Card2 from "@/components/Card2";
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
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 800: 2, 1230: 3 }}
          className="w-full"
        >
          <Masonry>
            {prompts.map((prompt, i) => (
              <Card2
                key={i}
                index={prompt.index}
                act={prompt.act}
                prompt={prompt.prompt}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </main>
    </>
  );
}
