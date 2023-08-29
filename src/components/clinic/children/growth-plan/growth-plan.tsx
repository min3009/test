import SectionTitle from "@/components/common/section-title/section-title";
import s from "./growth-plan.module.scss";
import Image from "next/image";
import RoundedBanner from "@/components/ui/rounded-banner/rounded-banner";
import Wrapper from "@/components/ui/wrapper/wrapper";

export default function GrowthPlan() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="올바른 성장, 타이밍이 중요합니다.">
          연령별 <span className={s.orange}>성장 플랜</span>
        </SectionTitle>

        <div>
          <Image
            src="/assets/clinic_growth_plan.png"
            alt="연령별 성장 플랜"
            width={1200}
            height={557}
            className={s.image}
          />
        </div>

        <RoundedBanner className={s.banner}>
          성장은 목표가 아니라 결과입니다.
        </RoundedBanner>

        <div className={s.description_wrapper}>
          <p>
            성장기에 있어 아이의 건강 이상은 성장에 큰 영향을 가져옵니다.
            <br />
            이는 곧 아이의 건강 문제를 치료하면 성장은 절로 이루어 진다는
            뜻입니다.
            <br />
            성장은 목표가 아니라 결과입니다. 본수호한의원에서 아이의 건강을
            지키세요!
          </p>
        </div>
      </Wrapper>
    </div>
  );
}
