import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./indication.module.scss";
import Image from "next/image";

const imageAlts = [
  "원인모를 두통",
  "이명·난청",
  "어지럼증",
  "소화불량",
  "불안장애",
  "불면증",
  "가슴두근거림",
  "수족다한증",
];

export default function Cst() {
  return (
    <div className={s.main_bg}>
      <Wrapper>
        <div className={s.text_wrapper}>
          <h2 className={s.h2}>난치성, 만성, 원인불명 질환에 탁월합니다!</h2>
          <h3 className={s.h3}>적응증</h3>
          <div className={s.description}>
            <p>
              원인모를 두통, 이명, 어지럼증, 소화불량, 불안장애, 불면증,
              가슴두근거림, 수족다한증, 인지장애
              <br />
              위의 질환들은 증상은 다양하지만 원인은 자율신경이 제 역할을 하지
              못해 나타나는 공통점을 가지고 있습니다.
              <br />
              서양의학에서 난치성, 만성, 원인불명 질환으로 진단받아 희망을 찾지
              못하는 환자분들에게 권장드립니다.
            </p>
          </div>

          <div className={s.images_wrapper}>
            {imageAlts.map((alt, idx) => (
              <div key={`section-two-${alt}`} className={s.image_wrapper}>
                <Image
                  src={`/assets/circle${idx + 1}.png`}
                  width={275}
                  height={275}
                  alt={alt}
                  className={s.image}
                />
                <div className={s.image_overlay} />
                <span className={s.text}>{alt}</span>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
