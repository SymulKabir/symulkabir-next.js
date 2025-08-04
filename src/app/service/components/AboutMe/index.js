import React from "react";
import "./styles.scss";
import Image from "next/image";
import portfolioImag from "@/assets/images/home/portrait-hero.webp";


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
              <span>{`I'm`}</span> Symul Kabir
            </h1>
            <h3>Full-Stack Developer & DevOps Enthusiast </h3>
            <p>
              {" "}
              A passionate full stack developer exploring the world of DevOps.
              Enthusiastically learning to bridge development and operations
              while building scalable applications and contributing to
              open-source projects.{" "}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Index;
