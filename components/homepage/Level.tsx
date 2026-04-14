import React from "react";

const Level = () => {
  const traditional = [
    "Manual Data Processing",
    "Guesswork Trend Detection",
    "Slow Campaign Setup",
    "Multiple Tools, Multiple Logins",
    "Reactive Decision-Making",
    "Manual Reporting",
    "Delayed Results",
    "High Error Risk",
  ];

  const saasleek = [
    "Automated Data Sync",
    "Real-Time Trend Insights",
    "Instant AI Optimization",
    "All-in-One Platform",
    "Proactive AI-Driven Strategies",
    "Auto-Generated Reports",
    "Instant Performance Updates",
    "AI Precision",
  ];
  return (
    <section className="lg:my-30">
      <div className="text-center ">
        <p className="text-xs text-primary w-max mx-auto py-1 px-2 rounded-full font-bold tracking-widest">
          LEVEL UP WITH AI!
        </p>
        <p className="text-3xl px-2 w-full lg:text-5xl font-bold my-2 tracking-tightest">
          Old School vs. AI Cool
        </p>
        <p className="w-[85%] sm:w-[75%] lg:w-[52%] mx-auto text-secondary/80 lg:text-lg font-medium">
          Why stick with outdated methods when you can breeze through your work
          with AI? Let us show you how our smart tech leaves the old way in the
          dust.
        </p>
      </div>

      {/* Traditional vs Saasleek */}
      <section className="my-10 lg:w-[60%] lg:mx-auto flex flex-col lg:flex-row gap-15 lg:gap-3 lg:justify-center">
        {/* Traditional */}
        <div className="lg:w-[50%] lg:ml-auto">
          <h2 className="text-center text-2xl font-bold mb-10 lg:mt-12">Traditional</h2>
          <div className="flex flex-col gap-5 lg:gap-8">
            {traditional.map((item, index) => (
              <div
                key={index}
                className="flex items-center w-[88%] mx-auto gap-2"
              >
                <div className="text-[hsl(11,100%,72%)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm-4.34 7.964a.75.75 0 0 1-1.061-1.06 5.236 5.236 0 0 1 3.73-1.538 5.236 5.236 0 0 1 3.695 1.538.75.75 0 1 1-1.061 1.06 3.736 3.736 0 0 0-2.639-1.098 3.736 3.736 0 0 0-2.664 1.098Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-primary">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Saasleek AI */}
        <div className="bg-primary w-[95%] lg:w-[50%] mx-auto rounded-3xl pt-2 pb-8 shadow-2xl">
          <h2 className="text-center text-2xl font-bold my-10 text-white">Saasleek AI</h2>
          <div className="flex flex-col gap-3">
            {saasleek.map((item, index) => (
              <div
                key={index}
                className="flex items-center w-[85%] sm:w-[95%] lg:w-[90%] mx-auto gap-2 bg-secondary p-2 rounded-3xl"
              >
                <div className="text-green-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white">{item}</p>
              </div>
            ))}
            <button className="bg-green-light w-[85%] sm:w-[95%] mx-auto mt-5 py-2 px-4 rounded-full text-primary font-medium">Get Started for Free</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Level;
