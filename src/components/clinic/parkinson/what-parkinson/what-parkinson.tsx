import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./what-parkinson.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";

export default function Cognitive() {
   return (
      <>
         <Wrapper>
            <div className={s.main_title}>
               <SectionTitle
                  description="이유 없는 손떨림과 균형을 잡기 힘든 몸">
                  <strong className={s.color_font}>파킨슨병</strong>
               </SectionTitle>
               <div className={s.title_desc}>
                  <p>파킨슨병은 대표적인 신경퇴행성 질환 중 하나로 노화가 진행되며 신경 세포들이 어떤 원인에 의해 소멸되어 이로인해
                     뇌 기능의 이상을 일으키는 질병입니다. 뇌의 심부에 있는 기저핵, 특히 '흑색질'이라는 부위에 이상이 생겨 진전, 강직, 서동, 자세이상 등의 특징적인 징후를 보입니다.</p>
               </div>
            </div>
            <div className={s.main_img}>
               <Image
                  src="/assets/cognitive-parkinson.png"
                  alt="파킨슨병"
                  width={1200}
                  height={800}
               />
            </div>
            <div className={s.sub_parkinson}>
               <SectionTitle
                  description=""
               >
                  파킨슨병<strong className={s.color_font}>발병단계</strong>
               </SectionTitle>
               <div>
                  <div className={s.circles}>
                     <div className={s.big_circle}>
                        <div className={s.small_circle}>
                           <Image src="/assets/triangle.png" alt="화살표" width={30} height={30} className={s.tri_i} />
                        </div>
                        <p className={s.inner_t}>내원</p>
                     </div>
                     <div className={s.big_circle}>
                        <div className={s.small_circle}>
                           <Image src="/assets/triangle.png" alt="화살표" width={30} height={30} className={s.tri_i} />
                        </div>
                        <p className={s.inner_t}>
                           사고접수번호
                           <br />
                           확인
                        </p>
                     </div>
                     <div className={s.big_circle}>
                        <div className={s.small_circle}>
                           <Image src="/assets/triangle.png" alt="화살표" width={30} height={30} className={s.tri_i} />
                        </div>
                        <p className={s.inner_t}>
                           자동차보험
                           <br />
                           담당자 연락
                        </p>
                     </div>
                     <div className={s.big_circle}>
                        <div className={s.small_circle}>
                           <Image src="/assets/triangle.png" alt="화살표" width={30} height={30} className={s.tri_i} />
                        </div>
                        <p className={s.inner_t}>
                           지불보증서
                           <br />
                           확인
                        </p>
                     </div>
                     <div className={s.big_circle}>
                        <p className={s.inner_t}>
                           한방치료
                           <br />
                           진행
                        </p>
                     </div>
                  </div>
               </div>
               <p className={s.sub_parkinson_desc}>
                  파킨슨병은 점진적으로 서서히 진행하기 때문에 스스로 증상을 감지하기란 어렵습니다. 또한 원인이 다양하고 복합적이기 때문에 MRI, CT와 같은 획일화된 검사만으로는 파킨슨병을 판단할 수 없습니다. 증상들 또한 다른 질환들과 공통된 증상들도 많기 때문에 근본적인 치료를 위해서는 부분적인 증상보다는 다각적인 검사과정이 필요합니다.
               </p>
            </div>
         </Wrapper>



      </>
   )
}