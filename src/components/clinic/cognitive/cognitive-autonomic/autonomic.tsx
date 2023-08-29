import CircleText from "@/components/common/circle-text/circle-text";
import SectionTitle from "@/components/common/section-title/section-title";
import s from "./autonomic.module.scss";
import { cx } from "@/libs/utils";
import Wrapper from "@/components/ui/wrapper/wrapper";
import Image from "next/image";



export default function Dysfunction() {
   return (
      <div className={s.wrapper}>
         <div className={s.inner_wrapper}>
            <Wrapper>
               <div className={s.title}>
                  <SectionTitle description="인지기능장애, 자율신경실조증과 관련이 깊습니다.">
                     <strong>자율신경 실조증</strong>
                  </SectionTitle>
                  <p className={s.title_desc}>자율신경의 교감신경과 부교감신경 반대되는 작용을 길항작용이라고 부르며, 두 신경의 조화와 균형이 잘 맞아야 건강하다고 할 수 있습니다. 이러한 교감신경과 부교감신경의 길항작용이 역할을 다하지 못했을 때 자율신경에 문제가 있다고 판단하고 이를 자율신경 실조증이라고 합니다. 자율신경실조증은 다양한 인지기능장애를 초래할 수 있습니다.</p>
               </div>
               <div className={s.circle_wrapper}>
                  <CircleText type="yellow">
                     <h3 className={s.h3}>
                        <span>방출하는 에너지</span>
                        <strong className={s.strong}>교감신경</strong>
                     </h3>
                     <hr className={cx(s.hr, s.somatic)} />
                     <p className={s.description}>
                        급박한 상황이나 흥분된 상
                        <br />
                        황에 주로 활성화
                     </p>
                  </CircleText>

                  <div>
                     <h3 className={s.h3}>
                        <span>서로 반대되는 역할</span>
                        <strong className={s.strong}>길항작용</strong>
                     </h3>
                  </div>

                  <CircleText type="orange">
                     <h3 className={s.h3}>
                        <span>비축하는 에너지</span>
                        <strong className={s.strong}>부교감신경</strong>
                     </h3>
                     <hr className={cx(s.hr, s.somatic)} />
                     <p className={s.description}>
                        몸과 마음이 편안한 상황에
                        <br />
                        주로 활성화
                     </p>
                  </CircleText>
               </div>
            </Wrapper>
         </div>

         <Wrapper>
            <div className={s.see_saw_wrapper}>
               <div className={s.see_saw}>
                  <div className={s.title}>
                     <h4>균형있는 길항작용</h4>
                     <p>몸과 마음이 조화로운 상태로 건강을 유지합니다.</p>
                  </div>
                  <Image
                     className={s.image}
                     src="/assets/autonomic_see_saw1.png"
                     alt="균형있는 길항작용"
                     width={1000}
                     height={384}
                  />
               </div>

               <div className={cx(s.see_saw, s.second)}>
                  <div className={s.title}>
                     <h4>한쪽으로 치우친 길항작용</h4>
                     <p>
                        자율신경 실조증으로 다양한 난치성 질환이 나타날 수 있습니다.
                     </p>
                  </div>
                  <Image
                     className={s.image}
                     src="/assets/autonomic_see_saw2.png"
                     alt="한쪽으로 치우친 길항작용"
                     width={1000}
                     height={458}
                  />
               </div>
            </div>
         </Wrapper>
      </div>
   );
}
