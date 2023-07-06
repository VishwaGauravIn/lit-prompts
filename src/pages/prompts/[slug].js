import Card from "@/components/Card";
import Card2 from "@/components/Card2";
import Header from "@/components/Header";
import { prompts } from "@/data/prompts";
import { useRouter } from "next/router";
import React from "react";

export default function Prompts() {
  const { isReady, query } = useRouter();
  let card;
  if (isReady) {
    if (parseInt(query.slug) > 0 && parseInt(query.slug) <= prompts.length) {
      let data = prompts[parseInt(query.slug) - 1];
      console.log(data);
      card = (
        <Card2
          index={data.index}
          act={data.act}
          prompt={data.prompt}
          fullSize
        />
      );
    }
  }
  return (
    <main className="z-10 relative flex flex-col items-center">
      <Header />
      <div>{isReady && card}</div>
    </main>
  );
}
