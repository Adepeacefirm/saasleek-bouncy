import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

interface MobileNavbarProps {
  setIsOpen: (value: boolean) => void;
}

const MobileNavbar = ({ setIsOpen }: MobileNavbarProps) => {
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "#pricing", label: "Pricing", isAnchor: true },
    { href: "/blog", label: "Blog" },
    { href: "/reviews", label: "Reviews" },
    { href: "/changelog", label: "Changelog" },
    { href: "/docs", label: "Docs" },
  ];

  const closeMenu = () => setIsOpen(false);
  
  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: "-5%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="flex flex-col justify-start pt-10 text-center h-[90vh] gap-10 bg-white text-primary"
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
      </motion.nav>
    </AnimatePresence>
  );
};

export default MobileNavbar;
