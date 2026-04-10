import Image from "next/image";
import stepOne from "@/assets/stepOne.webp";
import { motion } from "motion/react";

const StepOne = () => {
  const text = "Input Your Data";
  const letters = Array.from(text);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // This creates the "letter by letter" timing
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
        duration: 0.5,
      },
    },
  };
  return (
    <section className="mt-3 mb-5 px-2 pt-2 pb-8 flex flex-col lg:flex-row lg:items-center gap-5 rounded-b-3xl bg-primary border-b border-b-secondary/40">
      <div className="p-4 bg-[hsl(0,0%,15%)] rounded-3xl lg:w-[50%]">
        <Image
          src={stepOne}
          alt="Step One"
          className="w-full h-auto rounded-3xl"
          unoptimized
        />
      </div>
      <div className="p-1 lg:w-[50%]">
        <p className="text-green-light bg-[hsl(0,0%,15%)] text-xs w-max py-1 px-3 rounded-full font-bold">
          001. DATA INTEGRATION
        </p>
        <motion.p
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-[hsl(168,100%,98%)] my-3 font-bold lg:text-xl"
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block" // Required for transform-based animations
            >
              {/* Handle spaces so they don't disappear */}
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.p>
        <p className="text-[hsl(168,100%,98%)]/50 font-medium lg:w-[78%] sm:text-sm">
          Upload your marketing data or connect your existing tools like CRM,
          social media, and email platforms. Our AI automatically syncs and
          organizes everything for seamless analysis.
        </p>
      </div>
    </section>
  );
};

export default StepOne;
