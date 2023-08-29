import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./lymph-function.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";

export default function LymphNode() {
   return (
      <>
         <Wrapper>
            <div className={s.lym_func}>
               <SectionTitle
                  description="림프절은 면역의 핵심!"
                  className={s.title}>
                  림프절의 기능
               </SectionTitle>

               <div className={s.lym_func_img}>
                  <Image
                     src="/assets/lymph-func.png"
                     alt="림프절의 기능"
                     width={300}
                     height={300}
                  />
                  <div className={s.lym_func_img_dec}>
                     <span>혈액으로부터 여과되어 나온 조직액을 다시 혈액으로 되돌려 보내는 기능</span>
                     <span>병원체나 이물질을 제거하는 면역 기능</span>
                     <span>소장에서 흡수한 지방을 혈액으로 운반하는 기능</span>
                  </div>
               </div>
               <div className={s.lym_func_content}>
                  <p>림프계는 림프관과 림프샘, 비장(자라), 그리고 다른 림프기관들로 구성되어 있으며, 무한 순환하는 폐쇄 순환계인 혈관과 달리
                     말초부터 중심까지 일정한 방향성을 갖고 순환하는 열린 순환계입니다. 림프계를 순환하는 림프는 모세혈관의 얇은 벽을 통해
                     조직에 스며드는 액체(조직액)로, 대부분은 정맥으로 다시 흡수되지만 일부는 모세림프관으로 들어가 순환하는 림프액이 됩니다.
                     <br /><br />
                     림프액은 소화관에서 받은 영양분을 각 조직에 공급하고, 조직에 있는 세균이나 암세포, 손상된 세포를 림프관을 통해 림프절로
                     보내게 됩니다.</p>
               </div>
            </div>
         </Wrapper >
      </>
   );
}
