"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Journey = () => {
  const journey = [
    {
      year: "2021",
      topic: "The Spark of an Idea",
      text: "Every great innovation starts with a simple idea. In 2021, SaaSleek was born from the vision of creating a smarter, AI-powered CRM solution. We identified the need for a platform that could help businesses automate mundane tasks while delivering powerful insights, and we set out on our mission to make that happen.",
    },
    {
      year: "2022",
      topic: "Building the Foundation",
      text: "The next year was all about laying the groundwork. Our team of developers, designers, and AI experts worked tirelessly to create the core of SaaSleek. We focused on building a user-friendly interface and integrating AI into key features, from smart automations to predictive analytics.",
    },
    {
      year: "MID-2022",
      topic: "First Beta Launch",
      text: "By mid-2022, SaaSleek reached an exciting milestone: the beta version was ready! We launched it to a select group of early adopters who helped us gather invaluable feedback. This early version was the start of something bigger, and our users loved the seamless integration and AI-driven insights.",
    },
    {
      year: "EARLY 2023",
      topic: "Public Launch",
      text: "After months of refining based on user feedback, we officially launched SaaSleek to the public in early 2023. The response was overwhelmingly positive, with businesses praising our platform for its intuitive design, powerful automations, and real-time analytics.",
    },
    {
      year: "LATE 2023",
      topic: "Expanding Features",
      text: "By late 2023, SaaSleek was growing fast. We added several new features, including deeper CRM integrations, advanced reporting tools, and customizable workflows. These updates allowed businesses to manage their operations more effectively while gaining better control over customer relationships.",
    },
    {
      year: "2024 - PRESENT",
      topic: "Continuous Innovation",
      text: "As we move through 2024, we’re not slowing down. SaaSleek continues to evolve with frequent updates and new features, including enhanced AI-powered automations, predictive analytics, and personalized customer workflows. We’re also committed to listening to our customers and using their feedback to drive improvements, ensuring SaaSleek remains the best CRM solution on the market.",
    },
  ];

  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleJourney = (index: number) => {
    setOpenIndices(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Remove index (Close)
          : [...prev, index], // Add index (Open)
    );
  };

  return (
    <section className="my-25">
      <div className="text-center ">
        <p className="text-xs text-primary w-max mx-auto py-1 px-2 rounded-full font-bold tracking-wider">
          OUR AWESOME JOURNEY
        </p>
        <p className="text-2xl w-full lg:w-[60%] mx-auto sm:text-[27px] lg:text-5xl font-bold my-2 ">
          The SaaSleek Adventure
        </p>
        <p className="w-[95%] sm:w-[90%] lg:w-[63%] mx-auto text-secondary/80 lg:text-lg font-medium">
          {
            "We’ve come a long way since the days of brainstorming and endless cups of coffee. Each milestone marks a new chapter in our story of building a smarter, better CRM for businesses like yours. Follow along as we keep pushing the limits of what’s possible!"
          }
        </p>
      </div>
      <div className="lg:w-[65%] mx-auto my-10">
        {journey.map((item, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <section
              key={index}
              onClick={() => toggleJourney(index)}
              className="w-[98%] mx-auto my-3 cursor-pointer group bg-primary rounded-3xl py-3"
            >
              <div
                className={`${isOpen ? "bg-white text-green-light rounded-3xl shadow-2xl" : "text-primary bg-primary"} flex justify-between items-center p-3 rounded-3xl mx-2`}
              >
                <p
                  className={`${isOpen ? "text-primary" : "text-white"} font-medium px-2 flex flex-col gap-1`}
                >
                  <span
                    className={`${isOpen ? "text-primary" : "text-green-light"} text-xs`}
                  >
                    {item.year}
                  </span>
                  <span>{item.topic}</span>
                </p>
                <span
                  className={`${isOpen ? "rotate-45 text-primary" : "rotate-0 group-hover:bg-green-light group-hover:text-primary text-green-light"} p-2 rounded-xl transition-all duration-300 ease-in-out text-green-light`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="overflow-hidden"
                  >
                    <p className="my-3 py-2 px-6 sm:px-5 text-sm text-white/70 font-medium">
                      {item.text}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Journey;
