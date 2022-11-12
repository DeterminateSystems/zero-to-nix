"use client";

import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { allSteps } from "contentlayer/generated";
import { sortByWeight } from "lib/content";
import Link from "next/link";

const Start = () => {
  const title = "Quick start";
  const description = "Up and running with Nix in no time";

  const steps = sortByWeight(allSteps);

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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
                {steps.map((s) => (
                  <Link
                    key={s._id}
                    href={s.path}
                    className="border-2 border-gray-200 rounded-lg py-4 px-6 hover:border-blue-500 text-lg"
                  >
                    {s.title}
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

export default Start;
