import blog1 from "@/assets/blog1.avif";
import blog2 from "@/assets/blog2.avif";
import blog3 from "@/assets/blog3.avif";
import Image from "next/image";

const Blogs = () => {
  const articles = [
    {
      tag: "TUTORIALS & TIPS",
      title: "How to Automate Your Marketing with AI: A Step-by-Step Tutorial",
      date: "Sep 6, 2024",
      image: blog1,
      readTime: 10,
    },
    {
      tag: "NEWS & INSIGHTS",
      title:
        "How AI is Revolutionizing Small Businesses: A New Era of Efficiency and Growth",
      date: "Sep 4, 2024",
      image: blog2,
      readTime: 9,
    },
    {
      tag: "NEWS & INSIGHTS",
      title: "Product Update: Introducing Our New AI-Powered Features!",
      date: "MAY 30, 2024",
      image: blog3,
      readTime: 8,
    },
  ];
  return (
    <section>
      <div className="text-center">
        <p className="text-xs text-primary font-bold tracking-widest">BLOGS</p>
        <p className="w-[95%] mx-auto text-2xl lg:text-5xl font-bold my-2">
          Explore the Latest Insights
        </p>
        <p className="w-[60%] sm:w-[85%] mx-auto text-secondary/80 lg:text-lg font-medium">
          Dive into our blog for tips, trends, and expert advice on making the
          most of Saasleek.
        </p>
      </div>
      <section className="w-[92%] mx-auto my-15 flex flex-col gap-8 lg:grid lg:grid-cols-3">
        {articles.map((item, index) => (
          <section className="group cursor-pointer" key={index}>
            <div className="bg-primary group rounded-3xl">
              <div className="bg-primary relative rounded-3xl hover:rounded-4xl shadow-2xl group-hover:scale-85 transition-all duration-300 delay-100 cursor-pointer">
                <Image
                  src={item.image}
                  unoptimized
                  alt="blog 1"
                  className="rounded-3xl bg-primary w-full max-h-64 sm:max-h-145 lg:max-h-72 object-cover"
                />
                <p className="py-1 px-2 bg-secondary/50 text-xs text-white font-medium absolute top-5 left-5 rounded-2xl tracking-widest">
                  {item.tag}
                </p>
              </div>
            </div>
            <div className="my-5 ml-3 flex items-center gap-4 text-[11px]">
              <p className="bg-green-text text-black sm:font-medium py-1 px-2 rounded-full tracking-widest">
                FEATURED
              </p>
              <p className="tracking-widest font-bold">{item.date}</p>
            </div>
            <p className="text-primary font-medium w-[95%] mx-auto text-lg my-3">
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
      <button className="block mx-auto my-8 lg:mt-20 py-3 px-8 text-white text-sm bg-primary shadow-xl shadow-black/30 rounded-full cursor-pointer hover:text-green-light">
        Read All Blogs
      </button>
    </section>
  );
};

export default Blogs;
