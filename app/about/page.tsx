import Image from "next/image";
import about from "@/assets/about.avif";
import Journey from "@/components/about/Journey";
import Meet from "@/components/about/Meet";

const page = () => {
  return (
    <main className="w-[95%] mx-auto">
      <div className="w-[95%] mx-auto rounded-3xl text-center lg:pt-12 bg-primary shadow-2xl py-10 px-2">
        <p className="text-xs text-green-light bg-secondary w-max mx-auto py-1 px-2 rounded-full font-bold tracking-widest">
          ABOUT US
        </p>
        <p className="text-3xl text-white px-2 lg:text-5xl font-medium sm:font-bold my-2 ">
          About Our Company
        </p>
        <p className="w-[90%] sm:w-[82%] lg:w-[55%] mx-auto text-white/70 lg:text-lg font-medium">
          A team of passionate innovators and tech enthusiasts dedicated to
          transforming how businesses manage their customer relationships.
        </p>
      </div>
      <section>
        <p className="text-lg lg:text-xl my-10 lg:my-15 font-medium text-secondary/80 px-2 sm:w-[80%] lg:w-[46%] lg:ml-10">
          {
            "Founded with a simple goal—to make CRM smarter, faster, and more intuitive—we’ve built a platform that leverages the power of AI to automate everyday tasks, provide actionable insights, and help companies grow."
          }
        </p>

        <div className="border-10 lg:border-30 border-primary bg-primary rounded-4xl my-10 shadow-gray-500 shadow-[0_40px_80px_-12px_rgba(0,0,0,0.25)]">
          <Image src={about} alt="About Us" className="w-full" unoptimized />
        </div>

        <p className="text-lg lg:text-xl my-10 lg:my-15 font-medium text-secondary/80 px-2 sm:w-[80%] lg:w-[47%] sm:ml-auto lg:mr-15">
          {
            "We believe in making complex tools easy to use, and we’re on a mission to give businesses of all sizes access to cutting-edge technology that helps them work smarter, not harder."
          }
        </p>
      </section>

      {/* Innovation section */}

      <section className="lg:w-[95%] lg:mx-auto my-10 flex flex-col lg:flex-row gap-10">
        {/* innovation */}
        <div className="lg:w-[30%]">
          <div className="p-2 border border-secondary/30 w-max rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
          </div>
          <p className="font-bold text-primary mt-2 mb-4">Innovation</p>
          <p className="text-sm text-secondary/80 font-medium px-1">
            {
              "Continuously improving and evolving to offer the latest and most effective tools for businesses. We believe that innovation isn’t just about what’s new — it's about making sure our users get the best and most effective solutions to their challenges."
            }
          </p>
        </div>

        {/* Simplicity */}
        <div className="lg:w-[30%]">
          <div className="p-2 border border-secondary/30 w-max rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
              />
            </svg>
          </div>
          <p className="font-bold text-primary mt-2 mb-4">Simplicity</p>
          <p className="text-sm text-secondary/80 font-medium px-1">
            We eliminate the friction that comes with adopting new technologies.
            Our goal is to strip away unnecessary complexity so our users can
            focus on what really matters: growing their business and connecting
            with customers.
          </p>
        </div>

        {/* Customer-Centricity */}
        <div className="lg:w-[30%]">
          <div className="p-2 border border-secondary/30 w-max rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
          </div>
          <p className="font-bold text-primary mt-2 mb-4">
            Customer-Centricity
          </p>
          <p className="text-sm text-secondary/80 font-medium px-1">
            Always putting our customers first and providing tools that help
            them succeed.. We succeed when our customers succeed, and that’s why
            we listen carefully to their needs. We prioritize building features
            and offering support that genuinely help.
          </p>
        </div>
      </section>

      {/* Our journey */}

      <Journey />
      <Meet />
    </main>
  );
};

export default page;
