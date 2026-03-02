"use client";

import React, { ReactNode } from "react";
import Navbar from "./Navbar/navbar";
import Footer from "./footer";

type Props = {
  children: ReactNode;
};

const MasterLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MasterLayout;
