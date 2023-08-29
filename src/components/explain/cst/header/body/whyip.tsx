import Image from "next/image";
import s from "./whyip.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";

export default function Cst() {
   return (
     <>
       <Wrapper>
      <div className={s.main_content}>
         <div className={s.mcontent_header}>
            <span>두개골-천골 건강 = 자율신경의 조화</span>
            <h2>두개골-천골, 왜 중요할까?</h2>
         </div>
         <div className={s.photo}>
            <Image 
               src="/assets/whyip.png"
               alt="두개골 해부그림"
               width={1200}
               height={1000}
            />
         </div>
         <div className={s.mcontent_content}>
            <p>
            특히 가장 바깥에 있는 경막은 강하고 질긴 막으로 구성되어 있는데, 대뇌와 소뇌를 구분하며 대뇌를 좌우로 구분하여 감싸고 있어서 뇌실질을 보호하는 역할을 합니다. 경막은 머리뼈 안쪽에 붙어있으며 외막은 대후두공에 강력하게 부착되고 내막은 척추로 내려가서 척수를 보호합니다. 뇌신경이나 척수신경과 같이 말초신경 역시 바깥층은 경막의 연장선이므로 경막은 사람의 머리와 척수, 그리고 말초에 이르기까지 전반적인 구조와 기능을 유지하는 신경보호막입니다.
            <br /><br />
            출생시 선천적인 질병이 있거나 외상이 있을 경우, 성장기에 건강의 이상이 있을 경우 또는 나쁜 자세를 가지고 있는 경우 경막이 긴장하게 되고, 이러한 긴장이 오랜 시간 지속되면 턱관절, 꼬리뼈 뿐만 아니라 하지까지 전반적으로 골격이 틀어지게 되고 기능 또한 제 역할을 못하게 됩니다.
            <br /><br />
            즉 뇌를 감싸고 있는 두개골, 신경이 지나는 척추에 구조적인 문제가 생기면 기능적인 문제는 필연적으로 발생할 수 밖에 없으며, 머리에서 골반까지 이르는 척추골격에서 발생하는 긴장과 왜곡은 자율신경에 지대한 영향을 주어 다양한 질환을 야기할 수 있습니다.
            </p>
         </div>
      </div>
       </Wrapper>
     </>
   );
 }
 