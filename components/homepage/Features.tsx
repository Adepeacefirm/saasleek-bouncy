"use client";

import Image from "next/image";
import unified from "@/assets/unified.webp";
import trend from "@/assets/trend.webp";
import crm from "@/assets/crm.webp";
import { motion } from "motion/react";

const Features = () => {
  const text1 = "Unified Dashboard";
  const text2 = "Seamless Data Sync";
  const text3 = "Real-Time Insights";

  const letters1 = Array.from(text1);
  const letters2 = Array.from(text2);
  const letters3 = Array.from(text3);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // This creates the "letter by letter" timing
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
    <section className="w-[95%] mx-auto mt-50 mb-30">
      <div className="text-center ">
        <p className="text-xs text-primary font-bold tracking-widest">
          FEATURES
        </p>
        <p className="text-2xl lg:text-5xl font-bold my-2">
          All Your Data, One Place
        </p>
        <p className="w-[85%] sm:w-[72%] lg:w-[50%] mx-auto text-secondary lg:text-lg font-medium">
          Manage your entire marketing ecosystem from a single unified platform.
          No more juggling tools - everything you need is right here
        </p>
      </div>

      {/* features */}

      {/* Unified Dashboard */}

      <section id="feature-1" className="flex flex-col-reverse lg:flex-row lg:items-center gap-5 lg:gap-5 my-10 bg-green-bg/50 rounded-2xl py-3 lg:py-7 lg:px-3">
        <div className="px-7 rounded-lg sm:w-[70%] sm:mx-auto">
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-bold text-xl lg:text-3xl text-primary my-2"
          >
            {letters1.map((letter1, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block" // Required for transform-based animations
              >
                {/* Handle spaces so they don't disappear */}
                {letter1 === " " ? "\u00A0" : letter1}
              </motion.span>
            ))}
          </motion.h2>
          <p className="text-sm leading-6 text-secondary font-medium">
            Access all your critical data in one intuitive and easy-to-navigate
            dashboard that provides a comprehensive overview of your business
            performance. The Unified Dashboard consolidates data from various
            sources, allowing you to monitor key metrics and trends in real-time
            without switching between different tools.
          </p>
          <section className="my-5 flex flex-col sm:flex-row sm:flex-wrap gap-2">
            <div className="flex justify-center items-center gap-1 text-xs border-2 border-gray-300 rounded-full w-max py-1 px-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                  />
                </svg>
              </div>
              <p className="tracking-wider">CUSTOMIZABLE VIEWS</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-xs border-2 border-gray-300 rounded-full w-max py-1 px-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </div>
              <p className="tracking-wider">SIMPLIFIED DATA MANAGEMENT</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-xs border-2 border-gray-300 rounded-full w-max py-1 px-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
                  />
                </svg>
              </div>
              <p className="tracking-wider">ENHANCED DECISION-MAKING</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-xs border-2 border-gray-300 rounded-full w-max py-1 px-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                  />
                </svg>
              </div>
              <p className="tracking-wider">USER FRIENDLY INTERFACE</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-xs border-2 border-gray-300 rounded-full w-max py-1 px-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                  />
                </svg>
              </div>
              <p className="tracking-wider">CROSS TEAM COLLABORATION</p>
            </div>
          </section>
        </div>
        <div className="border-10 border-primary bg-primary rounded-4xl w-[90%]  sm:w-[80%] mx-auto">
          <Image
            src={unified}
            alt="Unified"
            className="w-full h-auto rounded-4xl"
            unoptimized={true}
          />
        </div>
      </section>

      {/* Seamless Data Sync */}

      <section className="flex flex-col-reverse lg:flex-row-reverse lg:items-center gap-5 lg:gap-5 my-10 bg-green-bg/50 rounded-2xl py-3 lg:py-7 lg:px-3">
        <div className="px-7 rounded-lg sm:w-[70%] sm:mx-auto">
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-bold text-xl lg:text-3xl text-primary my-2"
          >
            {letters2.map((letter2, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block" // Required for transform-based animations
              >
                {/* Handle spaces so they don't disappear */}
                {letter2 === " " ? "\u00A0" : letter2}
              </motion.span>
            ))}
          </motion.h2>
          <p className="text-sm leading-5 text-secondary font-medium lg:pr-20">
            Automatically sync and organize your data from various sources,
            including CRM systems, social media platforms, email marketing
            tools, and more, all in one secure hub. Our platform ensures that
            your data is always up-to-date and accessible, making it easier to
            manage and analyze.
          </p>
          <section className="my-5 flex flex-col sm:flex-row sm:flex-wrap gap-2">
            <div className="flex justify-center items-center gap-1 text-xs border-2 border-gray-300 rounded-full w-max py-1 px-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <p className="tracking-wider">EFFORTLESS INTEGRATION</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-xs border-2 border-gray-300 rounded-full w-max py-1 px-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <p className="tracking-wider">REAL-TIME UPDATES</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-xs border-2 border-gray-300 rounded-full w-max py-1 px-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </div>
              <p className="tracking-wider">ENHANCED SECURITY</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-xs border-2 border-gray-300 rounded-full w-max py-1 px-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                  />
                </svg>
              </div>
              <p className="tracking-wider">CENTRALIZED CONTROL</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-xs border-2 border-gray-300 rounded-full w-max py-1 px-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                  />
                </svg>
              </div>
              <p className="tracking-wider">IMPROVED COLLABORATION</p>
            </div>
          </section>
        </div>
        <div className="border-10 border-primary bg-primary rounded-4xl w-[90%]  sm:w-[80%] mx-auto">
          <Image
            src={crm}
            alt="CRM"
            className="w-full h-auto rounded-4xl"
            unoptimized={true}
          />
        </div>
      </section>

      {/* Real-Time Insights */}

      <section className="flex flex-col-reverse lg:flex-row lg:items-center gap-5 lg:gap-5 my-10 bg-green-bg/50 rounded-2xl py-3 lg:py-7 lg:px-3">
        <div className="px-7 rounded-lg sm:w-[70%] sm:mx-auto">
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-bold text-xl lg:text-3xl text-primary my-2"
          >
            {letters3.map((letter3, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block" // Required for transform-based animations
              >
                {/* Handle spaces so they don't disappear */}
                {letter3 === " " ? "\u00A0" : letter3}
              </motion.span>
            ))}
          </motion.h2>
          <p className="text-sm leading-5 text-secondary font-medium">
            Gain immediate access to actionable insights with our AI-driven
            analysis. Our advanced algorithms continuously process your data to
            detect trends, patterns, and opportunities as they emerge. This
            real-time analysis ensures that you stay ahead of the competition by
            providing you with the most current information to inform your
            strategies.
          </p>
          <section className="my-5 flex flex-col sm:flex-row sm:flex-wrap gap-2">
            <div className="flex justify-center items-center gap-1 text-xs border-2 border-gray-300 rounded-full w-max py-1 px-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </div>
              <p className="tracking-wider">INSTANT ACCESS</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-xs border-2 border-gray-300 rounded-full w-max py-1 px-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
              </div>
              <p className="tracking-wider">TREND DETECTION</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-xs border-2 border-gray-300 rounded-full w-max py-1 px-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <p className="tracking-wider">OPPORTUNITY IDENTIFICATION</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-xs border-2 border-gray-300 rounded-full w-max py-1 px-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-3"
                >
                  <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                </svg>
              </div>
              <p className="tracking-wider">ENHANCED AGILITY</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-xs border-2 border-gray-300 rounded-full w-max py-1 px-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                  />
                </svg>
              </div>
              <p className="tracking-wider">COMPREHENSIVE ANALYSIS</p>
            </div>
          </section>
        </div>
        <div className="border-10 border-primary bg-primary rounded-4xl w-[90%]  sm:w-[80%] mx-auto">
          <Image
            src={trend}
            alt="Trend"
            className="w-full h-auto rounded-4xl"
            unoptimized={true}
          />
        </div>
      </section>
    </section>
  );
};

export default Features;
