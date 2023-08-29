import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <div className={s.hero_intro_box}>
          <Image
            src="/assets/what_is_vagus_nerve.png"
            alt="미주신경"
            width={500}
            height={1000}
            className={s.hero_intro_box_image}
          />

          <div className={s.percentage_box_wrapper}>
            <div className={s.percentage_box}>
              <h3 className={s.h3}>
                미주신경<strong>80%</strong>
              </h3>
              <hr className={s.hr} />
              <p className={s.description}>
                내장기 신호를
                <br />
                뇌로 보내는 역할
              </p>
            </div>
            <div className={s.percentage_box}>
              <h3 className={s.h3}>
                미주신경<strong>20%</strong>
              </h3>
              <hr className={s.hr} />
              <p className={s.description}>
                뇌와 몸을
                <br />
                연결하는 역할
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
