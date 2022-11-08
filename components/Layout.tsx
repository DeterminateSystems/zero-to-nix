import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Navbar />
        <article>{children}</article>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
