"use client";

import ScrollReveal from "@/components/about/ScrollReveal";
import { motion } from "motion/react";

const page = () => {
  const text =
    "The future of business automation is here - and you can be first!";

  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01, // This creates the "letter by letter" timing
      },
    },
  };
  const letterVariants = {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      y: 5,
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <ScrollReveal>
      <main className="w-[90%] sm:w-[65%] lg:w-[95%] mx-auto my-10 lg:my-25">
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl lg:text-7xl font-medium text-center "
        >
          {words.map((word, wordIndex) => {
            const isHighlight = word === "first";

            return (
              <span key={wordIndex} className="mr-1">
                {Array.from(word).map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    variants={letterVariants}
                    className={`inline-block ${isHighlight ? "text-green-text" : ""}`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            );
          })}
        </motion.h2>
        <p className="my-5 lg:my-10 text-center lg:text-lg font-medium text-secondary/90 lg:w-[42%] lg:mx-auto">{`Hop on the waitlist and be among the first to get access when we’re live. Trust us—you don’t want to miss this! 🌟`}</p>

        <form className="bg-primary lg:w-[40%] lg:mx-auto flex flex-col gap-2 lg:flex-row items-center p-1 rounded-2xl lg:rounded-full">
          <input
            type="text"
            className="w-full block py-2 px-4 rounded-full bg-white/20 placeholder:text-white/30 placeholder:text-sm"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="block w-full lg:w-[50%] bg-green-light text-primary py-2 px-6 rounded-full font-medium"
          >
            Submit
          </button>
        </form>
      </main>
    </ScrollReveal>
  );
};

export default page;
