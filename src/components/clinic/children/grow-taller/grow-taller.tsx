import SectionTitle from "@/components/common/section-title/section-title";
import s from "./grow-taller.module.scss";
import Image from "next/image";
import Wrapper from "@/components/ui/wrapper/wrapper";

const images = [
  { image: "clinic_nutrition", alt: "영양" },
  { image: "clinic_sleep", alt: "잠" },
  { image: "clinic_genetic", alt: "유전" },
  { image: "clinic_exercise", alt: "운동" },
];

export default function GrowTaller() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="키 성장 다양한 부분을 신경써야 합니다.">
          <span className={s.orange}>키 성장</span>에 영향을 주는 요인
        </SectionTitle>

        <div className={s.cause_wrapper}>
          {images.map((image) => (
            <div className={s.image_wrapper} key={`grow-taller-${image.alt}`}>
              <Image
                src={`/assets/${image.image}.png`}
                alt={image.alt}
                width={560}
                height={420}
                className={s.image}
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
