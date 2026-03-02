"use client";
import React from "react";
import { useEffect, useState } from "react";

import MobNav from "./mobNav";
import WebNav from "./webNav";

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 868);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{isMobile ? <MobNav /> : <WebNav />}</div>;
};

export default Navbar;
