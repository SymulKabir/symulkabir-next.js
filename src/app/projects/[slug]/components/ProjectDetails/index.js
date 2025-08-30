import React from "react";
import "./styles.scss";
import SiteData from "@/shared/constants/siteData";
import processDangerouslySetInnerHTML from "@/shared/functions/processDangerouslySetInnerHTML";
import Link from "next/link";
import ViewFullscreen from "@/components/ViewFullscreen";

const Index = ({ classes = "", slug }) => {
  const project = SiteData.findProject(slug);

  return (
    <section className={`project-details-section section-px ${classes}`}>
      <div className="project-details-wrapper container">
        <div className="image-section">
          <div className="img-wrapper">
            {/* <Image
              src={`/images/project images/thumbnails/${project.thumbnails}`}
              height={100}
              width={100}
              alt=""
            /> */}
            <ViewFullscreen img={project.img} thumbnails={project.thumbnails} />
          </div>
        </div>
        <div className="heading-section section-mx">
          <div className="section-title">
            {project.link && (
              <h2>
                <Link
                  href={project.link}
                  style={{ textTransform: "lowercase" }}
                >
                  {project.link}
                </Link>
              </h2>
            )}
            <h3>{project.name}</h3>
          </div>
        </div>
        <div className="description-section">
          <div
            className="html-view-page"
            dangerouslySetInnerHTML={{
              __html: processDangerouslySetInnerHTML(project.description),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
