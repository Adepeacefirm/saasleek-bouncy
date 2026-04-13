"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const FAQ = () => {
  const faq = [
    {
      question:
        "What is AI-driven analysis, and how can it benefit my business?",
      answer:
        "AI-driven analysis uses advanced algorithms to process your data in real-time, identifying trends, patterns, and opportunities. This helps you make informed decisions quickly, optimize your strategies, and stay ahead of the competition.",
    },
    {
      question: "How does data integration work?",
      answer:
        "Our platform automatically syncs data from various sources, such as CRM systems, social media platforms, and email marketing tools. This ensures all your data is up-to-date and organized in one secure location, making it easy to manage and analyze.",
    },
    {
      question: "Is my data secure on your platform?",
      answer:
        "Yes, security is a top priority. We use industry-leading encryption and secure data storage methods to protect your information, ensuring that your data is safe from unauthorized access.",
    },
    {
      question: "Can i customize the dashboard to focus on specific metrics?",
      answer:
        "Absolutely! Our platform allows you to tailor the dashboard to display the metrics and data points most relevant to your business, providing you with a personalized view of your performance.",
    },
    {
      question: "How does the platform optimize marketing campaigns?",
      answer:
        "Our AI analyzes your campaign data in real-time, identifying areas for improvement and automatically adjusting settings like audience targeting and budget allocation. This ensures that your campaigns deliver the best possible results.",
    },
    {
      question: "What kind of support is available if I need help?",
      answer:
        "We offer 24/7 customer support via live chat, email, and phone. Additionally, our platform includes a comprehensive help center with tutorials, FAQs, and user guides to assist you.",
    },
    {
      question: "How can predictive analytics help my business?",
      answer:
        "Predictive analytics uses historical data and AI algorithms to forecast future trends and outcomes. This allows you to make proactive decisions, optimize resources, and plan effectively for the future.",
    },
  ];

  const [question1, setQuestion1] = useState(false);

  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
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
          FREQUENTLY ASKED QUESTIONS
        </p>
        <p className="text-3xl px-2 w-[80%] sm:w-full lg:w-[60%] mx-auto sm:text-[27px] lg:text-5xl font-bold my-2 ">
          {"Wondering About Something? Let’s Clear Things Up!"}
        </p>
        <p className="w-[70%] sm:w-[50%] lg:w-[35%] mx-auto text-secondary/80 lg:text-lg font-medium">
          {
            "We’ve gathered all the important info right here. Explore our FAQs and find the answers you need."
          }
        </p>
      </div>
      <div className="w-[90%] sm:w-[95%] lg:w-[65%] mx-auto my-10">
        {faq.map((item, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <section
              key={index}
              onClick={() => toggleFAQ(index)}
              className="w-[98%] mx-auto my-3"
            >
              <div
                className={`${isOpen ? "bg-primary text-green-light rounded-3xl shadow-2xl" : "text-primary bg-white"} flex justify-between items-center p-5`}
              >
                <p className="text-l font-medium px-2">{item.question}</p>
                <span
                  className={`${isOpen ? "rotate-45" : "rotate-0 "} p-2 rounded-xl transition-transform duration-300 ease-in-out`}
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
                    <p className="my-3 py-2 px-2 sm:px-5 text-secondary/80 font-medium">
                      {item.answer}
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

export default FAQ;
