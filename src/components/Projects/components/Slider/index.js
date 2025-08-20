"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.scss";
import { Pagination, Navigation } from "swiper/modules";
import ProjectCart from "@/components/ProjectCart";

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
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          750: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((projectInfo, index) => {
          return (
            <SwiperSlide key={index}>
              <ProjectCart projectInfo={projectInfo} /> 
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
