import Card2 from "@/components/Card2";
import { prompts } from "@/data/prompts";
import { Open_Sans } from "next/font/google";
import { useRouter } from "next/router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const customFont = Open_Sans({ subsets: ["latin"] });

export default function Home({ data, pageNumber, maxPageNumber }) {
  const { isReady, router } = useRouter();
  if (isReady && router) {
    router.push(`/${pageNumber}`);
  }
  return (
    <>
      <main
        className={`${customFont.className} relative scroll-smooth flex flex-col ring flex-wrap gap-10 items-center`}
      >
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
      </main>
    </>
  );
}

const paginateArray = (array, pageNumber, pageSize) => {
  const page = array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  return page;
};

export const getServerSideProps = async (pageContext) => {
  const maxPageNumber = Math.ceil(prompts.length / 10);
  const defaultProps = {
    props: {
      data: paginateArray(prompts, 1, 10),
      pageNumber: 1,
      maxPageNumber: maxPageNumber,
    },
  };
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
