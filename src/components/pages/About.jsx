

import React, { useEffect } from "react";
import AboutHero from "../about/AboutHero";
import AboutValues from "../about/AboutValues";
import TeamSection from "../about/TeamSection";
import AboutCTA from "../about/AboutCTA";

const About = () => {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <div className="bg-[#0a0a0a]">
      <AboutHero />
      <AboutValues />
      <TeamSection />
      <AboutCTA />
    </div>
    </>
  );
};

export default About;