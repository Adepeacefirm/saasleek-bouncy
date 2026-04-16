import story1 from "@/assets/post7.avif";
import story2 from "@/assets/post8.avif";
import story3 from "@/assets/post9.avif";
import Image from "next/image";
import review1 from "@/assets/review1.avif";
import review2 from "@/assets/review2.avif";
import review3 from "@/assets/review3.avif";
import review4 from "@/assets/review4.avif";
import review5 from "@/assets/review5.avif";
import review6 from "@/assets/review6.avif";
import review7 from "@/assets/review7.avif";
import review8 from "@/assets/review8.avif";
import review9 from "@/assets/review9.avif";
import review10 from "@/assets/review10.avif";
import review11 from "@/assets/review11.avif";
import review12 from "@/assets/review12.avif";
import review13 from "@/assets/review13.avif";
import review14 from "@/assets/review14.avif";
import review15 from "@/assets/review15.avif";

const page = () => {
  const stories = [
    {
      tag: "SUCCESS STORIES",
      title:
        "How Zephyr Collective Transformed Their Client Management and Boosted Revenue with Saasleek",
      date: "SEP 7, 2024",
      image: story1,
      readTime: 4,
      isFeatured: false,
    },
    {
      tag: "SUCCESS STORIES",
      title:
        "How GreenLeaf Cut Operational Costs by 22% with Predictly’s AI-Powered Workflow Automation",
      date: "AUG 9, 2024",
      image: story2,
      readTime: 10,
      isFeatured: true,
    },
    {
      tag: "SUCCESS STORIES",
      title:
        "How FlexCom Lowered Customer Churn by 28% with Predictly’s AI-Powered Smart Alerts",
      date: "SEP 1, 2024",
      image: story3,
      readTime: 10,
      isFeatured: false,
    },
  ];

  const testimonials = [
    {
      name: "Finnian Graves",
      image: review1,
      speciality: "Digital Marketing Strategist",
      review:
        "Saasleek has revolutionized the way I handle campaigns. The AI-driven insights are spot on, and the automation has saved me hours every week. I can't imagine going back to the old way of doing things!",
    },
    {
      name: "Ignatius Trent",
      image: review2,
      speciality: "Digital Marketing Strategist",
      review:
        "Before Saasleek, managing multiple platforms felt chaotic. Now, everything is in one place, and I can see how my business is performing at a glance. It's been a game changer for my company.",
    },
    {
      name: "Silas Leighton",
      image: review3,
      speciality: "Financial Consultant",
      review:
        "The predictive analytics feature is amazing! I haveve been able to make smarter, data-driven decisions for my clients, and they have noticed the difference. Saasleek has definitely helped me stand out in my field.",
    },
    {
      name: "Jasper Lowell",
      image: review4,
      speciality: "Tech Startup Founder",
      review:
        "We used to struggle with data management, but with Saasleek, it's a breeze. From integrating platform to AI analysis, it's like having an extra team member who never sleeps.",
    },
    {
      name: "Orion Vance",
      image: review5,
      speciality: "E-commerce Business Owner",
      review:
        "As someone who has to juggle multiple tools daily, I can’t emphasize enough how valuable Saasleek’s unified platform is. Integrating all my tools in one place has been a lifesaver. The dashboard is intuitive and easy to navigate, making it simple to monitor key performance metrics in real-time.",
    },
    {
      name: "Callum Yates",
      image: review6,
      speciality: "Social Media Manager",
      review:
        "Saasleek helped me take control of my social media data in ways I never thought possible. The real-time updates and intuitive dashboard allow me to make quick, informed decisions. I recommend it to anyone looking to simplify their workflow.",
    },
    {
      name: "Orion Vance",
      image: review7,
      speciality: "E-commerce Business Owner",
      review:
        "Before Saasleek, managing multiple platforms felt chaotic. Now, everything is in one place, and I can see how my business is performing at a glance. It's been a game changer for my company.",
    },
    {
      name: "Silas Leighton",
      image: review8,
      speciality: "Financial Consultant",
      review:
        "What I appreciate most about Saasleek is the ease of setting up automation workflows. I no longer have to spend time on repetitive tasks—Saasleek handles them for me, and the AI ensures that everything is optimized for the best results. I’m able to focus more on strategy and less on manual processes. ",
    },
    {
      name: "Finnian Graves",
      image: review9,
      speciality: "Digital Marketing Strategist",
      review:
        "Saasleek has revolutionized the way I handle campaigns. The AI-driven insights are spot on, and the automation has saved me hours every week. I can't imagine going back to the old way of doing things!",
    },
    {
      name: "Callum Yates",
      image: review10,
      speciality: "Social Media Manager",
      review:
        "Saasleek helped me take control of my social media data in ways I never thought possible. The real-time updates and intuitive dashboard allow me to make quick, informed decisions. I recommend it to anyone looking to simplify their workflow.",
    },
    {
      name: "Callum Yates",
      image: review11,
      speciality: "Social Media Manager",
      review:
        "Managing data across multiple tools used to be a nightmare for our team, but Saasleek has streamlined everything into one cohesive system. Now, I can easily sync and organize all my CRM, social media, and email marketing data in just a few clicks. ",
    },
    {
      name: "Jasper Lowell",
      image: review12,
      speciality: "Tech Startup Founder",
      review:
        "Saasleek has taken a huge burden off my shoulders, letting me focus on more critical tasks while knowing that my data is always up-to-date and secure.",
    },
    {
      name: "Silas Leighton",
      image: review13,
      speciality: "Financial Consultant",
      review:
        "The predictive analytics feature is amazing! I’ve been able to make smarter, data-driven decisions for my clients, and they’ve noticed the difference. Saasleek has definitely helped me stand out in my field.",
    },
    {
      name: "Callum Yates",
      image: review14,
      speciality: "Social Media Manager",
      review:
        "The AI-powered insights are a game-changer, helping me pinpoint trends and opportunities that I used to miss. ",
    },
    {
      name: "Jasper Lowell",
      image: review15,
      speciality: "Tech Startup Founder",
      review:
        "The predictive analytics feature has been a standout for me, as it helps forecast client financial outcomes, giving me the insights I need to make informed recommendations. It’s like having a second brain working alongside me!",
    },
  ];

  return (
    <main>
      <div className="w-[95%] mx-auto rounded-3xl text-center lg:pt-12 bg-primary shadow-2xl py-10 px-2">
        <p className="text-xs text-green-light bg-secondary w-max mx-auto py-1 px-2 rounded-full font-bold tracking-widest">
          TESTIMONIALS
        </p>
        <p className="w-[60%] mx-auto text-2xl text-white px-2 lg:text-5xl font-bold sm:font-bold my-2 ">
          Hear from Our Happy Clients
        </p>
        <p className="w-[80%] sm:w-[82%] lg:w-[55%] mx-auto text-white/70 lg:text-lg font-medium">
          {`We’ve had the privilege of partnering with customers across various industries, helping them overcome challenges.`}
        </p>
      </div>
      <section className="my-10">
        <div className="text-center ">
          <p className="text-xs text-primary w-max mx-auto py-1 px-2 rounded-full font-bold tracking-wider">
            CASE STUDIES
          </p>
          <p className="text-2xl w-full lg:w-[60%] mx-auto sm:text-[27px] lg:text-5xl font-bold my-2 ">
            Success Stories
          </p>
          <p className="w-[75%] sm:w-[90%] lg:w-[63%] mx-auto text-secondary/80 lg:text-lg font-medium">
            {"See How We’ve Made a Difference for Businesses Just Like Yours"}
          </p>
        </div>
      </section>

      <section className="w-[92%] mx-auto mt-15 mb-10 flex flex-col sm:grid gap-10 sm:gap-6 lg:grid-cols-3">
        {stories.map((item, index) => (
          <section className="group cursor-pointer" key={index}>
            <div className="bg-primary group rounded-3xl">
              <div className="bg-primary relative rounded-3xl hover:rounded-4xl shadow-2xl group-hover:scale-85 transition-all duration-300 delay-100 cursor-pointer">
                <Image
                  src={item.image}
                  unoptimized
                  alt={item.title}
                  className="rounded-3xl bg-primary w-full max-h-64 lg:max-h-72 object-cover"
                />
                <p className="py-1 px-2 bg-secondary/50 text-xs text-white font-medium absolute top-5 left-5 rounded-2xl tracking-widest">
                  {item.tag}
                </p>
              </div>
            </div>
            <div className="my-5 ml-3 flex items-center gap-4 text-[11px]">
              {item.isFeatured && (
                <p className="bg-green-text text-black sm:font-medium py-1 px-2 rounded-full tracking-widest">
                  FEATURED
                </p>
              )}
              <p className="tracking-widest font-bold">{item.date}</p>
            </div>
            <p className="text-primary font-medium w-[95%] mx-auto text-lg my-3 leading-6">
              {item.title}
            </p>
            <hr className=" mt-5 lg:mt-10 mb-5 text-3xl text-gray-300" />
            <p className="flex items-center font-medium gap-3 w-[95%] mx-auto group-hover:text-green-text transition-all duration-300">
              {item.readTime} Min read{" "}
              <span className="w-3 h-3 text-[10px] font-bold rounded-full border bg-transparent flex items-center justify-center group-hover:text-white group-hover:translate-x-2 group-hover:bg-primary transition-all duration-300">
                {">"}
              </span>
            </p>
          </section>
        ))}
      </section>

      <button className="block mx-auto mb-10 py-2 px-6 bg-primary text-green-light rounded-2xl shadow-xl shadow-black/30 cursor-pointer">
        Load More
      </button>

      <div className="w-[85%] lg:w-[95%] mx-auto my-20 flex flex-col gap-5 lg:grid lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <section
            key={index}
            className=" rounded-3xl pb-10"
          >
            <div className="flex items-center gap-5">
              <div className="pr-4 pb-4 bg-white rounded-br-2xl">
                <Image
                  src={item.image}
                  alt={`Testimonial ${index + 1}`}
                  className="rounded-2xl w-15"
                />
              </div>
              <div>
                <p className="text-xl text-primary">{item.name}</p>
                <p className="text-xs text-secondary/70 font-medium mt-1">{item.speciality.toUpperCase()}</p>
              </div>
            </div>
            <div className="flex justify-center gap-5 mt-8">
              <p className="text-7xl text-green-text ml-5">{`"`}</p>
              <p className="text-">{item.review}</p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default page;
