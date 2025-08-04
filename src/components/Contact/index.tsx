"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import "./styles.scss";
import { SuccessTost, FailedTost, WarningTost } from "@/components/Toasts";
import SiteData from "@/shared/constants/siteData";

// Optional prop types
interface ContactProps {
  classes?: string;
}

// Form fields type
interface FormInfo {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// Icons
const MailIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
  </svg>
);

const MessengerIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-messenger" viewBox="0 0 16 16">
    <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
  </svg>
);

const WhatsappIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
  </svg>
);

const Index: React.FC<ContactProps> = ({ classes = "" }) => {
  const [formInfo, setFormInfo] = useState<FormInfo>({});
  const [loadingMail, setLoadingMail] = useState<boolean>(false);

  const handleInputInfo = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormInfo((prev) => {
      const updated = { ...prev, [name]: value };
      return updated;
    });
  };

  const handleFromData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loadingMail) return WarningTost("Please wait, sending your mail...");

    const { name, email, subject, message } = formInfo;
    const isValidEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/)
    if (name && email && subject && message && isValidEmail.test(email)) {
      setLoadingMail(true);
      try {
        const res = await fetch("/api/mail", {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=UTF-8" },
          body: JSON.stringify(formInfo),
        });
        const data = await res.json();
        if (data.success) {
          SuccessTost(data.message);
          setFormInfo({});
        } else {
          FailedTost(data.message || "Failed to send Mail");
        }
      } catch (err) {
        FailedTost("Something went wrong");
        console.error(err);
      } finally {
        setLoadingMail(false);
      }
    }else{
      FailedTost("Please fill all fields correctly");
    }
  };

  const getValue = (field: keyof FormInfo): string => formInfo[field] || "";

  return (
    <section className={`contact-section section-px ${classes}`}>
      <div className="skills-inner-wrapper container">
        <div className="section-title center">
          <h2>Contact</h2>
          <h3>Feel free to reach out</h3>
        </div>
        <div className="contact-section section-my">
          <div className="contact-social">
            <div>
              {MailIcon}
              <h6>Email</h6>
              <p>{SiteData?.contacts?.mail}</p>
              <a href="mailto:saimonpranta@gmail.com" target="_blank" rel="noreferrer">
                Send a message
              </a>
            </div>
            <div>
              {MessengerIcon}
              <h6>Messenger</h6>
              <p>{`facebook.com/${SiteData?.contacts?.facebookUsername}`}</p>
              <a  
              href={`https://m.me/${SiteData?.contacts?.facebookUsername}`}
              target="_blank" rel="noreferrer">
                Send a message
              </a>
            </div>
            <div>
              {WhatsappIcon}
              <h6>WhatsApp</h6>
              <p>{SiteData?.contacts?.whatsapp}</p>
              <a href={`https://wa.me/${SiteData?.contacts?.whatsapp}`} target="_blank" rel="noreferrer">
                Send a message
              </a>
            </div>
          </div>
          <div className="message-form">
            <form onSubmit={handleFromData}>
              <div>
                <label>Your Name</label>
                <input type="text" name="name" value={getValue("name")} onChange={handleInputInfo} required autoComplete="off" />
              </div>
              <div>
                <label>Your Email</label>
                <input type="email" name="email" value={getValue("email")} onChange={handleInputInfo} required autoComplete="off" />
              </div>
              <div>
                <label>Subject</label>
                <input type="text" name="subject" value={getValue("subject")} onChange={handleInputInfo} required autoComplete="off" />
              </div>
              <div>
                <label>Message</label>
                <textarea name="message" value={getValue("message")} onChange={handleInputInfo} rows={4} required autoComplete="off" />
              </div>
              <div>
                <button type="submit" disabled={loadingMail}>
                  {loadingMail ? "Sending..." : "Send Mail"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
