import CircleText from "@/components/common/circle-text/circle-text";
import SectionTitle from "@/components/common/section-title/section-title";
import s from "./dysfunction.module.scss";
import { cx } from "@/libs/utils";
import Wrapper from "@/components/ui/wrapper/wrapper";
import Image from "next/image";

export default function Dysfunction() {
  return (
    <div className={s.wrapper}>
      <div className={s.inner_wrapper}>
        <Wrapper>
          <SectionTitle description="난치성 질환의 대표적인 원인!">
            자율신경 실조증
          </SectionTitle>

          <div className={s.circle_wrapper}>
            <CircleText type="yellow">
              <h3 className={s.h3}>
                <span>방출하는 에너지</span>
                <strong className={s.strong}>교감신경</strong>
              </h3>
              <hr className={cx(s.hr, s.somatic)} />
              <p className={s.description}>
                급박한 상황이나 흥분된 상
                <br />
                황에 주로 활성화
              </p>
            </CircleText>

            <div>
              <h3 className={s.h3}>
                <span>서로 반대되는 역할</span>
                <strong className={s.strong}>길항작용</strong>
              </h3>
            </div>

            <CircleText type="orange">
              <h3 className={s.h3}>
                <span>비축하는 에너지</span>
                <strong className={s.strong}>부교감신경</strong>
              </h3>
              <hr className={cx(s.hr, s.somatic)} />
              <p className={s.description}>
                몸과 마음이 편안한 상황에
                <br />
                주로 활성화
              </p>
            </CircleText>
          </div>
        </Wrapper>
      </div>

      <Wrapper>
        <div className={s.see_saw_wrapper}>
          <div className={s.see_saw}>
            <div className={s.title}>
              <h4>균형있는 길항작용</h4>
              <p>몸과 마음이 조화로운 상태로 건강을 유지합니다.</p>
            </div>
            <Image
              className={s.image}
              src="/assets/sympathetic_see_saw1.png"
              alt="균형있는 길항작용"
              width={1200}
              height={600}
            />
          </div>

          <div className={cx(s.see_saw, s.second)}>
            <div className={s.title}>
              <h4>한쪽으로 치우친 길항작용</h4>
              <p>
                자율신경 실조증으로 다양한 난치성 질환이 나타날 수 있습니다.
              </p>
            </div>
            <Image
              className={s.image}
              src="/assets/sympathetic_see_saw2.png"
              alt="한쪽으로 치우친 길항작용"
              width={1200}
              height={600}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
