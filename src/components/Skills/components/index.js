"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Frontend from "@/assets/images/home/fronteend.webp";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";
import { Pagination } from "swiper/modules";

export default function App({ skills }) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="skill-grid section-my"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20

          },
          600: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          750: {
            slidesPerView: 2, 
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {skills.map(({ name, skills }, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="cart">
                <div className="inner-cart">
                  <div className="skill-description">
                    <Image src={Frontend} alt="" height="100" width="100" />
                    <h6>{name}</h6>
                  </div>
                  <div className="skills">
                    {!!skills?.length &&
                      skills.map((skill, subIndex) => {
                        return (
                          <div key={index + subIndex} className="skills-item">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 448 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                            </svg>
                            <p>{skill}</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
