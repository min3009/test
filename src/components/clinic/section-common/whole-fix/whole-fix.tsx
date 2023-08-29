import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./whole-fix.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Clinic_cst() {
   return (
      <div>
         <div className={s.background_3}>
            <Wrapper>
               <p className={s.sub_title_3}>본수호, 나무가 아닌 숲으로 보는 마음으로!</p>
               <h2 className={s.title_3}>
                  본수호는 <span className={s.point}>전신을 치료</span>합니다.
               </h2>
               <div className={s.treatment}>
                  <div className={s.treatment_big}>
                     <div className={s.big_s}>
                        <div className={s.small_s}>
                           <Image src="/assets/plus.png" alt="plus" width={40} height={40} className={s.plus} />
                        </div>
                        <p className={s.treatment_text}>신체 전반적인</p>
                        <p className={s.treatment_point_text}>기능 활성화</p>
                        <Image src="/assets/cst_10.png" alt="신체" width={100} height={100} />
                     </div>
                     <div className={s.big_s}>
                        <div className={s.small_s}>
                           <Image src="/assets/plus.png" alt="plus" width={40} height={40} className={s.plus} />
                        </div>
                        <p className={s.treatment_text}>관련 증상</p>
                        <p className={s.treatment_point_text}>치료 및 예방</p>
                        <Image src="/assets/cst_11.png" alt="방어" width={100} height={100} />
                     </div>
                     <div className={s.big_s}>
                        <p className={s.treatment_text}>치료 이후</p>
                        <p className={s.treatment_point_text}>지속적인 관리</p>
                        <Image src="/assets/cst_12.png" alt="관리" width={100} height={100} />
                     </div>
                  </div>
               </div>
               <p className={s.bottom_text}>
                  질환의 증상 개선 뿐만 아니라, 신체 전반적인 기능을 활성화하는데 도움을 주어 관련 질환 및 2차 증상을 예방하고
                  치료하고 치료 후에도 꾸준히 지속될 수 있는 원동력을 만들어줍니다.
               </p>
            </Wrapper>
         </div>
      </div>
   );
}
