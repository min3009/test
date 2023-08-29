import Image from "next/image";
import s from "./headfix.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";

export default function Cst() {
   return (
     <>
      <div className={s.sig_img}>
         <Image
            src="/assets/sig.png"
            alt="시그니처 트리트먼트"
            width={1920}
            height={1080}
         />
      </div>
      <div className={s.sig_img_txt}>
         <span>BONESOHOO SIGNITURE TREATMENT</span>
      </div>
      <Wrapper>
      <div className={s.main_content}>
         <div className={s.mcontent_header}>
            <span>미국 의사의 10% 이상이 시행하고 있습니다.</span>
            <h2>두개천골치료란?</h2>
         </div>
         <div className={s.mcontent_body}>
            <div className={s.body_header}>
               <span>두개골과 천골의 뒤틀림을 바로잡아 우리 몸을 조율합니다.</span>
            </div>
            <div className={s.body_content}>
               <p>두개천골추나는 한의사의 손으로 경막을 이완시킴으로써 <br />
                  머리뼈의 뒤틀림으로 발생하는 자율신경 질환, 체액순환의 장애, 내장기 운동성 저하를<br />
                  치료하는 <strong>본수호한의원의 시그니처 치료</strong>입니다.
               </p>
               <div className={s.body_content_img}>
               <Image 
                  src="/assets/group1.png"
                  alt="두개전골치료"
                  width={1040}
                  height={641}
               />
               </div>
            </div>
         </div>
      </div>
      </Wrapper>
     </>
   );
 }
 