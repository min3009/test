import RoundedBanner from "@/components/ui/rounded-banner/rounded-banner";
import s from "./hero.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";

export default function Hero() {
  return (
    <div className={s.wrapper}>
      <Wrapper className={s.max_wrapper}>
        <div className={s.hero_text_wrapper}>
          <h1 className={s.h1}>
            안면질환
            <br />
            초기치료가 중요합니다!
          </h1>
          <RoundedBanner className={s.banner}>본수호 안면 클리닉</RoundedBanner>
          <p className={s.description}>
            안면질환,
            <br />
            초기 골든타임을 넘기지 않도록!
          </p>
        </div>
      </Wrapper>
    </div>
  );
}
