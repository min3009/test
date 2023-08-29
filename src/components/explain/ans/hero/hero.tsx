import { cx } from "@/libs/utils";
import SectionTitle from "../../../common/section-title/section-title";
import s from "./hero.module.scss";
import CircleText from "@/components/common/circle-text/circle-text";

export default function Hero() {
  return (
    <div className={s.wrapper}>
      <SectionTitle description="두개골-척추-천골의 바른 정렬은 자율신경에 지대한 영향을 줍니다.">
        자율신경이란?
      </SectionTitle>

      <div className={s.circle_wrapper}>
        <CircleText type="yellow">
          <h3 className={s.h3}>
            <span>의지대로 움직이는</span>
            <strong className={s.strong}>체성신경</strong>
          </h3>
          <hr className={cx(s.hr, s.somatic)} />
          <p className={s.description}>
            의지대로 말하고
            <br />
            움직이과 활동하는 등
          </p>
        </CircleText>
        <CircleText type="orange">
          <h3 className={s.h3}>
            <span>의지와 상관없는</span>
            <strong className={s.strong}>자율신경</strong>
          </h3>
          <hr className={cx(s.hr, s.autonomic)} />
          <p className={s.description}>
            음식물 소화, 심장이뛰고,
            <br />
            땀을 내는 등
          </p>
        </CircleText>
      </div>

      <div className={s.description_wrapper}>
        <p className={s.bold}>
          우리 몸의 신경은 크게 두가지로 나눌수 있습니다.
        </p>
        <p>
          말을 하고 활동을 하는 등 내 의지대로 움직이는 신경을 담당하는
          체성신경과
          <br />
          나의 의지와는 상관없이 움직이는 신경을 담당하는 자율신경으로 나눌 수
          있습니다.
        </p>
        <p className={s.bold}>
          그 중 자율신경은 두개골과 척추 건강과 긴밀한 관계를 가지고 있으며,
          이는 우리 건강과 직결됩니다.
        </p>
      </div>
    </div>
  );
}
