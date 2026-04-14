"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

const Focus = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only run once
  });

  const text =
    "Focus on what matters while AI handles the rest. Smarter work, faster results, and less stress—it's that simple.";
  const letters = Array.from(text);
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
        duration: 0.5,
      },
    },
  };
  return (
    <section className="w-[93%] mx-auto">
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="sm:w-[85%] lg:w-[80%] text-3xl lg:text-5xl text-primary font-bold"
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
      </motion.h2>

      {/* Numbers */}

      <section className="my-10 flex flex-col lg:flex-row lg:justify-center gap-15">
        <div className="lg:w-[30%]">
          <h2 className="text-5xl lg:text-6xl flex items-center gap-1">
            <span ref={ref}>
              {inView && <CountUp end={700} duration={4} />}
            </span>
            <span className="-mt-2 text-green-600">+</span>
          </h2>
          <p className="font-medium text-lg lg:text-xl mt-1 mb-2 lg:mb-10">
            5 Stars by Satisfied Customers
          </p>
          <p className="font-medium text-sm text-secondary">
            Our users consistently praise the platform for its ease of use and
            effectiveness.
          </p>
        </div>
        <div className="lg:w-[30%]">
          <h2 className="text-5xl lg:text-6xl flex items-center gap-1">
            <span ref={ref}>{inView && <CountUp end={10} duration={4} />}</span>
            <span className="text-4xl lg:text-5xl text-green-600">k+</span>
          </h2>
          <p className="font-medium text-lg lg:text-xl mt-1 mb-2 lg:mb-10">
            Users Worldwide
          </p>
          <p className="font-medium text-sm lg:w-[95%] text-secondary">
            Businesses across the globe rely on our AI-powered platform to drive
            growth and efficiency.
          </p>
        </div>
        <div className="lg:w-[30%]">
          <h2 className="text-5xl lg:text-6xl flex items-center gap-1">
            <span ref={ref}>
              {inView && <CountUp end={150} duration={4} />}
            </span>
            <span className="text-4xl lg:text-5xl text-green-600">k+</span>
          </h2>
          <p className="font-medium text-lg lg:text-xl mt-1 mb-2 lg:mb-10">
            Automated Tasks Completed
          </p>
          <p className="font-medium text-sm lg:w-[97%] text-secondary">
            Experience the power of automation with a platform that handles
            millions of tasks effortlessly.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Focus;
