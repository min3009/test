import Image from "next/image";
import { HTMLAttributes } from "react";
import { cx } from "@/libs/utils";
import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./insulance.module.scss";

export default function Insurance(props: HTMLAttributes<HTMLElement>) {
   const { className } = props;

   return (
      <div className={cx(s.background, className ?? "")}>
         {/* <div> */}
         <Wrapper>
            <h4 className={s.intro}>한의원 진료 보험적용</h4>
            <h2 className={s.title}>
               <span className={s.point}>실비보험</span>이 적용합니다.
            </h2>
            <h5 className={s.explain}>
               한의원보험진료(급여항목) 중{" "}
               <span className={s.point}>
                  1만원 이상의 본인부담비용은 실비보험 혜택
               </span>
               을 받을 수 있습니다.
            </h5>
            <Image
               src="/assets/insurance.png"
               alt="실비보험"
               width={950}
               height={650}
            />
            <div className={s.row_top}>
               <div className={s.item}>
                  <Image
                     src="/assets/insurance_i1.png"
                     alt="침"
                     width={126}
                     height={126}
                     className={s.image}
                  />
                  <p className={s.i_text}>침</p>
               </div>
               <div className={s.item}>
                  <Image
                     src="/assets/insurance_i2.png"
                     alt="뜸"
                     width={126}
                     height={126}
                     className={s.image}
                  />
                  <p className={s.i_text}>뜸</p>
               </div>
               <div className={s.item}>
                  <Image
                     src="/assets/insurance_i3.png"
                     alt="한약"
                     width={126}
                     height={126}
                     className={s.image}
                  />
                  <p className={s.i_text}>한약</p>
               </div>
               <div className={s.item}>
                  <Image
                     src="/assets/insurance_i4.png"
                     alt="약침"
                     width={126}
                     height={126}
                     className={s.image}
                  />
                  <p className={s.i_text}>약침</p>
               </div>
               <div className={s.item}>
                  <Image
                     src="/assets/insurance_i5.png"
                     alt="전침"
                     width={126}
                     height={126}
                     className={s.image}
                  />
                  <p className={s.i_text}>전침</p>
               </div>
            </div>
            <div className={s.row_bottom}>
               <div className={s.item}>
                  <Image
                     src="/assets/insurance_i6.png"
                     alt="추나"
                     width={126}
                     height={126}
                     className={s.image}
                  />
                  <p className={s.i_text}>추나</p>
               </div>
               <div className={s.item}>
                  <Image
                     src="/assets/insurance_i7.png"
                     alt="부항"
                     width={126}
                     height={126}
                     className={s.image}
                  />
                  <p className={s.i_text}>부항</p>
               </div>
               <div className={s.item_detail}>
                  <p className={s.item_detail_t}>
                     · <span className={s.point}>본인부담금 1만원</span>
                     <br />
                     · 본인부담금을 제외한 나머지는
                     <br />
                     <span className={s.point}>
                        &nbsp;&nbsp;&nbsp;실비보험으로 환급
                     </span>
                     이 가능합니다.
                  </p>
               </div>
            </div>
         </Wrapper>
         {/* </div> */}
      </div>
   );
}
