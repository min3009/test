"use client";

import { useState } from "react";
import Image from "next/image";
import { cx } from "@/libs/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import s from "./look-around.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";

interface Category {
  entrance: string;
  hall: string;
  hallway: string;
  bookCafe: string;
  directorOffice: string;
  testingRoom: string;
  healingRoom: string;
  etc: string;
}

const category: Category = {
  entrance: "입구",
  hall: "홀/데스크",
  hallway: "복도",
  bookCafe: "북카페",
  directorOffice: "원장실",
  testingRoom: "검사실",
  healingRoom: "치료실",
  etc: "기타",
};
const checkBoxes = [
  "청결하고 깨끗한 진료환경",
  "정기적인 소독 시스템",
  "편안하고 따뜻한 홀 구성",
  "치료에 최적화된 공간 구성",
];

// !WARNING: 사진의 개수가 변경될때 아래 개수도 맞춰서 변경해야함
const sliderImageQuantities = {
  entrance: 3,
  hall: 3,
  hallway: 2,
  bookCafe: 2,
  directorOffice: 3,
  testingRoom: 5,
  healingRoom: 4,
  etc: 3,
} as const;

export default function LookAround() {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof Category>("hall");

  return (
    <Wrapper>
      <div className={s.category}>
        {Object.entries(category).map(([key, value]) => (
          <button
            key={`category-${key}`}
            onClick={() => setSelectedCategory(key as keyof Category)}
            className={cx(s.button, selectedCategory === key ? s.selected : "")}
          >
            {value}
          </button>
        ))}
      </div>

      <div className={s.slider_wrapper}>
        <Swiper
          key={selectedCategory}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          scrollbar={{ draggable: true }}
          modules={[Autoplay]}
        >
          {[...Array(sliderImageQuantities[selectedCategory])].map((_, idx) => {
            const number = idx + 1;
            return (
              <SwiperSlide
                key={`${selectedCategory}-${number}`}
                className={s.swiper_slide}
              >
                <Image
                  src={`/assets/${selectedCategory}${number}.JPG`}
                  alt={`${selectedCategory}${number}`}
                  width={1200}
                  height={800}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className={s.check_wrapper}>
        {checkBoxes.map((box) => (
          <div key={`checkbox-${box}`} className={s.check_box}>
            <Image
              src="/assets/check-rounded.png"
              alt="Check"
              width={50}
              height={50}
              className={s.check_box_image}
            />
            {box}
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
