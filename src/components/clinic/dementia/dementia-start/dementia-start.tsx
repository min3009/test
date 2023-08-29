import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./dementia-start.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";

export default function Cognitive() {
   return (
      <>
         <Wrapper>
            <div className={s.main_title}>
               <SectionTitle
                  description="치매의 시작은 4·50대 건망증!">
                  <strong>건망증 부터 인지장애, 치매까지!</strong>
               </SectionTitle>
            </div>
            <Image
               src="/assets/dementia-start.png"
               alt=""
               width={1200}
               height={922}
               className={s.main_img}
            />
         </Wrapper>
      </>
   )
}