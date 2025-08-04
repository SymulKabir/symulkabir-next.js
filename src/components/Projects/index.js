import React from "react";
import "./styles.scss";
import Slider from "./components/Slider"; 
import SiteData from "@/shared/constants/siteData";

const Index = ({classes = ""}) => {
  return (
    <section className={`project-section section-px ${classes}`}>
      <div className="project-inner-wrapper container">
        <div className="section-title">
          <h2>My Projects </h2>
          <h3>Turning Ideas Into Impactful Solutions.</h3>
        </div>
        <Slider projects={SiteData?.projects} /> 
      </div>
    </section>
  );
};

export default Index;
