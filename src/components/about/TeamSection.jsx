import React from "react";
import teamData from "../../data/team.json";

const TeamSection = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-sm uppercase">
            فريقنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            تعرف على كتابنا
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.team.map((member) => (
            <div
              key={member.id}
              className="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all"
            >
              <div className="relative inline-block mb-4">
                <img
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
                  src={member.image}
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center text-white text-[10px]">
                  <i className="fa-solid fa-check"></i>
                </div>
              </div>
              <h3 className="font-bold text-white text-lg">{member.name}</h3>
              <p className="text-orange-500 text-sm font-medium mb-4">
                {member.role}
              </p>
              <div className="flex justify-center gap-3">
                {Object.entries(member.social).map(([platform, link]) => (
                  <a
                    key={platform}
                    href={link}
                    className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-all"
                  >
                    <i className={`fa-brands fa-${platform}`}></i>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
