"use client";

import man_with_laptop from "@/assets/laptop-man.avif";
import chart_business from "@/assets/chart-business.avif";
import chart_marketing from "@/assets/chart-marketing.avif";
import chart_team from "@/assets/chart-team.avif";
import Image from "next/image";
import choose1 from "@/assets/choose1.svg";
import choose2 from "@/assets/choose2.svg";
import choose3 from "@/assets/choose3.svg";
import choose4 from "@/assets/choose4.svg";
import choose5 from "@/assets/choose5.svg";
import choose6 from "@/assets/choose6.svg";
import choose7 from "@/assets/choose7.svg";
import choose8 from "@/assets/choose8.svg";
import choose9 from "@/assets/choose9.svg";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const chooses = [
    choose1,
    choose2,
    choose3,
    choose4,
    choose5,
    choose6,
    choose7,
    choose8,
    choose9,
  ];

  const ref = useRef(null);

  // track scroll progress of page
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
  }, []);

  const scrollY = useRef(0);

  const scaleSpring = useSpring(1.3, {
    stiffness: 120,
    damping: 30,
  });

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      // map scroll to scale range
      const maxScroll = 600; // adjust sensitivity here

      let progress = y / maxScroll;
      progress = Math.min(Math.max(progress, 0), 1);

      const scaleValue = 1.3 - progress * 0.3; // 1.3 → 1.0

      scaleSpring.set(scaleValue);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scaleSpring]);

  return (
    <main className="w-[92%] mx-auto mb-8 mt-15">
      <section className="flex justify-center items-center gap-1.5 bg-[hsl(0,0%,95%)] w-max mx-auto p-1 rounded-full border border-[hsl(0,0%,75%)]">
        <div className="bg-black text-white text-[10px] p-1 rounded-full font-bold">
          <p>NEW</p>
        </div>
        <div>
          <p className="flex justify-center items-center text-xs gap-2 font-medium">
            View the V02.0 now on Github{" "}
            <span>
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </p>
        </div>
      </section>

      <section>
        <h1 className="text-3xl lg:text-7xl font-medium text-center my-4 lg:w-[94%] lg:mx-auto text-primary">
          Say Goodbye to Guesswork. Let AI Optimize Your Marketing.
        </h1>
        <p className="w-[95%] sm:w-[65%] lg:w-[40%] mx-auto text-center font-medium text-lg text-secondary">
          Effortlessly create, manage, and optimize campaigns that resonate with
          your audience and drive results.
        </p>
      </section>

      <section>
        <button className="text-white bg-primary py-3 px-7 rounded-full text-sm font-medium block mx-auto my-7 shadow-gray-300 shadow-xl hover:text-green-light cursor-pointer">
          Get Started for free
        </button>

        <div className="flex items-center justify-center gap-2">
          <section className="flex justify-center items-center text-green-text">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="size-4"
                viewBox="0 0 16 16"
              >
                <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
              </svg>
            </div>
          </section>
          <div>
            <p className="text-secondary/70 text-sm font-medium">
              Over 500+ Five Star Reviews
            </p>
          </div>
        </div>
      </section>

      {/* When performance matters */}

      <section className="relative border-10 lg:border-30 border-primary bg-primary rounded-4xl my-20 shadow-gray-500 shadow-[0_40px_80px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
        <motion.div
          style={{ scale: scaleSpring }}
          className="will-change-transform"
        >
          <Image
            src={man_with_laptop}
            alt="Man with laptop"
            className="w-full h-auto rounded-4xl"
            unoptimized={true}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute top-2 left-2 lg:top-4 lg:left-8 w-full"
        >
          <Image
            src={chart_business}
            alt="Chart business"
            className="w-[32%]"
            unoptimized={true}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute bottom-2 left-2 w-full lg:bottom-4 lg:left-8"
        >
          <Image
            src={chart_marketing}
            alt="Chart marketing"
            className=" w-[26%] h-16 sm:h-auto lg:max-h-60"
            unoptimized={true}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={chart_team}
            alt="Chart team"
            className="w-[25%] absolute bottom-3 right-3 lg:right-4 lg:bottom-4"
            unoptimized={true}
          />
        </motion.div>
      </section>

      <section className="my-32">
        <h1 className="text-center font-bold text-3xl lg:text-5xl text-primary">
          When <span className="text-green-text">performance</span> matters,{" "}
          <span className="sm:block">
            they <span className="block sm:inline">choose Saasleek!</span>
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 lg:gap-10 justify-center items-center px-8 my-10 lg:w-[50%] lg:mx-auto">
          {chooses.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt={`Choose ${index + 1}`}
              className="mx-auto w-13"
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Hero;
