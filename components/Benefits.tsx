import ScrollBenefit from "./utils/ScrollBenefit";
import WhyLove from "./utils/WhyLove";

const Benefits = () => {
  return (
    <section
      className="w-[95%] mx-auto my-25 rounded-4xl relative overflow-hidden py-12 px-3 text-white"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    >
      <div className="text-center ">
        <p className="text-xs text-green-light bg-secondary w-max mx-auto py-1 px-2 rounded-full font-bold tracking-widest">
          BENEFITS
        </p>
        <p className="text-3xl px-2 w-full lg:text-5xl font-bold my-2 tracking-tightest">
          {"Why You'll Love Our AI-Powered Platform!"}
        </p>
        <p className="w-[85%] sm:w-[75%] lg:w-[52%] mx-auto text-white/70 lg:text-lg font-medium">
          Say goodbye to manual tasks and hello to efficiency, personalization,
          and smarter decision-making with our AI-powered platform.
        </p>
      </div>

      {/* Why You'll Love Our AI-Powered Platform! */}

      <section>
        <WhyLove />
        <ScrollBenefit />
      </section>
    </section>
  );
};

export default Benefits;
