"use client";

import React from "react";
import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import menudown from "../../../../public/menu down.png";
import { useRouter } from "next/router";

interface MobNavProps {}

const MobNav: React.FC<MobNavProps> = () => {
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const showDropdown = () => {
    setDropdown(!dropdown);
  };
  const nav = [
    {
      name: "upcoming events",
      link: "/events?type=upcomingevents",
    },
    {
      name: "past events",
      link: "/events?type=pastevents",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Connect",
      link: "/connect",
    },
  ];

  const connect = [
    { name: "Facebook", link: "" },
    { name: "Instagram", link: "" },
    { name: "Linkedlin", link: "" },
    { name: "Youtube", link: "" },
    { name: "Email", link: "" },
    { name: "Messenger", link: "" },
  ];
  return (
    <>
      <div>
        <nav className="z-30 bg-white border-b-2 shadow-2xl border-gray-600 text-gray-800 fixed flex z-10 top-0 h-16 justify-center items-center mx-auto font-abel-pro">
          <Link href="/" className=" pl-3 ">
            <Image className=" w-24 h-9 px-0 " src={logo} alt="logo" />
          </Link>
          <ul className="w-screen flex   px-24 text-2xl inset-0  items-center text-center">
            <li>
              <button onClick={showDropdown}>
                <div className="flex gap-2 justify-center uppercase items-center">
                  <h1 className="text-black text-[20x] font-bold font-abel">
                    {" "}
                    Menu
                  </h1>
                  <Image
                    src={dropdown ? menudown : menudown}
                    alt="menu button"
                    className="h-[9px] w-[17px]"
                    style={{
                      transform: dropdown ? "rotate(0)" : "rotate(180deg)",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                </div>
              </button>

              {dropdown && (
                <div className="absolute top-10 w-14 mt-5 h-[3px] -3 bg-red-500"></div>
              )}
            </li>
            {dropdown && (
              <div className="h-screen flex flex-col absolute items-center justify-around   font-bold bg-white pt-5 top-full right-0 w-full  ">
                {nav?.map((nav, index) => (
                  <ul
                    key={index}
                    className="flex flex-col items-center font-bold gap-2"
                  >
                    <li>
                      <Link
                        href={nav.link}
                        className={
                          router.query.type === nav.link ? "text-red-500" : ""
                        }
                        onClick={() => setActiveLink(nav.link)}
                      >
                        <h1 className="uppercase text-[20px] font-abel-pro font-semibold">
                          {nav.name}
                        </h1>
                      </Link>
                    </li>
                  </ul>
                ))}

                {connect?.map((socialaccount, index) => (
                  <ul
                    key={index}
                    className="flex flex-col items-center text-xl font-bold gap-2 pb-2"
                  >
                    <li>
                      <a
                        className="font-abel-pro font-light text-gray-400 hover:after:h-1 hover:after:bg-red-500 hover:after:w-20 hover:after:absolute hover:after:block"
                        target="_blank"
                        href={socialaccount.link}
                      >
                        {socialaccount.name}
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobNav;
