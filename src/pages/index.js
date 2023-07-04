import AnimatedBG from "@/components/AnimatedBG";
import Card from "@/components/Card";
import { prompts } from "@/data/prompts";
import { Ysabeau } from "next/font/google";

const customFont = Ysabeau({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={`${customFont.className} relative scroll-smooth flex flex-wrap gap-10 justify-center`}
      >
        {prompts.map((prompt) => (
          <Card key={prompt.id} act={prompt.act} prompt={prompt.prompt} />
        ))}
      </main>
      <AnimatedBG />
    </>
  );
}
