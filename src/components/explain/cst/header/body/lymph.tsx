import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./lymph.module.scss";
import Image from "next/image";
import BannerTitle from "@/components/common/banner-title/banner-title";

export default function Cst() {
   return (
      <>
         <Wrapper>
            <div className={s.main_content}>
               <BannerTitle className={s.content_title}>
                  <span>03 │ 림프절</span>
               </BannerTitle>
               <div className={s.content_body}>
                  <p>림프절이란 림프구를 만들어내는 곳으로 림프구를 만들어 몸에 침입하는 세균과 싸우고 이물질을 제거하여 인체를 제어하는 면역력과 큰 상관관계를 가지고 있습니다. 림프절 건강=면역력이라고 볼 수 있습니다.
                     <strong> 우리 몸의 림프절은 약 800개 가량 포진되어 있고 이 중 300개 정도가 목에 포진되어 있어 면역력에 직접적인
                        연관을 가지고 있습니다.</strong></p>
               </div>
               <div className={s.img_wrapper}>
                  <div className={s.content_img}>
                     <Image
                        src="/assets/lymph1.png"
                        alt="림프절"
                        width={600}
                        height={550}
                     />
                  </div>
                  <div className={s.content_se_img}>
                     <Image
                        src="/assets/lymph2.png"
                        alt="림프절"
                        width={550}
                        height={259}
                     />
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
               </div>
            </div>
         </Wrapper>
      </>
   );
}
