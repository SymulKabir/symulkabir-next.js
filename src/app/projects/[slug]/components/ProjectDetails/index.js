import React from "react";
import "./styles.scss";
import SiteData from "@/shared/constants/siteData";
import Image from "next/image";
import processDangerouslySetInnerHTML from '@/shared/functions/processDangerouslySetInnerHTML'

const Index = ({ classes = "", slug }) => {
  const project = SiteData.findProject(slug);
  return (
    <section className={`project-details-section section-px ${classes}`}>
      <div className="project-details-wrapper container">
        <div className="image-section">
          <div className="img-wrapper">
            <Image
            src={`/images/project images/${project.img}`}
            height={100}
            width={100}
            alt=""
          />
          </div>
        </div>
        <div className="heading-section section-mx">
          <h1>{project.name}</h1>
        </div>
        <div className="description-section">
          <div
            className="html-view-page"
            dangerouslySetInnerHTML={{
              __html: processDangerouslySetInnerHTML(
                project.description
              ),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
