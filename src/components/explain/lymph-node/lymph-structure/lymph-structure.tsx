import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./lymph-structure.module.scss";
import Image from "next/image";


export default function LymphNode() {
   return (
      <>
         <div className={s.main_bg}>
            <Wrapper>
               <div className={s.main_img}>
                  <Image
                     src="/assets/lymph-main1.png"
                     alt="림프절이란"
                     width={900}
                     height={1080}
                  />
                  <Image
                     src="/assets/lymph-main2.png"
                     alt="림프절이란"
                     width={498}
                     height={498}
                     className={s.main_img2}
                  />
               </div>
            </Wrapper>
         </div>
      </>
   );
}
