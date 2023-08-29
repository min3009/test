import SectionTitle from "@/components/common/section-title/section-title";
import s from "./academic-health.module.scss";
import Image from "next/image";
import Wrapper from "@/components/ui/wrapper/wrapper";
import RoundedBanner from "@/components/ui/rounded-banner/rounded-banner";

export default function AcademicHealth() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="건강의 기본은 면역력!">
          본수호 <span className={s.orange}>학습체력 증진</span> 클리닉
        </SectionTitle>

        <div className={s.box}>
          <div className={s.image_wrapper}>
            <Image
              src="/assets/clinic_academic_health.png"
              alt="본수호 학습체력 증진 클리닉"
              width={600}
              height={395}
              className={s.image}
            />
          </div>
          <div className={s.description_wrapper}>
            <p>
              초등·중등학교까지는 공부
              <br />
              대비 성적이 잘 나왔는데,
              <br />
              고등학교 들어가면서 점점
              <br />
              처지는 우리아이!
              <br />
              <span className={s.orange}>
                체력과 면역력을 점검하셔야 합니다.
              </span>
            </p>
          </div>
        </div>

        <RoundedBanner className={s.rounded_banner}>
          체계적인 방법으로 우리아이의 학습능력을 끌어올려 주세요!
        </RoundedBanner>
      </Wrapper>
    </div>
  );
}
