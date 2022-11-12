"use client";

import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { allConcepts } from "contentlayer/generated";
import Link from "next/link";

const Concepts = () => {
  const title = "Concepts";
  const description = "Dig a bit deeper into Nix";

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Navbar />
        <div className="px-6 pt-12">
          <div className="container mx-auto">
            <div className="flex flex-col space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl">{title}</h1>
                <h2 className="text-xl">{description}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
                {allConcepts.map((c) => (
                  <Link
                    key={c._id}
                    href={c.path}
                    className="border-2 border-slate-200 rounded-lg py-3 px-5 text-xl hover:border-sky-500 hover:bg-slate-50 tracking-tight"
                  >
                    {c.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Concepts;
