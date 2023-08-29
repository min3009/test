import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./dementa-characteristic.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";
import { cx } from "@/libs/utils";

export default function Cognitive() {
   return (
      <>
         <div className={s.main_bg}>
            <Wrapper>
               <div className={s.main_title}>
                  <SectionTitle
                     description="일상생활에 불편함을 느낀다면!">
                     치매 <strong>진행 특징</strong>
                  </SectionTitle>
                  <p className={s.main_desc}>
                     치매단계로 접어들게 되면 점차 뇌가 퇴화하면서 여러 영역에 인지장애가 나타나게 되고 정상적인 생활이 어렵습니다. 그러나 이때, 치매의 진행을 2년만 지연시켜도 20년 후의 치매 유병율은 20% 감소하며 만약 5년을 지연시키면 50%가 감소합니다.
                  </p>
               </div>
               <div className={s.circles}>
                  <div className={cx(s.circle, s.c_1)}>
                     <p className={s.c_text}>
                        기억력<br />
                        감퇴
                     </p>
                  </div>
                  <div className={cx(s.circle, s.c_2)}>
                     <p className={s.c_text}>
                        언어구사력<br />
                        감퇴
                     </p>
                  </div>
                  <div className={cx(s.circle, s.c_3)}>
                     <p className={s.c_text}>
                        사고력<br />
                        저하
                     </p>
                  </div>
                  <div className={cx(s.circle, s.c_4)}>
                     <p className={s.c_text}>
                        판단력<br />
                        저하
                     </p>
                  </div>
                  <div className={cx(s.circle, s.c_5)}>
                     <p className={s.c_text}>
                        추론력<br />
                        저하
                     </p>
                  </div>
                  <div className={cx(s.circle, s.c_6)}>
                     <p className={s.c_text}>
                        문제해결능력<br />
                        저하
                     </p>
                  </div>
               </div>
            </Wrapper>
         </div>
      </>
   )
}