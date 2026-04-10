import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Focus from "@/components/Focus";
import Hero from "@/components/Hero";
import Level from "@/components/Level";
import MoreFeatures from "@/components/MoreFeatures";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <MoreFeatures />
      <Process />
      <Focus />
      <Benefits />
      <Level />
    </div>
  );
};

export default page;
