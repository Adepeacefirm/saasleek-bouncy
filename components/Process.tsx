"use client";
import { useEffect, useState } from "react";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import { motion } from "motion/react";

const Process = () => {
  const [step, setStep] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev % 3) + 1);
    }, 5000); // changes every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="mt-30 mb-25">
      <div className="text-center ">
        <p className="text-xs text-primary font-bold tracking-widest">
          PROCESS
        </p>
        <p className="text-2xl sm:text-3xl lg:text-5xl font-bold my-2">
          How Saasleek Works
        </p>
        <p className="w-[85%] sm:w-full mx-auto text-secondary lg:text-lg font-medium text-center sm:text-lg">
          Follow these three steps to achieve smarter, data-driven results
          effortlessly.
        </p>
      </div>

      {/* Steps */}

      <div className="bg-primary w-[93%] mx-auto rounded-4xl lg:pb-5 shadow-2xl">
        <section className="bg-primary rounded-2xl p-3 w-[95%] mx-auto">
          <div className="text-white text-xs flex justify-center items-center gap-3">
            <div
              onClick={() => setStep(1)}
              className="relative w-[80%] mx-auto rounded-2xl py-1.5 px-4 text-center overflow-hidden ring-1 ring-inset ring-gray-500/30 bg-[hsl(0,0%,15%)]"
            >
              <div
                className={`absolute left-0 top-0 h-full bg-linear-to-r from-primary to-green-light ${
                  step === 1 ? "transition-all duration-4000 ease-linear" : ""
                }`}
                style={{
                  width: step === 1 ? "100%" : "0%",
                }}
              />

              <p className="relative z-10">STEP 1</p>
            </div>
            <div
              onClick={() => setStep(2)}
              className="relative w-[80%] mx-auto rounded-2xl py-1.5 px-4 text-center overflow-hidden ring-1 ring-inset ring-gray-500/30 bg-[hsl(0,0%,15%)]"
            >
              <div
                className={`absolute left-0 top-0 h-full bg-linear-to-r from-primary to-green-light ${
                  step === 2 ? "transition-all duration-4000 ease-linear" : ""
                }`}
                style={{
                  width: step === 2 ? "100%" : "0%",
                }}
              />

              <p className="relative z-10">STEP 2</p>
            </div>
            <div
              onClick={() => setStep(3)}
              className="relative w-[80%] mx-auto rounded-2xl py-1.5 px-4 text-center overflow-hidden ring-1 ring-inset ring-gray-500/30 bg-[hsl(0,0%,15%)]"
            >
              <div
                className={`absolute left-0 top-0 h-full bg-linear-to-r from-primary to-green-light ${
                  step === 3 ? "transition-all duration-4000 ease-linear" : ""
                }`}
                style={{
                  width: step === 3 ? "100%" : "0%",
                }}
              />

              <p className="relative z-10">STEP 3</p>
            </div>
          </div>

          <div>
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <StepOne />
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <StepTwo />
              </motion.div>
            )}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <StepThree />
              </motion.div>
            )}
          </div>
        </section>

        {/* Learn more */}
        <section className="bg-green-light sm:w-[99.9%] lg:w-[97%] mx-auto rounded-4xl">
          <div className="text-center py-5">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary w-[70%] pt-2 lg:pt-5 mx-auto">
              Learn more about SaaSleek!
            </h2>
            <p className="w-[90%] sm:w-[73%] lg:w-[52%] mx-auto lg:text-lg text-secondary/80 font-medium mt-1 mb-3">
              Manage your entire marketing ecosystem from a single, unified
              platform. No more juggling tools—everything you need is right
              here.
            </p>
          </div>
          <div className="w-full lg:w-[97%] lg:mx-auto lg:pb-5">
            <iframe
              src="https://www.youtube.com/embed/NDUDvSQE2Ys?controls=1&modestbranding=1&rel=0"
              title="YouTube video player"
              className="w-full aspect-video border-0 rounded-3xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Process;
