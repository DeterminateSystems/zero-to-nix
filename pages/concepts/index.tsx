import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { allConcepts } from "contentlayer/generated";
import Head from "next/head";
import Link from "next/link";

const ConceptsHome = () => {
  const title = "Concepts";
  const description = "Dig a bit deeper!";

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {allConcepts.map((c) => (
                    <Link key={c._id} href={c.path}>
                      <div className="border-2 rounded-lg py-4 px-6 hover:border-blue-500">
                        <p className="text-2xl">{c.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ConceptsHome;
