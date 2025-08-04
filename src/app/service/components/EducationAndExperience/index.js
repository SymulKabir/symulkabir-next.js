"use client";
import React, { useState, useEffect } from "react";
import "./styles.scss";

const experices = [
  {
    title: "Web Designer",
    subTitle: "Graphic Dev",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.",
    period: {
      from: "2016",
      to: "2018",
    },
  },
  {
    title: "Web Designer",
    subTitle: "Graphic Dev",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.",
    period: {
      from: "2016",
      to: "2018",
    },
  },
  {
    title: "Web Designer",
    subTitle: "Graphic Dev",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.",
    period: {
      from: "2016",
      to: "2018",
    },
  },
];
const educationList = [
  {
    title: "Bachelor of Business Administration",
    subTitle: "University of California, Berkeley",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.",
    period: {
      from: "2016",
      to: "2018",
    },
  },

  {
    title: "Bachelor of Business Administration",
    subTitle: "University of California, Berkeley",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.",
    period: {
      from: "2016",
      to: "2018",
    },
  },

  {
    title: "Bachelor of Business Administration",
    subTitle: "University of California, Berkeley",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.",
    period: {
      from: "2016",
      to: "2018",
    },
  },

  {
    title: "Bachelor of Business Administration",
    subTitle: "University of California, Berkeley",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.",
    period: {
      from: "2016",
      to: "2018",
    },
  },
];
const Index = () => {
  const [currentList, setCurrentList] = useState([]);
  const [currentTab, setCurrenttab] = useState("Education");

  useEffect(() => {
    if (currentTab === "Education") {
      setCurrentList([...educationList]);
    } else if (currentTab === "Experience") {
      setCurrentList([...experices]);
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
              return (
                <div key={index} className="canvas-cart">
                  <div className="date-container">
                    <p className="d-flex">{`${item.period?.from} - ${item.period.to}`}</p>
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
