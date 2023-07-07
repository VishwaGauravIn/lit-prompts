import AnimatedBG from "@/components/AnimatedBG";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="Lit Prompts : Best AI prompts 🔥" />
        <meta
          name="description"
          content="Discover the ultimate collection of top AI prompts for ChatGPT, Bard, and beyond. Elevate your prompt skills with this open-source project.  Unleash the full potential of AI-driven interactions."
        />
        <meta name="copyright" content="VishwaGauravIn" />
        <meta
          name="keywords"
          content="chatgpt, prompts, bard, ai, ai prompts, chatgpt prompts, bard prompts, best prompts"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="litprompts.itsvg.in" />
        <meta property="og:title" content="Lit Prompts : Best AI prompts 🔥" />
        <meta
          property="og:description"
          content="Discover the ultimate collection of top AI prompts for ChatGPT, Bard, and beyond. Elevate your prompt skills with this open-source project.  Unleash the full potential of AI-driven interactions."
        />
        <meta
          property="og:image"
          content="https://litprompts.itsvg.in/og.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="litprompts.itsvg.in" />
        <meta
          property="twitter:title"
          content="Lit Prompts : Best AI prompts 🔥"
        />
        <meta
          property="twitter:description"
          content="Discover the ultimate collection of top AI prompts for ChatGPT, Bard, and beyond. Elevate your prompt skills with this open-source project.  Unleash the full potential of AI-driven interactions."
        />
        <meta
          property="twitter:image"
          content="https://litprompts.itsvg.in/og.png"
        />
        {/* Google Ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7377463303850503"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <AnimatedBG />
      </body>
    </Html>
  );
}
