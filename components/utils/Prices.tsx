import React from "react";

const Prices = ({basicPrice, proPrice, premiumPrice}) => {
  const deliverables = [
    "Data Integration",
    "Real-Time Sync",
    "Centralized Dashboard",
    "Advanced Reporting",
    "Email, Chat & Phone Support",
    "CRM Integration",
    "Social Media Integration",
    "Campaign Automation (Full)",
    "Predictive Analytics",
    "Premium Support",
    "Customizable Workflows",
  ];

  return (
    <section className="flex flex-col lg:grid lg:grid-cols-3 gap-3">
      {/* Basic */}
      <section className="w-[93%] mx-auto p-2 border border-gray-300 rounded-4xl">
        <div className="bg-gray-100/50 rounded-4xl p-5">
          <p className="text-xs text-primary font-bold tracking-widest ml-3">
            BASIC
          </p>
          <p className="w-[99%] mx-auto my-3 flex items-center">
            <span className="text-4xl lg:text-5xl font-bold">${basicPrice}</span>{" "}
            <span>/month</span>
          </p>
          <p className="w-[95%] sm:w-[85%] mx-auto sm:mx-0 text-primary text-sm font-medium">
            For small businesses or startups looking to get started with
            AI-powered insights.
          </p>
        </div>

        <div>
          <div className="my-8 flex flex-col gap-2 p-3">
            {deliverables.map((item, index) => (
              <section key={index}>
                <div className="flex items-center gap-3">
                  {index < 7 ? (
                    <span className="text-green-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span className="text-secondary/50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                  <span
                    className={`${index < 7 ? "text-primary" : "text-secondary/50"} font-medium`}
                  >
                    {item}
                  </span>
                </div>
              </section>
            ))}
          </div>
          <button className="bg-primary text-white w-full py-2 px-4 rounded-full shadow-lg shadow-black/50 mb-3">
            Get started for free
          </button>
        </div>
      </section>

      {/* Pro */}
      <section className="bg-primary w-[93%] mx-auto p-2 border border-gray-300 rounded-4xl">
        <div className="rounded-4xl p-5 bg-secondary/50">
          <div className="flex items-center gap-2 justify-between">
            <p className="text-xs text-green-text font-bold tracking-widest ml-3 py-1 px-2 bg-secondary rounded-full">
              PRO
            </p>
            <p className="text-[10px] text-primary tracking-wider font-bold ml-3 py-1 px-2 bg-green-text rounded-full">
              MOST POPULAR
            </p>
          </div>
          <p className="w-[99%] mx-auto my-3 flex items-center text-white">
            <span className="text-4xl lg:text-5xl font-bold">${proPrice}</span>{" "}
            <span>/month</span>
          </p>
          <p className="w-[95%] sm:w-[85%] mx-auto sm:mx-0 text-white text-sm font-medium">
            For growing businesses needing more integrations and advanced
            features.
          </p>
        </div>

        <div>
          <div className="my-8 flex flex-col gap-2 p-3">
            {deliverables.map((item, index) => (
              <section key={index}>
                <div className="flex items-center gap-3">
                  {index < 9 ? (
                    <span className="text-green-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span className="text-white/50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                  <span
                    className={`${index < 9 ? "text-white" : "text-white/50"} font-medium`}
                  >
                    {item}
                  </span>
                </div>
              </section>
            ))}
          </div>
          <button className="bg-green-light text-primary w-full py-2 px-4 rounded-full shadow-lg shadow-black/50 mb-3">
            Get started for free
          </button>
        </div>
      </section>

      {/* Premium */}
      <section className="w-[93%] mx-auto p-2 border border-gray-300 rounded-4xl">
        <div className="bg-gray-100/50 rounded-4xl p-5">
          <p className="text-xs text-primary font-bold tracking-widest ml-3">
            PREMIUM
          </p>
          <p className="w-[99%] mx-auto my-3 flex items-center">
            <span className="text-4xl lg:text-5xl font-bold">${premiumPrice}</span>{" "}
            <span>/month</span>
          </p>
          <p className="w-[95%] sm:w-[85%] mx-auto sm:mx-0 text-primary text-sm font-medium">
            For established businesses or enterprises that need comprehensive AI
            solutions.
          </p>
        </div>

        <div>
          <div className="my-8 flex flex-col gap-2 p-3">
            {deliverables.map((item, index) => (
              <section key={index}>
                <div className="flex items-center gap-3">
                  <span className="text-green-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span
                    className={`text-primary font-medium`}
                  >
                    {item}
                  </span>
                </div>
              </section>
            ))}
          </div>
          <button className="bg-primary text-white w-full py-2 px-4 rounded-full shadow-lg shadow-black/50 mb-3">
            Get started for free
          </button>
        </div>
      </section>
    </section>
  );
};

export default Prices;
