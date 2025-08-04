import React from "react";
import PublicLayout from "@/layouts/PublicLayout";
import "./styles.scss";

import HeroSection from '@/app/Home/components/HeroSection'
import Skills from '@/components/Skills' 
import Experiences from '@/components/Experiences'
import Projects from '@/components/Projects'
import Testimonial from '@/components/Testimonial'
import Contact from '@/components/Contact'


const Index = () => {
  return (
    <PublicLayout>
      <div className="home-page">
        <HeroSection/>
        <Skills classes="extra-bg" /> 
        <Experiences/>
        <Projects classes="extra-bg" />
        <Testimonial/>
        <Contact classes="extra-bg" />
       
      </div>
    </PublicLayout>
  );
};

export default Index;
