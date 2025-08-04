"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "./styles.scss";
import { Pagination, Navigation} from "swiper/modules";
import Image from "next/image";

export default function App({ projects }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={40} 
        navigation={true}
        loop={true}   
        modules={[Pagination, Navigation]}
        className="project-grid section-my"
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
            slidesPerView: 2,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((projectInfo, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="project-cart">
                <div className="img-section">
                  <div className="img-bg">
                    <Image src={projectInfo.img} height={100} width={100} alt="" />
                  </div>
                  <div className="img-container">
                    <Image src={projectInfo.img}  height={100} width={100} alt="" />
                  </div>
                </div>
                <div className="des-section">
                  <h2 className="title">{projectInfo.name}</h2>
                  <div className="link d-flex">
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
                    <a href={projectInfo.link} target="__blank">
                      {projectInfo.link}
                    </a>
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
