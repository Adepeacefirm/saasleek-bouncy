import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const MobileNavbar = () => {
  return (
    <AnimatePresence >
      <motion.nav
        initial={{ y: "-5%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="flex flex-col justify-start pt-10 text-center h-[90vh] gap-10 bg-white text-primary"
      >
        <Link href="/about">About</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/changelog">Changelog</Link>
        <Link href="/docs">Docs</Link>
      </motion.nav>
    </AnimatePresence>
  );
};

export default MobileNavbar;
