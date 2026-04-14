import Benefits from "@/components/homepage/Benefits";
import Blogs from "@/components/homepage/Blogs";
import FAQ from "@/components/homepage/FAQ";
import Features from "@/components/homepage/Features";
import Focus from "@/components/homepage/Focus";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/homepage/Hero";
import Level from "@/components/homepage/Level";
import MoreFeatures from "@/components/homepage/MoreFeatures";
import Navbar from "@/components/shared/Navbar";
import Notification from "@/components/homepage/Notification";
import Pricing from "@/components/homepage/Pricing";
import Process from "@/components/homepage/Process";
import Testimonials from "@/components/homepage/Testimonials";

const page = () => {
  return (
    <div className="scroll-smooth">
      <Notification />
      <Navbar />
      <Hero />
      <Features />
      <MoreFeatures />
      <Process />
      <Focus />
      <Benefits />
      <Level />
      <Testimonials />
      <Pricing />
      <Blogs />
      <FAQ />
      <Footer />
    </div>
  );
};

export default page;
