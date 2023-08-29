import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./cognitive-solve.module.scss";
import SectionTitle from "@/components/common/section-title/section-title";
import { cx } from "@/libs/utils";

export default function Cognitive() {
  return (
    <>
      <div className={s.main_content_img}>
        <Wrapper>
          <div className={s.main_content}>
            <h2 className={s.h2}>
              인지장애의 해답,
              <br />
              자율신경계에서 찾다!
            </h2>
            <h3 className={s.h3}>본수호 인지장애 클리닉</h3>
            <p>
              난치성 뇌 질환,
              <br />뇌 자체의 문제가 아닐 수 있습니다.
            </p>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className={s.sub_content}>
          <div className={s.content_title}>
            <SectionTitle description="인지장애, 자율신경과 관련이 깊습니다.">
              본수호 <strong>인지장애</strong> 클리닉
            </SectionTitle>
          </div>
          <div className={s.content_desc}>
            <p>
              파킨슨병, 치매, 중풍, 두통, 불면증 등을 비롯해 다양한 뇌질환으로 인해 기억력이나 집중력 등이 저하되고
              일상생활에 많은 불편함을 느끼고 있다면 인지장애를 앓고 있을 수 있습니다. 본수호한의원에서는 두개천골치료를
              비롯해 다양한 한방요법을 통해 뇌 뿐만 아니라 전신을 활성화하고 자율신경을 안정시켜 다양한 인지장애를
              치료하고 있습니다.
            </p>
          </div>
          <div className={s.circles}>
            <div className={cx(s.circle, s.c_1)}>
              <p className={s.c_text}>퍼킨슨병</p>
            </div>
            <div className={cx(s.circle, s.c_2)}>
              <p className={s.c_text}>치매</p>
            </div>
            <div className={cx(s.circle, s.c_3)}>
              <p className={s.c_text}>중풍</p>
            </div>
            <div className={cx(s.circle, s.c_4)}>
              <p className={s.c_text}>두통</p>
            </div>
            <div className={cx(s.circle, s.c_5)}>
              <p className={s.c_text}>불면증</p>
            </div>
            <div className={cx(s.circle, s.c_6)}>
              <p className={s.c_text}>우울/불안</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
