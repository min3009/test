import SectionTitle from "@/components/common/section-title/section-title";
import Image from "next/image";
import s from "./golden-time.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";
import CallOut from "@/components/ui/call-out/call-out";

export default function GoldenTime() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="안면질환, 초기치료가 완치의 지름길!">
          안면질환의 <span className={s.orange}>골든타임</span>
        </SectionTitle>

        <Image
          src="/assets/face_golden_time.png"
          alt="안면질환의 골든타임"
          width={1200}
          height={632}
          className={s.item}
        />

        <CallOut className={s.call_out}>
          구안와사와 같은 안면질환, 발병 후 4~7일 이내에 치료해야 합니다!
        </CallOut>

        <p className={s.description}>
          갑작스럽게 찾아온 안면마비 증상이 나타났다면 빠른 치료가 필수 입니다.
          병원에 내원했을 때 '기다려보자'는 안일한 처방보다는 적극적인 치료가
          필요합니다. 구안와사와 같은 안면마비 질환은 초기에 치료하지 않으면
          완치율이 현저히 떨어집니다. 빠른 회복을 위해서는 초기 대처가 가장
          중요합니다.
        </p>
      </Wrapper>

      <div className={s.image_wrapper}>
        <Image
          src="/assets/face_head.png"
          alt="신경"
          width={1920}
          height={728}
          className={s.image}
        />
      </div>
    </div>
  );
}
