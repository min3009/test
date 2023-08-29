import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./temporal-bone.module.scss";
import SectionTitle from "@/components/common/section-title/section-title";
import Image from "next/image";

export default function TemporalBone() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="두안이비인후과(頭眼耳鼻咽喉科) 질환">
          문제는 <span className={s.orange}>측두골</span>이야!
        </SectionTitle>

        <div className={s.image_wrapper}>
          <Image
            src="/assets/tinnitus_temporal_bone.png"
            alt="측두골"
            width={700}
            height={590}
            className={s.image}
          />
          <p className={s.explain}>
            측두골에는
            <br />
            <span className={s.orange}>달팽이관과 턱관절면</span>이<br />
            위치해 있으며,
            <br />
            <span className={s.orange}>뇌신경 12개 중 9개가</span>
            <br />
            측두골과 관련이 있습니다.
          </p>
        </div>

        <p className={s.description}>
          따라서 측두골을 교정해야 이명·난청·턱관절 질환뿐만 아니라 머리의 여러
          질환들도 좋아질 수 있고 치매도 예방될 수 있습니다.
        </p>
      </Wrapper>
    </div>
  );
}
