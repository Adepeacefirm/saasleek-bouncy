"use client";

import Image from "next/image";
import saasleek_logo from "@/assets/saasleeklogo.avif";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
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

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/#pricing", label: "Pricing", isAnchor: true },
    { href: "/blog", label: "Blog" },
    { href: "/reviews", label: "Reviews" },
    { href: "/changelog", label: "Changelog" },
    { href: "/docs", label: "Docs" },
    { href: "/waitlist", label: "Waitlist" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="sticky w-full z-50 bg-white shadow-xs top-0">
      <header className="w-[92%] mx-auto flex justify-between items-center py-3 ">
        <div>
          <Link href="/" className="cursor-pointer">
            <Image src={saasleek_logo} alt="logo" />
          </Link>
        </div>
        <nav className="hidden lg:flex items-center justify-center font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`cursor-pointer px-3 py-1 rounded-lg transition ${
                  isActive
                    ? "bg-gray-200 text-black"
                    : "text-black hover:text-green-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
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
      <div>{isOpen && <MobileNavbar setIsOpen={setIsOpen} />}</div>
    </div>
  );
};

export default Navbar;
