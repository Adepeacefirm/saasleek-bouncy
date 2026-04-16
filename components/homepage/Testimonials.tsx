"use client";

import test1 from "@/assets/test1.avif";
import test2 from "@/assets/test2.avif";
import test3 from "@/assets/test3.avif";
import test4 from "@/assets/test4.avif";
import test5 from "@/assets/test5.avif";
import read1 from "@/assets/read1.avif";
import read2 from "@/assets/read2.avif";
import read3 from "@/assets/read3.avif";
import read4 from "@/assets/read4.avif";
import read5 from "@/assets/read5.avif";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Testimonials = () => {
  const router = useRouter();
  const testimonials = [
    {
      name: "Finnian Graves",
      image: test1,
      speciality: "Digital Marketing Strategist",
      review:
        "Saasleek has revolutionized the way I handle campaigns. The AI-driven insights are spot on, and the automation has saved me hours every week. I can't imagine going back to the old way of doing things!",
    },
    {
      name: "Orion Vance",
      image: test2,
      speciality: "E-commerce Business Owner",
      review:
        "Before Saasleek, managing multiple platforms felt chaotic. Now, everything is in one place, and I can see how my business is performing at a glance. It's been a game changer for my company.",
    },
    {
      name: "Silas Leighton",
      image: test3,
      speciality: "Financial Consultant",
      review:
        "The predictive analytics feature is amazing! I haveve been able to make smarter, data-driven decisions for my clients, and they have noticed the difference. Saasleek has definitely helped me stand out in my field.",
    },
    {
      name: "Callum Yates",
      image: test4,
      speciality: "Social Media Manager",
      review:
        "Saasleek helped me take control of my social media data in ways I never thought possible. The real-time updates and intuitive dashboard allow me to make quick, informed decisions. I recommend it to anyone looking to simplify their workflow.",
    },
    {
      name: "Jasper Lowell",
      image: test5,
      speciality: "Tech Startup Founder",
      review:
        "We used to struggle with data management, but with Saasleek, it's a breeze. From integrating platform to AI analysis, it's like having an extra team member who never sleeps.",
    },
  ];

  return (
    <div
      className="w-[95%] mx-auto my-25 flex flex-col lg:flex-row rounded-4xl relative pt-12 lg:pb-12 px-3 lg:pr-12 text-white shadow-2xl"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    >
      <section className="lg:w-[50%] lg:mt-10 lg:sticky lg:top-30 lg:self-start lg:pb-12">
        <p className="text-xs text-green-light bg-secondary w-max mx-auto lg:mx-0 lg:ml-10 py-1 px-2 rounded-full font-bold tracking-widest">
          TESTIMONIALS
        </p>
        <p className="text-3xl px-2 w-full lg:text-5xl font-bold my-2 tracking-tightest text-center lg:text-start lg:ml-8">
          Real stories from beloved clients
        </p>
        <p className="w-[73%] sm:w-[95%] lg:w-[70%] mx-auto text-white/70 lg:text-lg font-medium text-center lg:text-start lg:ml-10">
          See how businesses just like yours are leveling up with a little help
          from our AI magic!
        </p>
      </section>

      {/* Reviews */}

      <div className="my-10 flex flex-col gap-5 lg:w-[50%]">
        {testimonials.map((item, index) => (
          <section
            key={index}
            className="backdrop-blur-xs bg-white/5 border border-white/10 rounded-3xl pb-10"
          >
            <div className="flex items-center gap-5">
              <div className="pr-4 pb-4 bg-primary rounded-br-2xl">
                <Image
                  src={item.image}
                  alt={`Testimonial ${index + 1}`}
                  className="rounded-2xl w-15"
                />
              </div>
              <div>
                <p className="text-xl text-white">{item.name}</p>
                <p className="text-xs text-white/50 mt-1">{item.speciality}</p>
              </div>
            </div>
            <div className="flex justify-center gap-5 mt-8">
              <p className="text-7xl text-green-text ml-5">{`"`}</p>
              <p className="text-">{item.review}</p>
            </div>
          </section>
        ))}
        <section
          onClick={() => router.push("/reviews")}
          className="bg-green-light hover:bg-primary cursor-pointer border-2 border-green-light rounded-3xl flex justify-between items-center p-2 pr-4 group"
        >
          <div className="flex items-center">
            <Image src={read1} alt="read1" className="w-15 rounded-3xl p-1" />
            <Image
              src={read2}
              alt="read2"
              className="w-15 rounded-3xl p-1 bg-green-light -ml-5 group-hover:bg-primary group-hover:translate-x-5 transition-all duration-300"
            />
            <Image
              src={read3}
              alt="read3"
              className="w-15 rounded-3xl p-1 bg-green-light -ml-5 group-hover:bg-primary group-hover:translate-x-5 transition-all duration-300"
            />
            <Image
              src={read4}
              alt="read4"
              className="w-13 rounded-3xl p-1 bg-green-light -ml-5 hidden lg:block group-hover:bg-primary group-hover:translate-x-5 transition-all duration-300"
            />
            <Image
              src={read5}
              alt="read5"
              className="w-15 rounded-3xl p-1 bg-green-light -ml-5 hidden lg:block group-hover:bg-primary group-hover:translate-x-5 transition-all duration-300"
            />
          </div>
          <div className="text-primary flex gap-3 items-center font-medium group-hover:text-green-light transition-all duration-300">
            <p>Read All Reviews</p>
            <span className="w-4 aspect-square text-xs font-bold rounded-full border bg-transparent flex items-center justify-center">
              {">"}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
