import React from "react";
import "./styles.scss";
import CopyButton from "../CopyButton/index";
import SiteData from "@/shared/constants/siteData";
const contacts = [
  {
    name: "Phone",
    proferty: "contacts.phone"
  },
  {
    name: "Mail",
    proferty: "contacts.mail"
  },
  {
    name: "Website",
    proferty: "domain"
  },
  {
    name: "Address",
    proferty: "contacts.address"

  },
];

const getNestedValue = (obj, path) => {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
};


const Index = () => {
  return (
    <div className="contact-into-section section-px">
      <div className="contact-into-wrapper container">
        <div className="map-section">
          <iframe
            src={SiteData?.contacts?.googleMapIframe}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="location-section">
          <div className="location">
            <div className="location-grid">
              {contacts?.map((item, index) => {
                const element = getNestedValue(SiteData, item?.proferty); 
                return (
                  <div key={index} className="cart">
                    <h6>{item.name} :</h6>
                    <p>{element}</p>
                    <CopyButton text={element} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="message">
            <div className="section-title">
              <h2>Get In Touch </h2>
              <h3>Let’s build something impactful together</h3>
            </div>
            <div className="des">
              <p>
               Whether you’re looking to develop a powerful web application, scale your infrastructure with DevOps practices, or explore AI-driven solutions, I’m here to help. I collaborate with startups and businesses to transform ideas into scalable, high-performance systems. Let’s connect and bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
