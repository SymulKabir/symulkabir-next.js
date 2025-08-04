"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.scss";
import { Pagination, Navigation } from "swiper/modules";

export default function App({ testimonial }) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="testimonial-grid section-my"
        breakpoints={{
          0: {
            slidesPerView: 1, 

          }, 
          750: {
            slidesPerView: 2, 
          },
        }}
      > 
        {testimonial.map((testimonialInfo, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="quotation-icon">
                  <span>“</span>
                </div>
                <div className="comment-section">
                  <p>{testimonialInfo.comment}</p>
                </div>
                <div className="bio-star-section d-flex">
                  <div className="bio-section">
                    <h2>{testimonialInfo.name}</h2>
                    <p>{`${testimonialInfo.position}, ${testimonialInfo.company}`}</p>
                  </div>
                  <div className="star-section d-flex">
                    {new Array(5).fill("").map((item, subIndex) => {
                      return (
                        <div key={index + subIndex}>
                          <svg
                            className={
                              testimonialInfo.start >= Number(subIndex + 1)
                                ? "fill"
                                : ""
                            }
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 576 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                          </svg>
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
