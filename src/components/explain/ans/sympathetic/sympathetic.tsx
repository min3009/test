import BannerTitle from "@/components/common/banner-title/banner-title";
import SectionTitle from "@/components/common/section-title/section-title";
import s from "./sympathetic.module.scss";
import Image from "next/image";
import Wrapper from "@/components/ui/wrapper/wrapper";

export default function Sympathetic() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="자율신경은 교감신경과 부교감신경으로 나뉩니다.">
          교감신경과 부교감신경
        </SectionTitle>

        <div className={s.box}>
          <BannerTitle>
            01 <span className={s.title}>교감신경</span>
          </BannerTitle>

          <p className={s.description}>
            흥분할 때 활성화되는 신경으로 흉추 1번부터 요추 2번사이 몸의 중심인
            척추에서 나오며,
            <br />
            급박한 상황에서 몸을 더 많이 움직일 수 있게 에너지를 방출하여 우리
            몸을 조절하는 신경입니다.
          </p>

          <div className={s.rounded_title_wrapper}>
            <div className={s.rounded_title}>교감신경계 시스템</div>
          </div>

          <div className={s.image_wrapper}>
            <Image
              className={s.image}
              src="/assets/sympathetic.png"
              alt="Sympathetic"
              width={1200}
              height={1200}
            />
          </div>
        </div>

        <div className={s.box}>
          <BannerTitle>
            02 <span className={s.title}>부교감신경</span>
          </BannerTitle>

          <p className={s.description}>
            뇌신경12개의 뇌신경 중 3,7,9,10번과 엉덩이 사이 천골 2,3,4번에서
            나오며 편안한 휴식을 취하고 안정될 때<br />
            우리 몸을 이완시키고 마음을 평온하게 만들며 에너지를 비축하는
            신경입니다.
          </p>

          <div className={s.rounded_title_wrapper}>
            <div className={s.rounded_title}>부교감신경계 시스템</div>
          </div>

          <div className={s.image_wrapper}>
            <Image
              className={s.image}
              src="/assets/parasympathetic.png"
              alt="Sympathetic"
              width={1200}
              height={1200}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
