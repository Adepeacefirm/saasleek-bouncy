import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="bg-green-text pt-5 w-[95%] mx-auto rounded-4xl py-5">
        <div className="w-[92%] mx-auto">
          <h2 className="text-3xl sm:text-2xl text-center font-bold my-5">Ready to Transform Your Business with SaaSleek?</h2>
          <p className="text-center text-primary font-medium sm:w-[70%] sm:mx-auto">
            Take the next step toward smarter automation, better customer
            management, and data-driven decisions.
          </p>
          <button className="my-7 block mx-auto py-2 px-6 bg-primary text-white font-medium rounded-full">Get started for free</button>
        </div>
      </section>
    </div>
  );
};

export default Footer;
