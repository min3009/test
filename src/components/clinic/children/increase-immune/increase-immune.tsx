import SectionTitle from "@/components/common/section-title/section-title";
import s from "./increase-immune.module.scss";
import RoundedBanner from "@/components/ui/rounded-banner/rounded-banner";
import Wrapper from "@/components/ui/wrapper/wrapper";
import Image from "next/image";
import CheckList from "@/components/ui/check-list/check-list";
import { cx } from "@/libs/utils";

const lists = [
  "비염, 부비동염",
  "천식, 잦은 감기",
  "단체생활증후군",
  "두드러기, 아토피 피부염",
];

export default function IncreaseImmnue() {
  return (
    <>
      <div className={cx(s.wrapper, s.upper)}>
        <Wrapper>
          <SectionTitle description="건강의 기본은 면역력!">
            본수호 <span className={s.orange}>면역증진</span> 클리닉
          </SectionTitle>

          <div className={s.clinic_wrapper}>
            <Image
              src="/assets/clinic_grass.png"
              alt="본수호 면역증진 클리닉"
              width={600}
              height={395}
            />

            <CheckList lists={lists} />
          </div>

          <RoundedBanner>
            성장과 건강의 토대, 면역력을 근본부터 수호합니다.
          </RoundedBanner>
        </Wrapper>
      </div>

      <div className={cx(s.wrapper, s.lower)}>
        <Wrapper>
          <Image
            src="/assets/clinic_sooho.png"
            alt="성장과 건강의 시작, 면역력을 수호합니다."
            width={1200}
            height={687}
            className={s.image}
            draggable={false}
          />
        </Wrapper>
      </div>
    </>
  );
}
