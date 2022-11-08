import React from "react";

import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="p-6">{children}</main>
    </>
  );
};

export default Layout;
