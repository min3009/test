import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./parkinson-stageOfprogress.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";

export default function Cognitive() {
   return (
      <>
         <Wrapper>
            <div className={s.main_title}>
               <SectionTitle
                  description="원인과 단계를 알면 치료가 보입니다.">
                  파킨슨병 <strong>발병 진행단계</strong>
               </SectionTitle>
            </div>
            <Image
               src="/assets/cognitive-progress.png"
               alt="파킨슨병 발병 진행단계"
               width={1200}
               height={1000}
               className={s.progress_img}
            />
         </Wrapper>
      </>
   )
}