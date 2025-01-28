import React from "react";
import "./styles.scss";

const experience = [
  {
    companyName: "Micple Company Ltd",
    website: "https://micple.com",
    position: "Full Stack Developer & Technology Department Head",
    location: "Moddopara, Khilkhet, Dhaka",
    period: {
      from: "07/2023",
      to: "Present",
    },
    works: [
      {
        description: `Lead the development of web applications, managing both frontend and backend aspects
using modern frameworks and technologies (React.js, Mircro Frontend, Express.js
Socket.io, MongoDB`,
      },
      {
        description: `Built and maintain the in-house production server, overseeing server configuration,
deployment pipelines, and server health monitoring to ensure high availability and security`,
      },
      {
        description: `Set up and manage production servers, handling performance optimizations, monitoring,
and troubleshooting`,
      },
      {
        description: `Oversee deployment pipelines, ensuring smooth transitions of applications from
development to production environments using cloud infrastructure and shell script`,
      },
      {
        description: `Mentor and guide junior developers, fostering a collaborative team environment and
enhancing the skills of team members`,
      },
    ],
  },
];

const Index = () => {
  return (
    <section className="experiences-section section-px">
      <div className="skills-inner-wrapper container">
        <div className="section-title">
          <h2>Industry Experience</h2>
          <h3>Driving Efficiency Through Technology.</h3>
        </div>
        <div className="experiences-grid section-my">
          {experience.map((experienceInfo, index) => {
            return (
              <div className="card" key={index}>
                <div className="exp-metadata">
                  <div className="position-container">
                    <h6>{experienceInfo.position}</h6>
                  </div>
                  <div className="name-and-location">
                    <div className="name">
                      <p>{experienceInfo.companyName}</p>
                    </div>
                    <div className="period-and-location">
                      <div className="period">
                        <p>{`${experienceInfo?.period?.from} - ${experienceInfo?.period?.to}`}</p>
                      </div>
                      <div className="location">
                        <p>{experienceInfo.location}</p>
                      </div>
                    </div>
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
