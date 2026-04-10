import Image from "next/image";
import saasleek_logo from "@/assets/saasleeklogo.avif";
import Link from "next/link";

const Navbar = () => {
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
