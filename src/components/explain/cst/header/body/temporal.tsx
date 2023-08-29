import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./temporal.module.scss";
import Image from "next/image";
import BannerTitle from "@/components/common/banner-title/banner-title";

export default function Cst() {
   return (
     <>
     <Wrapper>
      <div className={s.main_content}>
         <BannerTitle className={s.content_title}>
            <span>04 │ 측두골</span>
         </BannerTitle>
         <div className={s.content_body}>
            <p>
           <strong>측두골에는 달팽이관과 턱관절면이 위치해 있으며, 뇌신경 12개 중 9개가 측두골과 관련이 있습니다.
           </strong> 따라서 측두골을 교정해야 이명·난청·턱관절 질환뿐만 아니라 머리의 여러 질환들도 좋아질 수 있고 치매도
            예방될 수 있습니다.
            </p>
         </div>
         <div className={s.img_wrapper}>
         <div className={s.content_img}>
         <Image
            src="/assets/temporal1.png"
            alt="측두골"
            width={400}
            height={600}
         />
         </div>
         <div className={s.content_se_img}>
          <Image
            src="/assets/temporal2.png"
            alt="측두골"
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
 