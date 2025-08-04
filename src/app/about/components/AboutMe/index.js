import React from "react";
import "./styles.scss";
import Image from "next/image";
import portfolioImag from "@/assets/images/home/portrait-hero.png";
// import portfolioImag from "@/assets/images/home/portrait-hero.webp";
import SiteData from "@/shared/constants/siteData";

const Index = () => {
  return (
    <div className="about-me-section section-px">
      <div className="about-me-wrapper container">
        <div className="about-grid">
          <div className="img-section">
            <Image src={portfolioImag} height={100} width={100} alt="" />
          </div>
          <div className="description-section">
            <h1>
              <span>{`I'm`}</span> {SiteData.name}
            </h1>
            <h3>{SiteData?.profession} </h3>
            <p>
              {
                SiteData?.description
              }
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Index;
