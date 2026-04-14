import Image from "next/image";
import alerts from "@/assets/alerts.avif";
import automated from '@/assets/automated.avif';
import seam1 from "@/assets/seam1.svg";
import seam2 from "@/assets/seam2.svg";
import seam3 from "@/assets/seam3.svg";
import seam4 from "@/assets/seam4.svg";
import seam5 from "@/assets/seam5.svg";
import seam6 from "@/assets/seam6.svg";
import seam7 from "@/assets/seam7.svg";
import seam8 from "@/assets/seam8.svg";
import seam9 from "@/assets/seam9.svg";
import seam10 from "@/assets/seam10.svg";

const MoreFeatures = () => {
  return (
    <section className="w-[90%] mx-auto">
      <div className="text-center ">
        <p className="text-xs text-primary font-bold tracking-widest">
          MORE FEATURES
        </p>
        <p className="text-2xl sm:text-3xl lg:text-5xl font-bold my-2">
          Go Beyond the Basics
        </p>
        <p className="w-[73%] sm:w-[55%] lg:w-[35%] mx-auto text-secondary lg:text-lg font-medium text-center sm:text-lg">
          {
            "We've thought of everything to make sure you have the tools to take your CRM to the next level."
          }
        </p>
      </div>


      <section className="lg:flex lg:justify-center lg:items-center lg:gap-5">
        {/* Smart Alerts */}
        <section className="flex flex-col gap-5 my-10 lg:w-[33%]">
          <div className="border-10 border-primary bg-primary/90 rounded-4xl shadow-2xl">
            <Image
              src={alerts}
              alt="Alerts"
              unoptimized={true}
              className="w-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary">Smart Alerts</h2>
            <p className="my-3 w-[85%] font-medium text-secondary">
              Whether a sudden spike in customer churn or an unexpected shift in
              sales trends, SaaSleek notifies you the moment something needs
              attention.
            </p>
            <div>
              <p className="flex justify-start items-center">
                <span className="text-green-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-secondary">
                  Get instant alerts on critical changes.
                </span>
              </p>
            </div>
            <div className="my-2">
              <p className="flex justify-start items-center">
                <span className="text-green-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-secondary">
                  Act quickly with up-to-date insights.
                </span>
              </p>
            </div>
            <div>
              <p className="flex justify-start items-center">
                <span className="text-green-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-secondary">
                  Set alerts for specific metrics or events.
                </span>
              </p>
            </div>
            <div className="my-2">
              <p className="flex justify-start items-center">
                <span className="text-green-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-secondary">
                  Let AI keep watch over your data 24/7.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Seamless Integrations */}

        <section className="flex flex-col gap-5 my-10 lg:w-[33%]">
          <div className="border-10 border-primary bg-primary/90 rounded-4xl shadow-2xl overflow-hidden whitespace-nowrap flex flex-col gap-5 py-10">
            <div className="flex w-max animate-[scroll-left_7s_linear_infinite]">
              <div className="flex shrink-0 gap-4 pr-4">
                <Image
                  src={seam1}
                  alt="Seam1"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
                <Image
                  src={seam2}
                  alt="Seam2"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
                <Image
                  src={seam3}
                  alt="Seam3"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
                <Image
                  src={seam4}
                  alt="Seam4"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
                <Image
                  src={seam5}
                  alt="Seam5"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
              </div>
              <div className="flex shrink-0 gap-4 pr-4">
                <Image
                  src={seam1}
                  alt="Seam1"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
                <Image
                  src={seam2}
                  alt="Seam2"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
                <Image
                  src={seam3}
                  alt="Seam3"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
                <Image
                  src={seam4}
                  alt="Seam4"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
                <Image
                  src={seam5}
                  alt="Seam5"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
              </div>
            </div>
            <div className="flex w-max animate-[scroll-right_7s_linear_infinite]">
              <div className="flex shrink-0 gap-4 pr-4">
                <Image
                  src={seam6}
                  alt="Seam1"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
                <Image
                  src={seam7}
                  alt="Seam2"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
                <Image
                  src={seam8}
                  alt="Seam3"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
                <Image
                  src={seam9}
                  alt="Seam4"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
                <Image
                  src={seam10}
                  alt="Seam5"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
              </div>
              <div className="flex shrink-0 gap-4 pr-4">
                <Image
                  src={seam6}
                  alt="Seam1"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
                <Image
                  src={seam7}
                  alt="Seam2"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
                <Image
                  src={seam8}
                  alt="Seam3"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
                <Image
                  src={seam9}
                  alt="Seam4"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
                <Image
                  src={seam10}
                  alt="Seam5"
                  className="w-20 bg-primary/50 p-3 rounded-xl"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary">
              Seamless Integrations
            </h2>
            <p className="my-3 w-[85%] font-medium text-secondary">
              Connect Predictly with the tools and platforms you already use,
              including CRMs, eCommerce platforms, and analytics tools.
            </p>
            <div>
              <p className="flex justify-start items-center">
                <span className="text-green-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-secondary">
                  Sync data automatically across all platforms.
                </span>
              </p>
            </div>
            <div className="my-2">
              <p className="flex justify-start items-center">
                <span className="text-green-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-secondary">
                  Automate data transfers and updates.
                </span>
              </p>
            </div>
            <div>
              <p className="flex justify-start items-center">
                <span className="text-green-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-secondary">
                  Access all your key data in one place.
                </span>
              </p>
            </div>
            <div className="my-2">
              <p className="flex justify-start items-center">
                <span className="text-green-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-secondary">
                  Share insights easily between tools.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Automated Reporting */}

        <section className="flex flex-col gap-5 my-10 lg:w-[33%]">
          <div className="border-10 border-primary bg-primary/90 rounded-4xl shadow-2xl">
            <Image
              src={automated}
              alt="Automated"
              unoptimized={true}
              className="w-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary">Automated Reporting</h2>
            <p className="my-3 w-[85%] font-medium text-secondary">
              Generates comprehensive reports that highlight key trends, anomalies, and actionable insights, delivered straight to your inbox.
            </p>
            <div>
              <p className="flex justify-start items-center">
                <span className="text-green-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-secondary">
                  Quickly access insights for faster actions.
                </span>
              </p>
            </div>
            <div className="my-2">
              <p className="flex justify-start items-center">
                <span className="text-green-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-secondary">
                  Tailor reports to fit your business needs.
                </span>
              </p>
            </div>
            <div>
              <p className="flex justify-start items-center">
                <span className="text-green-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-secondary">
                  Get real-time insights with the latest data.
                </span>
              </p>
            </div>
            <div className="my-2">
              <p className="flex justify-start items-center">
                <span className="text-green-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-secondary">
                  Quickly access insights for faster actions.
                </span>
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default MoreFeatures;
