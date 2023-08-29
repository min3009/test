import Image from "next/image";
import { HTMLAttributes } from "react";
import { cx } from "@/libs/utils";
import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./process.module.scss";

export default function Process(props: HTMLAttributes<HTMLElement>) {
  const { className } = props;

  return (
    <div className={cx(s.total, className ?? "")}>
      <Wrapper>
        <h4 className={s.intro}>효과적인 몸 수호 치료 솔루션</h4>
        <h2 className={s.title}>치료 프로세스</h2>
        <div className={s.process}>
          <div className={s.p_item}>
            <Image
              src="/assets/process1.png"
              alt="문진 및 진맥"
              width={300}
              height={300}
            />
            <div className={s.p_text}>
              <div className={s.subheading}>01 │문진 및 진맥</div>
              <div>
                <p className={s.detail}>
                  원장님과 자세한 문진 및 상담을 진행합니다.
                </p>
              </div>
            </div>
          </div>
          <div className={s.p_item}>
            <Image
              src="/assets/process2.png"
              alt="추나요법"
              width={300}
              height={300}
            />
            <div className={s.p_text}>
              <div className={s.subheading}>02 │추나요법</div>
              <div>
                <p className={s.detail}>
                  일반 정골, 근막 추나와 두개천골추나를 진행합니다.
                </p>
              </div>
            </div>
          </div>
          <div className={s.p_item}>
            <Image
              src="/assets/process3.png"
              alt="한방치료"
              width={300}
              height={300}
            />
            <div className={s.p_text}>
              <div className={s.subheading}>03 │한방치료</div>
              <div>
                <p className={s.detail}>
                  개인 증상에 알맞는 매선, 약침, 한약 치료 등을 진행합니다.
                </p>
              </div>
            </div>
          </div>
          <div className={s.p_item}>
            <Image
              src="/assets/process4.png"
              alt="물리치료 및 MID 견인치료"
              width={300}
              height={300}
            />
            <div className={s.p_text}>
              <div className={s.subheading}>04 │물리치료 및 MID 견인치료</div>
              <div>
                <p className={s.detail}>
                  환자별 맞춤 물리치료와 MID 견인치료를 진행합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
