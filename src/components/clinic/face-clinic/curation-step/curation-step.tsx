import SectionTitle from "@/components/common/section-title/section-title";
import s from "./curation-step.module.scss";
import { cx } from "@/libs/utils";
import Wrapper from "@/components/ui/wrapper/wrapper";

export default function CurationStep() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="안면신경길을 열어요!">
          안면마비 <span className={s.orange}>치료 STEP</span>
        </SectionTitle>

        <div className={s.c_wrap}>
          <div className={s.circles}>
            <div className={cx(s.circle, s.c_1)}>
              <span className={s.number}>01</span>
              <hr className={s.hr} />
              <p className={s.c_text}>
                안면신경세포
                <br />
                활성화
              </p>
            </div>
            <div className={cx(s.circle, s.c_2)}>
              <span className={s.number}>02</span>
              <hr className={s.hr} />
              <p className={s.c_text}>
                안면신경길
                <br />
                복구
              </p>
            </div>
            <div className={cx(s.circle, s.c_3)}>
              <span className={s.number}>03</span>
              <hr className={s.hr} />
              <p className={s.c_text}>
                구안와사
                <br />
                소멸
              </p>
            </div>
          </div>
        </div>

        <p className={s.description}>
          안면신경은 뇌하부의 안면신경길을 통해 얼굴에 전달됩니다.
          구안와사(안면마비)는 안면신경길의 신호체계 이상으로
          <br />
          발생합니다. 안면신경은 더디지만 재생이 됩니다. 안면신경세포를
          활성화하고 마비된 안면근육을 풀어주며, 신경체계를 교정한다면
          구안와사는 소멸될 수 있습니다.
        </p>
      </Wrapper>
    </div>
  );
}
