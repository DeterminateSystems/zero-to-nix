"use client";

import Footer from "components/Footer";
import Navbar from "components/Navbar";
import site from "site";

const Home = () => {
  const { title, description } = site;

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
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
