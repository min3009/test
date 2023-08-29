import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./cognitive-recommend.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";

export default function Cognitive() {
  return (
    <>
      <Wrapper>
        <div className={s.main_title}>
          <SectionTitle description="본수호 인지장애 클리닉">
            <strong>이런 분들에게</strong> 추천드립니다.
          </SectionTitle>
        </div>

        <div className={s.flex_wrapper}>
          <div className={s.main_img}>
            <Image src="/assets/cognitive-recommend_main.png" alt="인지장애 클리닉" width={395} height={395} />
          </div>
          <div className={s.desc_column_wrapper}>
            <div className={s.content_desc}>
              <Image src="/assets/cognitive-check-cir.png" alt="체크" width={50} height={50} className={s.check} />
              <span>여러가지 치료를 진행했지만 효과가 없었던 분</span>
            </div>
            <div className={s.content_desc}>
              <Image src="/assets/cognitive-check-cir.png" alt="체크" width={50} height={50} className={s.check} />
              <span className={s.letter_space}>MRI, CT 등 다양한 검사를 받았지만 원인을 알 수 없었던 분</span>
            </div>
            <div className={s.content_desc}>
              <Image src="/assets/cognitive-check-cir.png" alt="체크" width={50} height={50} className={s.check} />
              <span>뇌질환으로 인해 일상생활이 어려운 분</span>
            </div>
            <div className={s.content_desc}>
              <Image src="/assets/cognitive-check-cir.png" alt="체크" width={50} height={50} className={s.check} />
              <span>전체적인 뇌 기능의 향상이 필요하신 분</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
