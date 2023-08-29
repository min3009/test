import SectionTitle from "@/components/common/section-title/section-title";
import s from "./growth-plan2.module.scss";
import Image from "next/image";
import RoundedBanner from "@/components/ui/rounded-banner/rounded-banner";
import Wrapper from "@/components/ui/wrapper/wrapper";

export default function GrowthPlan2() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="올바른 성장, 타이밍이 중요합니다.">
          연령별 <span className={s.orange}>성장 플랜</span>
        </SectionTitle>

        <div className={s.plan_wrapper}>
          <div className={s.plan}>
            <RoundedBanner>나이별 성장속도 그래프</RoundedBanner>
            <Image
              src="/assets/clinic_growth_plan_graph.png"
              alt="연령별 성장 플랜"
              width={1200}
              height={557}
              className={s.image}
            />
          </div>

          <div className={s.plan}>
            <RoundedBanner>나이별 성장 속도의 변화</RoundedBanner>
            <Image
              src="/assets/clinic_growth_plan_table.png"
              alt="연령별 성장 플랜"
              width={1200}
              height={557}
              className={s.image}
            />
          </div>
        </div>

        <div className={s.description_wrapper}>
          <p>
            아이의 성장을 결정하는 요인은 약 23%의 선천적인 요인도 있지만, 약
            77%의 후천적인 요인을 꾸준히 관리해준다면
            <br />
            아이의 숨겨진 키를 더 키워둘 수 있습니다.
          </p>
        </div>
      </Wrapper>
    </div>
  );
}
