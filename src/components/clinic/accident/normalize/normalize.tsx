import Wrapper from "@/components/ui/wrapper/wrapper";
import Image from "next/image";
import s from "./normalize.module.scss";

export default function Normalize() {
  return (
    <>
      <Wrapper>
        <div className={s.section6}>
          <p className={s.des}>통증은 물론,</p>
          <h2 className={s.title}>
            <span className={s.point}>자율신경계 정상화</span>까지
          </h2>
        </div>
        <div className={s.sec6_image}>
          <Image src="/assets/acci_12.png" alt="뇌통증" width={600} height={350} />
          <Image src="/assets/acci_13.png" alt="척추통증" width={600} height={350} />
        </div>
        <p className={s.sec6_text}>
          <span className={s.bold}>사고 당시 가장 많이 충격을 받는 곳은 어디일까요? 바로 척추와 뇌 입니다.</span>
          <br />
          본수호한의원에서는 물리적인 충격으로 인한 통증과 관절 가동범위 감퇴 등의 일상생활에 불편함을 초래할 수 있는
          증상과 <br />
          후유증 장애로 이어지지 않도록 골격을 정상적으로 배열하고 근육과 인대의 제기능을 돕습니다.
          <br />
          <br />
          <span className={s.bold}>
            이후 두개천골치료를 통해 자율신경의 부조화를 정상화하여 신체적인 증상 뿐만아니라 정신적인 충격 또한 세심하고
            꼼꼼하게 돌보아 후유증이 남지 않도록 노력하고 있습니다.
          </span>
        </p>
      </Wrapper>
    </>
  );
}
