import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./cognitive-solution.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";
import BannerTitle from "@/components/common/banner-title/banner-title";

export default function TemporalBone() {
  return (
    <>
      <div className={s.main_bg}>
        <Wrapper>
          <div className={s.text_wrapper}>
            <div>
              <SectionTitle description="인지기능장애, 자율신경 안정화를 통한">
                <strong>인지기능장애</strong> 해소
              </SectionTitle>
              <div className={s.title_desc}>
                <p>
                  본수호한의원에서는 두개천골치료를 통해 자율신경의 안정화로 신체의 전반적인 건강과 더불어 뇌 신경과
                  세포의 <br />
                  활성화를 통해 인지기능장애를 치료하고 있습니다.
                </p>
              </div>
            </div>
            <div className={s.solution_content1}>
              <div className={s.imgbox}>
                <BannerTitle className={s.banner}>
                  <span>자율신경의 조화 및 안정화</span>
                </BannerTitle>
                <Image src="/assets/cognitive-solution1.png" alt="자율신경의 조화 및 안정화" width={560} height={480} />
              </div>
              <div className={s.imgbox}>
                <BannerTitle className={s.banner}>
                  <span>뇌세포 혈액순환장애 해소</span>
                </BannerTitle>
                <Image src="/assets/cognitive-solution2.png" alt="뇌세포 혈액순환장애 해소" width={560} height={480} />
              </div>
            </div>
            <div className={s.solution_content2}>
              <div className={s.imgbox}>
                <BannerTitle className={s.banner}>
                  <span className={s.letter_space}>뇌에 진액공급으로 뇌세포 기능을 활성화</span>
                </BannerTitle>
                <Image
                  src="/assets/cognitive-solution3.png"
                  alt="뇌에 진액공급으로 뇌세포 기능을 활성화"
                  width={560}
                  height={480}
                />
              </div>
              <div className={s.imgbox}>
                <BannerTitle className={s.banner}>
                  <span>뇌세포 신경전달물질 활성화</span>
                </BannerTitle>
                <Image
                  src="/assets/cognitive-solution4.png"
                  alt="뇌세포 신경전달물질 활성화"
                  width={560}
                  height={480}
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
