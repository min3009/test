import Image from "next/image";
import s from "./skull-important.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";
import SectionTitle from "@/components/common/section-title/section-title";
import BannerTitle from "@/components/common/banner-title/banner-title";

export default function Cognitive() {
   return (
      <>
         <div className={s.main_img}>
            <Image
               src="/assets/sig.png"
               alt=""
               width={1920}
               height={1080}
            />
         </div>
         <Wrapper>
            <div className={s.skull_title}>
               <SectionTitle
                  description="두개골-천골 건강 = 자율신경의 조화">
                  <strong>두개골-천골</strong>, 왜 중요할까?
               </SectionTitle>
            </div>
            <BannerTitle className={s.banner}>
               <span>두개골과 천골의 뒤틀림을 바로잡아 우리 몸을 조율합니다.</span>
            </BannerTitle>
            <p className={s.skull_desc}>두개천골추나는 한의사의 손으로 경막을 이완시킴으로써<br />
               머리뼈의 뒤틀림으로 발생하는 자율신경 질환, 체액순환의 장애, 내장기 운동성 저하를<br />
               치료하는 본수호한의원의 시그니처 치료입니다.</p>
            <div className={s.skull_img}>
               <Image
                  src="/assets/whyip.png"
                  alt=""
                  width={1200}
                  height={1000}
               />
            </div>
         </Wrapper>
         <div className={s.main_bg}>
            <div className={s.skull_group_img}>
               <Image
                  src="/assets/group1.png"
                  alt=""
                  width={1040}
                  height={641}
               />
            </div>
            <div className={s.more_view}>
               <a href="#"><span>두개천골치료 자세히 보기</span></a>
            </div>
         </div>
      </>
   )
}
