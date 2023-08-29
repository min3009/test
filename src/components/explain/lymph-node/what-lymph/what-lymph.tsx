import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./what-lymph.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";


export default function LymphNode() {
   return (
      <>
         <Wrapper>
            <SectionTitle
               description="면역력을 높이는 림프조직"
               className={s.title}>
               림프절이란?
            </SectionTitle>
            <div className={s.what_lymph_img}>
               <Image
                  src="/assets/what-lymph.png"
                  alt="림프절이란"
                  width={1200}
                  height={397}
               />
            </div>
            <div className={s.what_lymph_content}>
               <p>림프절이란  말초혈액의 림프구의 주공급원이며 세망내피계의 일부로서, 세균 및 독소와 같은 유해물질을 제거하는 방어기구로서 작용하며 항체산생의 역할을 합니다. 그래서 면역력과 큰 상관관계를 가지고 있습니다
                  <br /><br />
                  뚜렷한 림프기관을 형성한 림프조직의 축적으로서 직경이 1~25mm이며, 림프관의 통로에 연해서 위치하며 외피질과 내수질로
                  구성되어 있습니다.</p>
            </div>
         </Wrapper>
         <div className={s.main_bg}>
            <Wrapper>
               <div className={s.lymph_expl}>
                  <Image
                     src="/assets/lymph1.png"
                     alt="림프절"
                     width={586}
                     height={550}
                  />
                  <Image
                     src="/assets/lymph2.png"
                     alt="림프절"
                     width={549}
                     height={250}
                  />
               </div>
               <div className={s.lymph_expl_content}>
                  <p>우리 몸의 림프절은 약 800개 가량 포진되어 있고 이 중 300개 정도가 목에 포진되어 있어 면역력에 직접적인<br />
                     연관을 가지고 있습니다. 두개천골치료를 통해 목의 림프절 부위를 풀어줌으로써 면역력을 높일 수 있습니다.</p>
               </div>
            </Wrapper>
         </div>


      </>
   );
}
