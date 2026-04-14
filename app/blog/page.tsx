import React from "react";

const page = () => {
    const categories = [
        "ALL", "FEATURED", "NEWS", "TIPS", "STORIES"
    ]
  return (
    <main>
      <section>
        <div className="w-[95%] mx-auto rounded-3xl text-center lg:pt-12 bg-primary shadow-2xl py-10 px-2">
          <p className="text-xs text-green-light bg-secondary w-max mx-auto py-1 px-2 rounded-full font-bold tracking-widest">
            OUR BLOGS
          </p>
          <p className="w-[60%] mx-auto text-2xl text-white px-2 lg:text-5xl font-medium sm:font-bold my-2 ">
            News, Insights & Articles
          </p>
          <p className="w-[90%] sm:w-[82%] lg:w-[55%] mx-auto text-white/70 lg:text-lg font-medium">
            {
              "Our blog covers a wide range of topics designed to inspire, inform, and guide you in today’s fast-paced world of business, technology, and design."
            }
          </p>
        </div>

        <div className="text-center my-20">
          <p className="w-[95%] text-primary mx-auto text-3xl lg:text-5xl font-bold my-2">
            Latest Articles
          </p>
          <p className="w-[75%] sm:w-[85%] mx-auto text-secondary/80 lg:text-lg font-medium">
            Expert tips, industry trends, and actionable advice to help you grow
          </p>
        </div>
      </section>

    </main>
  );
};

export default page;
