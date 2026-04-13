"use client";

import { useState } from "react";
import Prices from "./utils/Prices";

const Pricing = () => {
  const [plan, setPlan] = useState("monthly");
  const [basicPrice, setBasicPrice] = useState(9);
  const [proPrice, setProPrice] = useState(29);
  const [premiumPrice, setPremiumPrice] = useState(79);
  return (
    <section className="my-40">
      <div className="text-center">
        <p className="text-xs text-primary font-bold tracking-widest">
          PRICING PLANS
        </p>
        <p className="w-[80%] mx-auto text-3xl lg:text-5xl font-bold my-2">
          Choose the Perfect Plan for You
        </p>
        <p className="w-[85%] sm:w-[85%] mx-auto text-secondary/80 lg:text-xl font-medium">
          Find the right option and start making the most of our AI-powered
          platform today!
        </p>
      </div>
      <section className="my-10">
        <div className="flex justify-center gap-1 items-center font-bold text-sm border border-gray-400 w-max mx-auto p-1 rounded-3xl cursor-pointer">
          <p
            onClick={() => {
              setPlan("monthly");
              setBasicPrice(9);
              setProPrice(29);
              setPremiumPrice(79);
            }}
            className={`${plan === "monthly" ? "bg-primary text-white" : "bg-white text-primary"} py-2 px-4 rounded-3xl`}
          >
            Monthly
          </p>
          <p
            onClick={() => {setPlan("yearly"); setBasicPrice(99); setProPrice(159); setPremiumPrice(455);}}
            className={`${plan === "yearly" ? "bg-primary text-white" : "bg-white text-primary"} py-2 px-4 rounded-3xl `}
          >
            Yearly
          </p>
        </div>
        <p className="text-center my-3">Save up to 50% by paying yearly</p>
      </section>

      {/* monthly, yearly */}
      <section>
        <Prices
          basicPrice={basicPrice}
          proPrice={proPrice}
          premiumPrice={premiumPrice}
        />
      </section>
    </section>
  );
};

export default Pricing;
