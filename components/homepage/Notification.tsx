"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Notification = () => {
  const [showBar, setShowBar] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed) {
        setShowBar(window.scrollY < 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  return (
    !dismissed && (
      <div
        className={`px-5 flex justify-between gap-2 items-center overflow-hidden bg-green-light text-primary font-medium text-center py-3 transition-all duration-300 ${
          showBar ? "max-h-12 py-2 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <p className="text-sm pr-5 lg:pr-0 lg:ml-70">
          {"We’ve just launched new features to help you work smarter! "}
          <span className="underline cursor-pointer"><a href="#feature-1">Check them out now!</a></span>
        </p>
        <div
          onClick={() => {
            setShowBar(false);
            setDismissed(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    )
  );
};

export default Notification;
