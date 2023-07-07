import Card2 from "@/components/Card2";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import { prompts } from "@/data/prompts";
import { Open_Sans } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const customFont = Open_Sans({ subsets: ["latin"] });

export default function Home({ data, pageNumber, maxPageNumber }) {
  const { isReady, router } = useRouter();
  const [muted, setMuted] = useState(false);
  if (isReady && router) {
    router.push(`/${pageNumber}`);
  }
  // Applying fade-appear animation on page change for smooth transition [not a good practice, but works for now]
  useEffect(() => {
    if (isReady) {
      document.getElementById("masonry").classList.add("fade-appear");
      setTimeout(() => {
        document.getElementById("masonry").classList.remove("fade-appear");
      }, 200);
    }
  }, [pageNumber]);
  return (
    <>
      <Head>
        <title>Lit Prompts : Best AI prompts 🔥</title>
      </Head>
      <main
        className={`${customFont.className} relative scroll-smooth flex flex-col flex-wrap gap-2 sm:gap-10 items-center`}
      >
        <Header searchBarvisible={true} muted={muted} setMuted={setMuted} />
        <div id="masonry" className="w-full flex justify-center">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 800: 2, 1230: 3 }}
            className="w-full max-w-7xl"
          >
            <Masonry>
              {data.map((prompt, i) => (
                <Card2
                  key={i}
                  index={prompt.index}
                  act={prompt.act}
                  prompt={prompt.prompt}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
        <Pagination
          pageNumber={parseInt(pageNumber)}
          maxPageNumber={parseInt(maxPageNumber)}
          muted={muted}
        />
      </main>
    </>
  );
}

// function to paginate the array
const paginateArray = (array, pageNumber, pageSize) => {
  const page = array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  return page;
};

export const getServerSideProps = async (pageContext) => {
  const maxPageNumber = Math.ceil(prompts.length / 10);
  // default props : redirecting to page 1 if page number is invalid
  const defaultProps = {
    redirect: {
      permanent: false,
      destination: "/1",
    },
    props: {},
  };
  // using try-catch for error handling
  try {
    const pageNumber = pageContext.query.slug;
    if (pageNumber > 0 && pageNumber <= maxPageNumber) {
      return {
        props: {
          data: paginateArray(prompts, pageNumber, 10),
          pageNumber: pageNumber,
          maxPageNumber: maxPageNumber,
        },
      };
    } else {
      return defaultProps;
    }
  } catch {
    return defaultProps;
  }
};
