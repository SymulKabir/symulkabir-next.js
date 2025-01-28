import React from "react";
import PublicLayout from "@/layouts/PublicLayout";
import "./styles.scss";

import HeroSection from '@/app/Home/components/HeroSection'
import Skills from '@/app/Home/components/Skills'
import Experiences from '@/app/Home/components/Experiences'


const Index = () => {
  return (
    <PublicLayout>
      <div className="home-page">
        <HeroSection/>
        <Skills/>
        <Experiences/>
       
      </div>
    </PublicLayout>
  );
};

export default Index;
