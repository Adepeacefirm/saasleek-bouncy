import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/homepage/FAQ";
import React from "react";

const page = () => {
  return (
    <main>
      <div className="w-[95%] mx-auto rounded-3xl text-center lg:pt-12 bg-primary shadow-2xl py-10 px-2">
        <p className="text-xs text-green-light bg-secondary w-max mx-auto py-1 px-2 rounded-full font-bold tracking-widest">
          CONTACT US
        </p>
        <p className="w-[60%] mx-auto text-2xl text-white px-2 lg:text-5xl font-bold sm:font-bold my-2 ">
          {`Let’s Chat - We Don’t Bite! ;)`}
        </p>
        <p className="w-[80%] sm:w-[60%] lg:w-[40%] mx-auto text-white/70 lg:text-lg font-medium">
          {`Have a question, a suggestion, or just want to share your favorite meme? Whatever it is, we’re all ears. Send us a message, and let’s make things happen! 😄`}
        </p>
      </div>

      <ContactForm />
      <FAQ />
    </main>
  );
};

export default page;
