import Benefits from "@/components/Benefits";
import Blogs from "@/components/Blogs";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Focus from "@/components/Focus";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Level from "@/components/Level";
import MoreFeatures from "@/components/MoreFeatures";
import Navbar from "@/components/Navbar";
import Notification from "@/components/Notification";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";

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
