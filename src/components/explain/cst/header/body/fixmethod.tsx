import Image from "next/image";
import s from "./fixmethod.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";

export default function Cst() {
   return (
     <>
      <Wrapper>
         <div className={s.main_content}>
            <div className={s.mcontent_header}>
               <span>두개천골치료 자세히 알아봐요!</span>
               <h2>두개천골치료 기법</h2>
            </div>
            <Image
               src="/assets/fixmethod.png"
               alt="두개전골치료 기법(복와위)"
               width={1200}
               height={1168}
               className={s.mcontent_img}
            />
            <div className={s.button_area}>
            <button className={s.fir_btn} type="button">복와위</button>
            <button className={s.sec_btn} type="button">측와위</button>
            <button className={s.thd_bth} type="button">앙와위</button>
            </div>
            </div>
         
      </Wrapper>
     </>
   );
 }