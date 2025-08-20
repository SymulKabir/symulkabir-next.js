import React from "react";
import "./styles.scss";
import ProjectCart from "@/components/ProjectCart";
import SiteData from "@/shared/constants/siteData";

const Index = ({ classes = "" }) => {
  return (
    <section className={`project-page-section section-px ${classes}`}>
      <div className="project-page-wrapper container">
        <div className="section-title">
          <h2>My Projects </h2>
          <h3>Turning Ideas Into Impactful Solutions.</h3>
        </div>
        <div className="project-page-grid">
          {!!SiteData?.projects?.length &&
            SiteData?.projects.map((projectInfo, index) => {
              return <ProjectCart key={index} projectInfo={projectInfo} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default Index;
