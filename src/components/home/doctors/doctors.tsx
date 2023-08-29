import Image from "next/image";
import s from "./doctors.module.scss";
import { cx } from "@/libs/utils";
import Wrapper from "@/components/ui/wrapper/wrapper";

const list = [
  "의료진 전원 정기적인 연구활동",
  "의료진 전원 추나학회 회원",
  "난치성 질환의 풍부한 임상경력",
  "두개천골추나(두개천골치료) 1세대",
];

// TODO: fix styles

export default function Doctors() {
  return (
    <div className={s.wrapper}>
      <Wrapper className={s.flex}>
        <div className={s.figures_wrapper}>
          <div className={cx(s.figure, s.parksooho)}>
            <Image
              src="/assets/parksooho.png"
              alt="대표원장 박수호"
              width={480}
              height={950}
            />
            <h4 className={s.title}>
              대표원장 <strong>박수호</strong>
            </h4>
          </div>

          <div className={cx(s.figure, s.parkjinho)}>
            <Image
              src="/assets/parkjinho.png"
              alt="진료원장 박진호"
              width={480}
              height={950}
            />
            <h4 className={s.title}>
              진료원장 <strong>박진호</strong>
            </h4>
          </div>

          <div className={cx(s.figure, s.jangeunha)}>
            <Image
              src="/assets/jangeunha.png"
              alt="진료원장 장은하"
              width={480}
              height={950}
            />
            <h4 className={s.title}>
              진료원장 <strong>장은하</strong>
            </h4>
          </div>
        </div>

        <div className={s.text_wrapper}>
          <h3 className={s.h3}>
            건강한 일상,
            <br />
            <span className={s.orange}>
              <span className={s.bonsooho}>본</span>
              <span className={s.bonsooho}>수</span>
              <span className={s.bonsooho}>호</span>
              가 항상 곁에서
              <br />
              함께합니다.
            </span>
          </h3>

          <hr className={s.hr} />

          <p className={s.description}>
            본수호한의원의 원천기술은 사람입니다.
            <br />
            꾸준히 공부하는 의료진과 사명을 함께 만들고 성장하는 팀원이
            <br />
            본수호한의원을 더욱 발전시킬 수 있는 원동력입니다.
          </p>

          <hr className={s.hr} />

          <ol className={s.list}>
            {list.map((item, idx) => (
              <li key={`doctor-${item}`} className={s.item}>
                <span className={s.number}>{idx + 1}</span>{" "}
                <span className={s.divider}>|</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </Wrapper>
    </div>
  );
}
