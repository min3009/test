import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./autinomic.module.scss";
import SectionTitle from "@/components/common/section-title/section-title";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { cx } from "@/libs/utils";

export default function Ataxia1(props: HTMLAttributes<HTMLElement>) {
   const { className } = props;

   return (
      <div className={cx(s.total, className ?? "")}>
         <Wrapper>
            <SectionTitle
               description="난치성 질환의 대표적인 원인!"
               className={s.title}
            >
               자율신경 실조증
            </SectionTitle>
            <Image
               src="/assets/ANS1.png"
               alt="자율신경 실조증"
               width={1200}
               height={1160}
               className={s.image}
            />
         </Wrapper>
      </div>
   );
}
