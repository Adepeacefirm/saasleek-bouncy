import Image from "next/image";
import meet1 from "@/assets/meet1.avif";
import meet2 from "@/assets/meet2.avif";
import meet3 from "@/assets/meet3.avif";
import meet4 from "@/assets/meet4.avif";

const Meet = () => {
  const teamMembers = [
    {
      name: "Zephyr Callahan",
      role: "Owner, CEO",
      image: meet1,
      twitter: true,
    },
    {
      name: "Thane Vesper",
      role: "Lead UX/UI Designer",
      image: meet2,
      twitter: false,
    },
    {
      name: "Soren Whitlock",
      role: "Director of Data Science",
      image: meet3,
      twitter: true,
    },
    {
      name: "Leander Frost",
      role: "Marketing Strategist",
      image: meet4,
      twitter: true,
    },
  ];
  return (
    <section className="my-25">
      <div className="text-center lg:text-start lg:ml-3">
        <p className="text-xs text-primary w-max mx-auto lg:mx-0 py-1 px-2 rounded-full font-bold tracking-wider">
          TEAM MEMBERS
        </p>
        <p className="w-[80%] mx-auto lg:mx-0 text-3xl lg:w-[60%] sm:text-[27px] lg:text-5xl font-bold my-2 ">
          Meet the Wizards of SaaSleek
        </p>
        <p className="w-[90%] sm:w-[60%] lg:w-[45%] mx-auto lg:mx-0 text-secondary/80 lg:text-lg font-medium">
          No smoke and mirrors here—just a team of talented, dedicated pros
          making magic happen behind the scenes.
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-y-5 mb-10 mt-20">
        {teamMembers.map((member, index) => (
          <section
            key={index}
            className="w-[95%] mx-auto lg:flex lg:gap-5 lg:items-center"
          >
            <div className="bg-primary border-8 rounded-3xl shadow-2xl shadow-black/50">
              <Image
                src={member.image}
                unoptimized
                alt={member.name}
                className="w-full rounded-3xl sm:max-h-72 object-cover"
              />
            </div>
            <div className="my-5 w-[90%] sm:w-[98%] mx-auto">
              <p className="font-bold text-primary text-2xl">{member.name}</p>
              <p className="my-2 text-secondary/80">{member.role}</p>
              <div className="flex items-center gap-2">
                <div className="hover:bg-primary hover:rounded-lg cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-10 p-1 hover:text-green-light hover:scale-50 transition-all duration-500"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                {member.twitter && (
                  <div className="hover:bg-primary hover:rounded-lg cursor-pointer">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={"currentColor"}
                    viewBox={"0 0 24 24"}
                    className="size-10 p-1 hover:text-green-light hover:scale-50 transition-all duration-500"
                  >
                    <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z" />
                  </svg>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
      <button className="bg-primary text-white hover:text-green-light cursor-pointer block mx-auto py-2 px-6 rounded-full shadow-xl shadow-black/30 lg:mt-20">
        Join our team
      </button>
    </section>
  );
};

export default Meet;
