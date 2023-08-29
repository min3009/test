import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./what-temporal_bone.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";
import { cx } from "@/libs/utils";

export default function TemporalBone() {
   return (
      <>
         <div className={s.main_bg}>
            <Wrapper>
               <SectionTitle className={cx(s.temporal_title, s.title)}
                  description="두안이비인후과 질환의 문제는 측두골에서!"
               >
                  측두골이란?
               </SectionTitle>

               <div className={s.temporal_bone_img}>
                  <Image
                     src="/assets/temporal1.png"
                     alt="측두골"
                     width={489}
                     height={734}
                     className={s.bone_img}
                  />
                  <div className={s.temporal_desc}>
                     <p>측두골에는 달팽이관과 턱관절면이 위치해 있으며,<br />
                        뇌신경 12개 중 9개가 측두골과 관련이 있습니다.<br />
                        그래서 두안이비인후과 질환의 대부분의 문제는 측두골에서부터 시작됩니다.
                        <br /><br />
                        따라서 측두골을 교정해야 이명·난청·턱관절 질환뿐만 아니라<br />
                        머리의 여러 질환들도 좋아질 수 있고 치매도 예방될 수 있습니다.</p>
                     <Image
                        src="/assets/temporal2.png"
                        alt=""
                        width={592}
                        height={250}
                     />
                  </div>
               </div>
            </Wrapper>
         </div >
      </>
   );
}
