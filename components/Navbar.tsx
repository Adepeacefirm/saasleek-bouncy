"use client";

import Image from "next/image";
import saasleek_logo from "@/assets/saasleeklogo.avif";
import Link from "next/link";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="fixed w-full z-50 bg-white shadow-xs ">
      <header className="w-[92%] mx-auto flex justify-between items-center py-3 ">
        <div>
          <Image src={saasleek_logo} alt="logo" />
        </div>

        <nav className="hidden lg:flex items-center justify-center gap-8 font-medium">
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/changelog">Reviews</Link>
          <Link href="/docs">About</Link>
          <Link href="/waitlist">Waitlist</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="hidden py-2 px-6 bg-black text-white rounded-full lg:block">
          <Link href="/">Get Template</Link>
        </div>

        <div className="p-2.5 bg-black rounded-lg lg:hidden">
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
