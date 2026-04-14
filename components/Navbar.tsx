"use client";

import Image from "next/image";
import saasleek_logo from "@/assets/saasleeklogo.avif";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = () => {
      if (mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    // run once on mount
    handleChange();

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div className="sticky w-full z-50 bg-white shadow-xs top-0">
      <header className="w-[92%] mx-auto flex justify-between items-center py-3 ">
        <div>
          <Image src={saasleek_logo} alt="logo" />
        </div>

        <nav className="hidden lg:flex items-center justify-center gap-8 font-medium">
          <Link className="cursor-pointer hover:text-green-text" href="/about">
            About
          </Link>
          <Link
            className="cursor-pointer hover:text-green-text"
            href="/pricing"
          >
            Pricing
          </Link>
          <Link className="cursor-pointer hover:text-green-text" href="/blog">
            Blog
          </Link>
          <Link
            className="cursor-pointer hover:text-green-text"
            href="/changelog"
          >
            Reviews
          </Link>
          <Link className="cursor-pointer hover:text-green-text" href="/docs">
            About
          </Link>
          <Link
            className="cursor-pointer hover:text-green-text"
            href="/waitlist"
          >
            Waitlist
          </Link>
          <Link
            className="cursor-pointer hover:text-green-text"
            href="/contact"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden py-2 px-6 bg-black text-white rounded-full lg:block hover:text-green-light cursor-pointer">
          <Link href="/">Get Template</Link>
        </div>

        <div className="p-2.5 bg-black rounded-lg lg:hidden shadow-2xl shadow-black">
          <div
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className="w-6 h-6 flex gap-1 flex-col justify-center items-center cursor-pointer"
          >
            {/* top line */}
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5 bg-green-text" : "bg-white"}`}
            />

            {/* bottom line */}
            <span
              className={`block h-0.5 w-6 transition-all duration-300 mt-1 ${isOpen ? "-rotate-45 -translate-y-1 bg-green-text" : "bg-white"}`}
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div>{isOpen && <MobileNavbar />}</div>
    </div>
  );
};

export default Navbar;
