import RoundedBanner from "@/components/ui/rounded-banner/rounded-banner";
import s from "./hero.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";

export default function Hero() {
  return (
    <div className={s.wrapper}>
      <Wrapper className={s.max_wrapper}>
        <div className={s.hero_text_wrapper}>
          <h1 className={s.h1}>
            청각 세포 활성화,
            <br />
            청력 회복 프로젝트!
          </h1>
          <RoundedBanner className={s.banner}>본수호 이명 클리닉</RoundedBanner>
          <p className={s.description}>
            검사부터 다르다!
            <br />
            원인을 알고 치료합니다.
          </p>
        </div>
      </Wrapper>
    </div>
  );
}
