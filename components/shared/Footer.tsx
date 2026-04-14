"use client";

import robot from "@/assets/footer-robot.avif";
import Image from "next/image";
import read1 from "@/assets/read1.avif";
import read2 from "@/assets/read2.avif";
import read3 from "@/assets/read3.avif";
import read4 from "@/assets/read4.avif";
import read5 from "@/assets/read5.avif";
import { motion } from "motion/react";

const Footer = () => {
  const nav1 = [
    "Home",
    "About",
    "Blogs",
    "Docs",
    "Reviews",
    "Waitlist",
    "Changelog",
    "Contact",
  ];
  const nav2 = [
    "LinkedIn",
    "Facebook",
    "Twitter",
    "Instagram",
    "Youtube",
    "Github",
    "Discord",
    "Product Hunt",
  ];
  return (
    <div>
      <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-green-text bg-[radial-gradient(circle,rgba(255,255,255,0.15)_2px,transparent_1px)] bg-size-[20px_20px] pt-5 w-[97%] mx-auto rounded-top-4xl py-5 lg:px-10 overflow-hidden">
        <div className="w-[92%] lg:w-[55%] mx-auto lg:mx-0 lg:ml-1">
          <h2 className="text-3xl sm:text-2xl lg:text-5xl text-center lg:text-start font-bold my-5">
            Ready to Transform Your Business with SaaSleek?
          </h2>
          <p className="text-center lg:text-start lg:text-lg text-primary px-1 font-medium sm:w-[70%] lg:w-[90%] sm:mx-auto lg:mx-0 lg:mr-auto">
            Take the next step toward smarter automation, better customer
            management, and data-driven decisions.
          </p>
          <button className="my-7 block mx-auto lg:mx-0 lg:mr-auto py-2 px-6 bg-primary text-white font-medium rounded-full">
            Get started for free
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-[30%]"
        >
          <Image src={robot} alt="Footer Robot" className="w-full" />
        </motion.div>
      </section>

      {/* dark region */}
      <footer className="bg-primary py-15 w-[97%] mx-auto -z-50">
        <section>
          <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-5 lg:justify-between lg:items-center">
            {/* navigations */}
            <div className="text-green-light lg:w-[50%] flex flex-col lg:flex-row lg:items-center gap-15">
              {/* home section */}
              <nav>
                {nav1.map((item, index) => (
                  <section
                    key={index}
                    className="flex items-center justify-start gap-0.3 group cursor-pointer my-3"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4 group-hover:hidden"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4 hidden group-hover:block transition-all duration-300 ease-in-out"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                      {item}
                    </p>
                  </section>
                ))}
              </nav>
              <nav>
                {nav2.map((item, index) => (
                  <section
                    key={index}
                    className="flex items-center justify-start gap-0.3 group cursor-pointer my-3"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4 group-hover:hidden"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4 hidden group-hover:block transition-all duration-300 ease-in-out"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                      {item}
                    </p>
                  </section>
                ))}
              </nav>
            </div>

            {/* subscribe */}
            <div className="lg:w-[50%]">
              <p className="text-white text-lg font-medium">
                Subscribe to the newsletter
              </p>
              <form className="flex flex-col lg:flex-row gap-3 my-5">
                <input
                  className="block w-full bg-secondary/80 rounded-full py-2 px-3 placeholder:text-white/80 placeholder:text-sm"
                  type="text"
                  name="newsletter"
                  id="newsletter"
                  placeholder="jane@framer.com"
                />
                <button
                  className="bg-green-light hover:bg-green-text text-primary hover:text-white cursor-pointer tansition-all duration-300 py-2 px-4 block w-full rounded-full"
                  type="submit"
                >
                  Submit
                </button>
              </form>
              {/* community */}
              <div className="flex flex-col lg:flex-row items-center gap-2">
                <div className="flex self-start items-center">
                  <Image
                    src={read5}
                    alt="read1"
                    className="w-15 rounded-3xl p-1"
                  />
                  <Image
                    src={read4}
                    alt="read2"
                    className="w-13 rounded-3xl p-1 -ml-5 bg-primary"
                  />
                  <Image
                    src={read3}
                    alt="read3"
                    className="w-15 rounded-3xl p-1 -ml-5 bg-primary"
                  />
                  <Image
                    src={read2}
                    alt="read4"
                    className="w-13 rounded-3xl p-1 -ml-5 bg-primary"
                  />
                  <Image
                    src={read1}
                    alt="read5"
                    className="w-13 rounded-3xl p-1 -ml-5 bg-primary"
                  />
                </div>
                <p className="text-white self-start">
                  Join Community of{" "}
                  <span className="text-green-light">7000+</span> Pros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Saasleek */}
        <section>
          <p className="text-center text-green-light text-[16vw] leading-none font-bold mt-20">
            SaaSleek.ai
          </p>
          <hr className="text-white/30 mt-10 b-3 w-[95%] mx-auto" />
          <div className="flex gap-10 w-[90%] mx-auto items-center text-white my-3">
            <p className="cursor-pointer hover:underline hover:text-green-light transition-all duration-300">
              Privacy Policy
            </p>
            <p className="cursor-pointer hover:underline hover:text-green-light transition-all duration-300">Terms</p>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
