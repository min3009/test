import s from "./last-message.module.scss";

export default function LastMessage() {
  return (
    <div className={s.wrapper}>
      <div className={s.message_wrapper}>
        <h3 className={s.h3}>
          원인 불명, 난치, 신경성이라고 불리는
          <br />
          현대인들의 만성질환을 치료합니다.
        </h3>

        <hr className={s.divider} />

        <p className={s.questions}>
          만성, 난치성, 악성, 자가면역성 질환을 진단받으셨나요?
          <br />
          근골격계 통증을 이유로 수술적 치료를 권유 받으셨나요?
          <br />
          병원에서 앞으로 평생 약을 복용해야 한다는 말을 들으셨나요?
          <br />
          원인을 찾지 못하는 문제로 약을 늘려가고 계신가요?
        </p>

        <p className={s.description}>
          원인불명의 난치 질환으로 고통받는 분들께 근본적인 치료에 대한 희망을
          드리고 싶다는 일념 하나로, 30번이 넘는 해외연수와 100회 이상의 국내
          세미나에 참여하며 제 의업의 화두였던 골반과 머리뼈의 뒤틀림에 대한
          나름의 지견과 답을 찾을 수 있게 되었습니다. 난치성 질환 본수호와 함께
          하세요!
        </p>
      </div>
    </div>
  );
}
