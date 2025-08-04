import React from "react";
import "./styles.scss";
import SiteData from "@/shared/constants/siteData";
import Image from "next/image";

const Index = ({ classes = "" }) => {
  return (
    <section className={`experiences-section section-px ${classes}`}>
      <div className="skills-inner-wrapper container">
        <div className="section-title">
          <h2>Industry Experience</h2>
          <h3>Driving Efficiency Through Technology.</h3>
        </div>
        <div className="experiences-grid section-my">
          {SiteData?.experience?.map((experienceInfo, index) => {
            let logo = `${experienceInfo.website}/favicon.ico`;
            if (experienceInfo.logo) {
              logo = experienceInfo.logo;
            }
            if (experienceInfo.favicon) {
              logo = `${experienceInfo.website}/${experienceInfo.favicon}`;
            }
            return (
              <div className="card" key={index}>
                <div className="exp-metadata">
                  <div className="position-container">
                    <h6>{experienceInfo.position}</h6>
                  </div>
                  <div className="name-and-location">
                    <div className="name d-flex">
                      <Image src={logo} width={100} height={100} alt="" />
                      <p>{experienceInfo.companyName}</p>
                    </div>
                    <div className="period-and-location">
                      <div className="period d-flex">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z" />
                        </svg>
                        <p className="mt-3">{`${experienceInfo?.period?.from} - ${experienceInfo?.period?.to}`}</p>
                      </div>
                      <div className="location d-flex">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 384 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                        </svg>

                        <p className=" mt-3">{experienceInfo.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="company-website d-flex">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>

                    <a target="__blank" href={experienceInfo.website}>
                      {experienceInfo.website}
                    </a>
                  </div>
                  <div className="works">
                    <ul>
                      {experienceInfo?.works?.map((task, subIndex) => {
                        return (
                          <li key={index + subIndex}>{task.description}</li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Index;
