"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slides from "./slides/slides";
import s from "./hero.module.scss";

const slideComponents = [
  Slides.Slide1,
  Slides.Slide2,
  Slides.Slide3,
  Slides.Slide4,
  Slides.Slide5,
];

export default function Hero() {
  return (
    <div className={s.wrapper}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
      >
        {slideComponents.map((Comp, idx) => (
          <SwiperSlide key={`component-${idx}`}>
            <Comp />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
