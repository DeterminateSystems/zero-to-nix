import Tiles from "components/docs/Tiles";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { allDocs } from "contentlayer/generated";
import Head from "next/head";

const QuickStartHome = () => {
  const title = "Quick start";
  const description = "Jump start your life with Nix!";

  const sortedByWeight = allDocs.sort((d1, d2) => d1.weight - d2.weight);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <Navbar />
          <div className="px-6 pt-12">
            <div className="container mx-auto">
              <div className="flex flex-col space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl">{title} ❄️</h1>
                  <h2 className="text-xl">{description}</h2>
                </div>

                <Tiles docs={sortedByWeight} />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default QuickStartHome;
