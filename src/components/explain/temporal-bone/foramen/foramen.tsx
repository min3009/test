import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./foramen.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";

export default function TemporalBone() {
   return (
      <>
         <div className={s.main_bg}>
            <Wrapper>
               <SectionTitle className={s.foramen_title}
                  description="신경이 지나는 자리"
               >
                  경정맥공
               </SectionTitle>

               <div className={s.foramen_img}>
                  <Image
                     src="/assets/foramen.png"
                     alt="경정맥공"
                     width={1200}
                     height={550}
                     className={s.foramen_img}
                  />
                  <div className={s.foramen_desc}>
                     <p> 측두골과 후두골이 만나는 부분에 작은 틈이 있는데 이 틈을 경정맥공(jugular foramen)이라 하며, 이 틈을 통해 뇌신경 9, 10, 11 신경과 경정맥이 통과합니다
                        <br /><br />
                        경정맥공을 통과할 때 미주신경이 압박되어 나타나는 어지럼증, 미주신경성 실신, 자율신경질환이 나타날 수 있으며, 이는 두개천골치료를 통해 치료가 가능합니다.</p>
                  </div>
               </div>
            </Wrapper>
         </div>
      </>
   );
}
