"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import s from "./example.module.scss";
import Image from "next/image";
import "swiper/css";
// import "swiper/css/navigation";
import Wrapper from "@/components/ui/wrapper/wrapper";
import { HTMLAttributes } from "react";
import { cx } from "@/libs/utils";

const examples = [
  {
    title: "이명난청 치료후기",
    image: "dummy_image",
    description: "20대 중반 남성",
  },
  {
    title: "이명난청 치료후기",
    image: "dummy_image",
    description: "30대 중반 남성",
  },
  {
    title: "이명난청 치료후기",
    image: "dummy_image",
    description: "40대 중반 남성",
  },
  {
    title: "이명난청 치료후기",
    image: "dummy_image",
    description: "50대 중반 남성",
  },
];

export default function Example(props: HTMLAttributes<HTMLElement>) {
  const { className } = props;

  return (
    <div className={cx(s.wrapper, className ?? "")}>
      <Wrapper>
        <h2 className={s.page_title}>치료 사례</h2>

        <Swiper
          className={s.swiper_wrapper}
          spaceBetween={16}
          // navigation
          scrollbar={{ draggable: true }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            "@0.50": {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            "@0.75": {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            "@1.00": {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {examples.map((example, idx) => (
            <SwiperSlide key={`example-swiper-${example.title}-${idx}`}>
              <div className={s.card}>
                <Image
                  src={`/assets/${example.image}.png`}
                  alt={`${example.title}-${idx}`}
                  width={280}
                  height={280}
                  className={s.image}
                />

                <div className={s.text_wrapper}>
                  <span className={s.title}>{example.title}</span>
                  <span className={s.description}>{example.description}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </div>
  );
}
