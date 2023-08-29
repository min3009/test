import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./vagus.module.scss";
import Image from "next/image";
import BannerTitle from "@/components/common/banner-title/banner-title";

export default function Cst() {
   return (
      <>
         <Wrapper>
            <div className={s.main_content}>
               <BannerTitle className={s.content_title}>
                  <span>02 │ 미주신경</span>
               </BannerTitle>
               <div className={s.content_body}>
                  <p>미주신경이란 부교감신경의 80%이상을 책임지고 있는 신경으로 우리몸 특히 내장기의 상태신호를 뇌로 보내는 역할을 합니다. 주로 뇌간에서 시작되어 목을 거쳐 폐, 신장, 간, 위 모든 소화기들에 관여를 하고 있습니다.
                     <strong> 그래서 부교감신경인 미주신경은 장의 건강과 직결됩니다.</strong></p>
               </div>
               <div className={s.img_wrapper}>
                  <div className={s.content_img}>
                     <Image
                        src="/assets/vagus1.png"
                        alt="미주신경"
                        width={586}
                        height={1000}
                     />
                     <div className={s.content_se_img}>
                        <Image
                           src="/assets/group5.png"
                           alt="미주신경"
                           width={550}
                           height={800}
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
            </div>
         </Wrapper>
      </>
   );
}
