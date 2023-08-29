import RoundedBanner from "@/components/ui/rounded-banner/rounded-banner";
import s from "./hero.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";

export default function Hero() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <div className={s.hero_title_wrapper}>
          <h1>
            건강을 바로 잡으면
            <br />
            올바른 성장으로 이어집니다!
          </h1>
          <RoundedBanner className={s.banner}>
            본수호 소아성장 클리닉
          </RoundedBanner>
          <p>
            연령에 맞는 적합한 치료로
            <br />
            건강도 체력도 집중력도 UP!
          </p>
        </div>
      </Wrapper>
    </div>
  );
}
