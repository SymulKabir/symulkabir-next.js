"use client";
import React, { useState, useEffect } from "react";
import "./styles.scss";
import SiteData from "@/shared/constants/siteData";

 
const convertExperienceToExpiries = (experience) => {
  return experience.map((item) => {
    const fromYear = item.period.from.split("/")[1]; // Extract year from "MM/YYYY"
    const toValue = item.period.to.toLowerCase() === "present" ? "Present" : item.period.to.split("/")[1];
    
    const collectedDesc = item.works
      .map(w => w.description)
      .slice(0, 2) // Take first two descriptions
      .join(" ");

    return {
      title: item.position,
      subTitle: item.companyName,
      des: collectedDesc,
      fullPeriod: item.period,
      period: {
        from: fromYear,
        to: toValue,
      },
    };
  });
};


 


const Index = () => {
  const [currentList, setCurrentList] = useState([]);
  const [currentTab, setCurrenttab] = useState("Education");

  useEffect(() => {
    if (currentTab === "Education") {
      setCurrentList([...SiteData?.educations]);
    } else if (currentTab === "Experience") {
      const expiries = convertExperienceToExpiries(SiteData?.experience)
      setCurrentList([...expiries]);
    }
  }, [currentTab]);
  const checkActive = (name = "") => {
    return name === currentTab ? "active" : "";
  };

  return (
    <div className="education-and-experience-section section-px">
      <div className="education-and-experience-wrapper container">
        <div className="button-section d-flex">
          <button className={checkActive("Education")} onClick={() => setCurrenttab("Education")}> Education</button>
          <button className={checkActive("Experience")} onClick={() => setCurrenttab("Experience")}>Experience</button>
        </div>
        <div className="canvas-container section-py">
          {!!currentList.length &&
            currentList.map((item, index) => {
              const tooltipPerioad = item?.fullPeriod || item?.period
              const periodToltip = `${tooltipPerioad?.from} - ${tooltipPerioad?.to}`
              return (
                <div key={index} className="canvas-cart">
                  <div className="date-container">
                    <p className="d-flex" title={periodToltip}>{`${item.period?.from} - ${item.period.to}`}</p>
                  </div>
                  <div className="info-section">
                    <h3>{item.title}</h3>
                    <h6>{item.subTitle}</h6>
                    <p>{item.des}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Index;
