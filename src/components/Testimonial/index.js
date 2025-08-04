import React from "react";
import "./styles.scss";
import SiteData from "@/shared/constants/siteData";
import Slider from './components/Slider'


const Index = ({classes = ""}) => {
  return (
    <section className={`testimonial-section section-px ${classes}`}>
      <div className="skills-inner-wrapper container">
        <div className="section-title">
          <h2>Testimonial</h2>
          <h3>Satisfied Clients Say</h3>
        </div>
        <Slider testimonial={SiteData?.testimonials} /> 
      </div>
    </section>
  );
};

export default Index;
