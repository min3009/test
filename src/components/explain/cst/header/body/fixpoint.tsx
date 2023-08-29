import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./fixpoint.module.scss";
import Image from "next/image";
import BannerTitle from "@/components/common/banner-title/banner-title";

export default function Cst() {
   return (
      <>
         <Wrapper>
            <div className={s.main_header}>
               <h2 className={s.h2}>두개천골치료, 신체 전체를 고려한 치료</h2>
               <h3 className={s.h3}>두개천골치료 POINT</h3>
            </div>
            <div className={s.main_content}>
               <BannerTitle className={s.content_title}>
                  <span>01 │ 자율신경</span>
               </BannerTitle>
               <div className={s.content_body}>
                  <h3>우리 몸의 신경은 크게 두가지로 나눌수 있습니다.</h3>
                  <p>말을 하고 활동을 하는 등 내 의지대로 움직이는 신경을 담당하는 체성신경과 나의 의지와는 상관없이 움직이는
                     신경을 담당하는 자율신경으로 나눌 수 있습니다. 그 중 자율신경은 두개골과 척추 건강과 긴밀한 관계를 가지고
                     있으며, 이는 우리 건강과 직결됩니다.</p>
               </div>
               <div className={s.content_img}>
                  <Image
                     src="/assets/autonomic.png"
                     alt="자율신경"
                     width={900}
                     height={900}
                  />
               </div>
               <div className={s.detail_view}>
                  <div className={s.button_image}>
                     <Image
                        src="/assets/button.png"
                        alt=""
                        width={70}
                        height={70}
                     />
                     <span><a href="">자세히 보기</a></span>
                  </div>
               </div>
            </div>

         </Wrapper>
      </>
   );
}
