"use client";

import { navLinks } from "@/data/navLinksData";
import useBreakpoints from "@/hooks/useBreakpoints";
import Link from "next/link";
import React from "react";
import Button from "./Button";

type NavbarProps = {} & React.ComponentPropsWithoutRef<"nav">;

const Navbar = ({}: NavbarProps) => {
  const { isMd } = useBreakpoints();
  const _navLinks = isMd ? navLinks.slice() : navLinks.slice(0, 1);

  return (
    <nav className="fixed inset-x-0 bottom-0 md:bottom-auto md:top-6 z-50 mx-auto w-full max-w-6xl md:px-8 lg:px-20">
      <div className="mx-auto flex h-14 md:h-20 lg:h-[96px] px-4 md:px-6 lg:px-8 items-center justify-between  md:rounded-3xl bg-violet-200 md:bg-violet-200 md:bg-opacity-50 md:backdrop-blur-xl ">
        <Link
          href={"#hero"}
          className="text-xs md:text-base lg:text-xl font-black text-violet-700"
        >
          <div>
            Hype
            <span className="ml-1 text-black">-</span>
          </div>
          <div className="ml-3 text-amber-700">Market</div>
        </Link>

        <ul className="ml-5 md:ml-0 flex items-center space-x-[30px] font-semibold text-sm lg:text-base">
          {_navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>
                <span className="text-black hover:text-amber-600 transition-colors">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex md:space-x-3">
          <Link href="#">
            <Button size="sm" variant="outline" className="hidden md:block">
              Sign In
            </Button>
          </Link>
          <Link href="#">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
