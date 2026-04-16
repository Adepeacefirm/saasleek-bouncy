"use client";

import React, { useState } from "react";
import post1 from "@/assets/post1.avif";
import post2 from "@/assets/post2.avif";
import post3 from "@/assets/post3.avif";
import post4 from "@/assets/post4.avif";
import post5 from "@/assets/post5.avif";
import post6 from "@/assets/post6.avif";
import post7 from "@/assets/post7.avif";
import post8 from "@/assets/post8.avif";
import post9 from "@/assets/post9.avif";
import post10 from "@/assets/post10.avif";
import post11 from "@/assets/post11.avif";
import post12 from "@/assets/post12.avif";
import Image from "next/image";

type Category = "ALL" | "FEATURED" | "NEWS" | "TIPS" | "STORIES";

const Page = () => {
  const categories: Category[] = ["ALL", "FEATURED", "NEWS", "TIPS", "STORIES"];
  const [category, setCategory] = useState<Category>("ALL");

  const articles = [
    {
      tag: "TUTORIALS & TIPS",
      title: "How to Automate Your Marketing with AI: A Step-by-Step Tutorial",
      date: "Sep 6, 2024",
      image: post1,
      readTime: 10,
      isFeatured: true,
    },
    {
      tag: "TUTORIALS & TIPS",
      title: "7 Tips for Boosting Your Business with AI-Powered Marketing",
      date: "Sep 6, 2024",
      image: post2,
      readTime: 15,
      isFeatured: false,
    },
    {
      tag: "NEWS & INSIGHTS",
      title:
        "The Rise of AI in Business: How Artificial Intelligence is Reshaping Industries",
      date: "MAY 30, 2024",
      image: post3,
      readTime: 8,
      isFeatured: false,
    },
    {
      tag: "NEWS & INSIGHTS",
      title:
        "How AI is Revolutionizing Small Businesses: A New Era of Efficiency and Growth",
      date: "SEP 4, 2024",
      image: post4,
      readTime: 9,
      isFeatured: true,
    },
    {
      tag: "TUTORIALS & TIPS",
      title: "How to Get Started with SaaSleek: A Step-by-Step Tutorial",
      date: "SEP 6, 2024",
      image: post5,
      readTime: 12,
      isFeatured: false,
    },
    {
      tag: "NEWS & INSIGHTS",
      title: "Product Update: Introducing Our New AI-Powered Features!",
      date: "MAY 30, 2024",
      image: post6,
      readTime: 8,
      isFeatured: true,
    },
    {
      tag: "SUCCESS STORIES",
      title:
        "How Zephyr Collective Transformed Their Client Management and Boosted Revenue with Saasleek",
      date: "SEP 7, 2024",
      image: post7,
      readTime: 4,
      isFeatured: false,
    },
    {
      tag: "SUCCESS STORIES",
      title:
        "How GreenLeaf Cut Operational Costs by 22% with Predictly’s AI-Powered Workflow Automation",
      date: "AUG 9, 2024",
      image: post8,
      readTime: 10,
      isFeatured: true,
    },
    {
      tag: "SUCCESS STORIES",
      title:
        "How FlexCom Lowered Customer Churn by 28% with Predictly’s AI-Powered Smart Alerts",
      date: "SEP 1, 2024",
      image: post9,
      readTime: 10,
      isFeatured: false,
    },
    {
      tag: "SUCCESS STORIES",
      title:
        "How SkyTech Increased Sales by 32% with Predictly’s AI-Powered Forecasting",
      date: "SEP 4, 2024",
      image: post10,
      readTime: 8,
      isFeatured: true,
    },
    {
      tag: "NEWS & INSIGHTS",
      title:
        "How BrightSpark Boosted Campaign ROI by 45% with Predictly’s AI-Powered Insights",
      date: "SEP 4, 2024",
      image: post11,
      readTime: 9,
      isFeatured: false,
    },
    {
      tag: "TUTORIALS & TIPS",
      title: "10 AI-Powered Marketing Tips to Boost Your Business in 2024",
      date: "SEP 6, 2024",
      image: post12,
      readTime: 8,
      isFeatured: false,
    },
  ];

  const categoryMap: Record<Category, string | string[]> = {
    ALL: [],
    FEATURED: "FEATURED",
    NEWS: ["NEWS & INSIGHTS"],
    TIPS: ["TUTORIALS & TIPS"],
    STORIES: ["SUCCESS STORIES"],
  };

  const filteredArticles = articles.filter((item) => {
    if (category === "ALL") return true;

    if (category === "FEATURED") return item.isFeatured;

    const allowedTags = categoryMap[category];

    return Array.isArray(allowedTags)
      ? allowedTags.includes(item.tag)
      : item.tag === allowedTags;
  });

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

        <div className="text-center mt-20 mb-10">
          <p className="w-[95%] text-primary mx-auto text-3xl lg:text-5xl font-bold my-2">
            Latest Articles
          </p>
          <p className="w-[75%] sm:w-[85%] mx-auto text-secondary/80 lg:text-lg font-medium">
            Expert tips, industry trends, and actionable advice to help you grow
          </p>
        </div>
      </section>

      <div className="flex flex-row justify-center flex-wrap gap-3 w-[85%] mx-auto mb-5">
        {categories.map((item, index) => (
          <button
            className={`${category === item ? "bg-primary text-green-light shadow-xl shadow-black/50" : "bg-gray-50 text-black"} font-medium py-1 px-4 rounded-xl text-[10px] sm:text-xs mx-aut0 sm:mx-0 border border-secondary/30`}
            key={index}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <section className="w-[92%] mx-auto my-15 flex flex-col sm:grid sm:grid-cols-2 gap-10 sm:gap-6 lg:grid-cols-3">
        {filteredArticles.map((item, index) => (
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
    </main>
  );
};

export default Page;
