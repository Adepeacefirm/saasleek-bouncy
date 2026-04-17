import Image from "next/image";
import change1 from "@/assets/change1.avif";
import change2 from "@/assets/change2.avif";
import change3 from "@/assets/change3.avif";

const page = () => {
  const features1 = [
    {
      title: "Personalized Customer Journeys",
      content:
        " Leverage AI to create individualized customer experiences based on behavior, preferences, and interaction history. Deliver tailored content and product recommendations automatically.",
    },
    {
      title: "AI-Enhanced Chatbot Integration",
      content:
        "Our chatbot now comes with improved AI capabilities, offering more natural conversations, faster response times, and deeper integration with customer data.",
    },
  ];

  const improvements = [
    {
      title: "Advanced Analytics Dashboard",
      content:
        "Enhanced the AI-powered dashboard with more customizable views and deeper insights into key performance metrics, including revenue forecasts and customer engagement levels.",
    },
    {
      title: "Refined Lead Segmentation",
      content:
        "Improved lead segmentation options allow you to group and target leads more precisely, helping refine marketing efforts and increase conversion rates.",
    },
  ];
  const bug = [
    {
      title: "Fixes for Notification Errors",
      content:
        "Resolved issues where users were not receiving certain push notifications or email alerts for critical updates.",
    },
    {
      title: "Addressed Login Timeout Issue",
      content:
        "Fixed a problem where users were being automatically logged out after a short period of inactivity, ensuring more stable sessions.",
    },
  ];

  const features2 = [
    {
      title: "Advanced Workflow Automation",
      content:
        "Now supporting more complex workflows with conditional triggers. Automate tasks based on specific criteria such as customer actions, sales milestones, or project deadlines.",
    },
    {
      title: "AI-Powered Lead Scoring",
      content:
        "Our new AI-driven lead scoring system ranks prospects based on engagement, activity, and likelihood to convert, helping you focus on high-potential customers.",
    },
  ];

  const improvements2 = [
    {
      title: "Faster Data Processing",
      content:
        "System performance has been enhanced to process large datasets 20% faster, making analytics and reporting more responsive.",
    },
    {
      title: "UI/UX Enhancements",
      content:
        "Improved user interface with cleaner layouts and intuitive navigation for a more seamless experience. Changes include updated menu designs and a more accessible dashboard.",
    },
  ];
  const bug2 = [
    {
      title: "Resolved Email Delivery Delays",
      content:
        "Fixed issues causing delays in automated email campaigns, ensuring timely delivery.",
    },
    {
      title: "Calendar Event Duplication Bug Fixed",
      content:
        "Addressed a bug that was causing duplicated events when syncing with external calendars.",
    },
  ];

  const features3 = [
    {
      title: "AI-Driven Insights Dashboard",
      content:
        "Introducing a smarter way to view your business data with our AI-powered insights dashboard, designed to give you real-time analytics and predictive trends.",
    },
    {
      title: "Automated Task Management",
      content:
        "Streamline your daily workflow with automated task assignment, reminders, and follow-ups—powered by AI to handle repetitive tasks for you.",
    },
    {
      title: "Customizable Smart Alerts",
      content:
        "New smart alerts to keep you informed on important events like new leads, missed deadlines, and KPI updates.",
    },
  ];

  const improvements3 = [
    {
      title: "Faster CRM Search",
      content:
        "We've enhanced the CRM search tool, adding faster and more relevant results with improved filtering options.",
    },
    {
      title: "Optimized Email Campaign AI",
      content:
        "Better AI suggestions for personalized email campaigns—improving open rates and user engagement with data-backed recommendations for optimal content and timing.",
    },
  ];
  const bug3 = [
    {
      title: "Fixed Report Links",
      content:
        "Resolved an issue with broken links in the report section, ensuring full accessibility to your data.",
    },
    {
      title: "Calendar Sync Issue Resolved",
      content:
        "Improved sync functionality for calendars, ensuring that all meeting schedules and tasks are up to date.",
    },
  ];

  return (
    <main className="relative">
      <div className="z-0 hidden lg:block absolute left-13 top-70 bottom-0 w-0.5 bg-gray-300/50"></div>
      <div className="w-[95%] mx-auto rounded-3xl text-center lg:pt-12 bg-primary shadow-2xl py-10 px-2">
        <p className="text-xs text-green-light bg-secondary w-max mx-auto py-1 px-2 rounded-full font-bold tracking-widest">
          CHANGELOG
        </p>
        <p className="w-[60%] mx-auto text-2xl text-white px-2 lg:text-5xl font-bold sm:font-bold my-2 ">
          Our Latest Improvements
        </p>
        <p className="w-[83%] sm:w-[70%] lg:w-[50%] mx-auto text-white/70 lg:text-lg font-medium">
          {`Explore the latest updates, enhancements, and bug fixes in our changelog to see how we're working to improve your experience.`}
        </p>
      </div>

      <section className="my-10 w-[93%] mx-auto">
        {/* Smarter Automation */}
        <section className="flex flex-col lg:flex-row gap-3">
          <div className="relative lg:flex lg:gap-5 lg:w-[50%] lg:sticky lg:top-20 lg:self-start">
            <div className="z-50 hidden lg:block size-5 rounded-full bg-green-light"></div>
            <div>
              <p className="text-lg font-bold text-primary">Version 1.4.0</p>
              <p className="text-primary">Sep 1, 2024</p>
            </div>
          </div>

          {/* text */}

          <div className="">
            <h2 className="text-2xl lg:text-3xl text-primary font-bold">
              Smarter Automation & Personalization Updates
            </h2>
            <div className="border-15 rounded-3xl my-8 shadow-xl shadow-black/40">
              <Image
                src={change1}
                alt="Change 1"
                className="w-full rounded-3xl"
                unoptimized
              />
            </div>
            <div>
              {/* new features */}
              <div>
                <p className="font-bold">New Features</p>
                <section className="flex flex-col gap-2">
                  {features1.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-5">
                        <div className="rounded-full bg-primary mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="size-2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                          </svg>
                        </div>
                        <div className="text-sm">
                          <p className="font-bold">{item.title}</p>
                          <p className="font-medium mt-1">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              </div>

              {/* Improvements */}
              <div className="my-2 lg:my-5">
                <p className="font-bold">Improvements</p>
                <section className="flex flex-col gap-2">
                  {improvements.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-5">
                        <div className="rounded-full bg-primary mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="size-2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                          </svg>
                        </div>
                        <div className="text-sm">
                          <p className="font-bold">{item.title}</p>
                          <p className="font-medium mt-1">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              </div>

              {/* bug fixes */}
              <div>
                <p className="font-bold">Bug Fixes</p>
                <section className="flex flex-col gap-2">
                  {bug.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-5">
                        <div className="rounded-full bg-primary mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="size-2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                          </svg>
                        </div>
                        <div className="text-sm">
                          <p className="font-bold">{item.title}</p>
                          <p className="font-medium mt-1">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Automation & Improved Performance */}
        <section className="flex flex-col lg:flex-row gap-3 my-15">
          <div className="relative lg:flex lg:gap-5 lg:w-[50%] lg:sticky lg:top-30 lg:self-start">
            <div className="z-50 hidden lg:block size-5 rounded-full bg-green-light"></div>
            <div>
              <p className="text-lg font-bold text-primary">Version 1.3.0</p>
              <p className="text-primary">Jul 17, 2024</p>
            </div>
          </div>

          {/* text */}

          <div className="">
            <h2 className="text-2xl text-primary font-bold">
              Enhanced Automation & Improved Performance
            </h2>
            <div className="border-15 rounded-3xl my-8 shadow-xl shadow-black/40">
              <Image
                src={change2}
                alt="Change 2"
                className="w-full rounded-3xl"
                unoptimized
              />
            </div>
            <div>
              {/* new features */}
              <div>
                <p className="font-bold">New Features</p>
                <section className="flex flex-col gap-2">
                  {features2.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-5">
                        <div className="rounded-full bg-primary mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="size-2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                          </svg>
                        </div>
                        <div className="text-sm">
                          <p className="font-bold">{item.title}</p>
                          <p className="font-medium mt-1">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              </div>

              {/* Improvements */}
              <div className="my-2 lg:my-5">
                <p className="font-bold">Improvements</p>
                <section className="flex flex-col gap-2">
                  {improvements2.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-5">
                        <div className="rounded-full bg-primary mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="size-2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                          </svg>
                        </div>
                        <div className="text-sm">
                          <p className="font-bold">{item.title}</p>
                          <p className="font-medium mt-1">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              </div>

              {/* bug fixes */}
              <div>
                <p className="font-bold">Bug Fixes</p>
                <section className="flex flex-col gap-2">
                  {bug2.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-5">
                        <div className="rounded-full bg-primary mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="size-2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                          </svg>
                        </div>
                        <div className="text-sm">
                          <p className="font-bold">{item.title}</p>
                          <p className="font-medium mt-1">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* Smarter Dashboards & Automated Workflows */}
        <section className="flex flex-col lg:flex-row gap-3 my-15">
          <div className="relative lg:flex lg:gap-5 lg:w-[50%] lg:sticky lg:top-30 lg:self-start">
            <div className="z-50 hidden lg:block size-5 rounded-full bg-green-light"></div>
            <div>
              <p className="text-lg font-bold text-primary">Version 1.2.0</p>
              <p className="text-primary">May 7, 2024</p>
            </div>
          </div>

          {/* text */}

          <div className="">
            <h2 className="text-2xl text-primary font-bold">
              Smarter Dashboards & Automated Workflows
            </h2>
            <div className="border-15 rounded-3xl my-8 shadow-xl shadow-black/40">
              <Image
                src={change3}
                alt="Change 2"
                className="w-full rounded-3xl"
                unoptimized
              />
            </div>
            <div>
              {/* new features */}
              <div>
                <p className="font-bold">New Features</p>
                <section className="flex flex-col gap-2">
                  {features3.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-5">
                        <div className="rounded-full bg-primary mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="size-2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                          </svg>
                        </div>
                        <div className="text-sm">
                          <p className="font-bold">{item.title}</p>
                          <p className="font-medium mt-1">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              </div>

              {/* Improvements */}
              <div className="my-2 lg:my-5">
                <p className="font-bold">Improvements</p>
                <section className="flex flex-col gap-2">
                  {improvements3.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-5">
                        <div className="rounded-full bg-primary mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="size-2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                          </svg>
                        </div>
                        <div className="text-sm">
                          <p className="font-bold">{item.title}</p>
                          <p className="font-medium mt-1">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              </div>

              {/* bug fixes */}
              <div>
                <p className="font-bold">Bug Fixes</p>
                <section className="flex flex-col gap-2">
                  {bug3.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-5">
                        <div className="rounded-full bg-primary mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="size-2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                          </svg>
                        </div>
                        <div className="text-sm">
                          <p className="font-bold">{item.title}</p>
                          <p className="font-medium mt-1">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default page;
