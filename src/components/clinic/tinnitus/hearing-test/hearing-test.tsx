import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./hearing-test.module.scss";
import SectionTitle from "@/components/common/section-title/section-title";
import { cx } from "@/libs/utils";

export default function HearingTest() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="청각세포 손상여부 보다 정확하게!">
          고해상도 다면 <span className={s.orange}>미세청력검사</span>
        </SectionTitle>

        <div className={s.versus_wrapper}>
          <div className={cx(s.circle, s.circle_left)}>
            <strong className={s.strong}>6밴드</strong>
            <span className={s.bottom_text}>기존이비인후과</span>
          </div>

          <div className={s.versus}>VS</div>

          <div className={cx(s.circle)}>
            <strong className={cx(s.orange, s.strong)}>
              67밴드
              <br />
              (최대 134밴드)
            </strong>
            <span className={s.bottom_text}>본수호한의원</span>
          </div>
        </div>

        <p className={s.description}>
          <strong>
            현재 이비인후과에서 시행하는 검사법은 6밴드 청력 검사 입니다.
          </strong>
          <br />이 검사는 이명을 일으키는 주파수 영역에서 매우 좁은 부분만을 볼
          수 있습니다.
          <br />
          그에 비해{" "}
          <strong>
            본수호한의원에서는 67밴드(최대 134밴드) 범위의 미세청력검사
          </strong>
          가 가능하여 기존 6밴드 검사에 비해 실제 청각세포(유모세포)의 손상
          여부를 보다 정확하게 파악할 수 있습니다.
        </p>
      </Wrapper>
    </div>
  );
}
