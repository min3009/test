import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./hearing-loss.module.scss";
import SectionTitle from "@/components/common/section-title/section-title";
import Image from "next/image";
import CallOut from "@/components/ui/call-out/call-out";

export default function HearingLoss() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="세상과의 연결, 본수호 한의원이 함께 하겠습니다.">
          이명과 난청
        </SectionTitle>

        <Image
          src="/assets/tinnitus_hearing_loss.png"
          alt="이명과 난청"
          width={1200}
          height={790}
          className={s.image}
        />

        <CallOut className={s.call_out}>
          이명과 난청은 단순한 귀 질환이 아니라 전신질환입니다.
        </CallOut>

        <p className={s.description}>
          귀 주변의 구조적인 문제해결을 넘어 전신적인 관점에서 소리 전달 체계에
          문제를 일으키는 원인들을 해소해주어야
          <br />
          이명·난청에서 벗어날 수 있습니다.
        </p>
      </Wrapper>
    </div>
  );
}
