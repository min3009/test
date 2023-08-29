import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./temporal-rotation.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";

export default function TemporalBone() {
   return (
      <>
         <Wrapper>
            <SectionTitle
               description="이명과 난청"
               className={s.title}
            >
               측두골의 외회전과 내회전
            </SectionTitle>


            <div className={s.temporal_rotation_img}>
               <Image
                  src="/assets/temp-rotation.png"
                  alt="측두골"
                  width={1081}
                  height={625}
               />
               <div className={s.temporal_desc}>
                  <p>측두골에는 달팽이관이 위치하는데, 저음의 이명은 측두골의 외회전 고정 기능장애와 연관되고, 고음의 이명은 측두골의 내회전 고정 기능장애와 연관됩니다. 따라서 이명 치료에서는 측두골의 올바른 교정이 중요합니다</p>
               </div>
            </div>
         </Wrapper>
      </>
   );
}
