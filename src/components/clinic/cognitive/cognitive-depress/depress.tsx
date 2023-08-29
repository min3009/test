import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./depress.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";

export default function TemporalBone() {
  return (
    <>
      <div className={s.main_bg}>
        <Wrapper>
          <div className={s.text_wrapper}>
            <SectionTitle description="난치성 뇌 질환, 뇌만의 문제일까?">
              <strong>우울한 마음</strong>과 <strong>무기력한 신체문제</strong>까지
            </SectionTitle>

            <div className={s.depress_cotent}>
              <Image src="/assets/depress.png" alt="경정맥공" width={1200} height={380} className={s.depress_img} />
              <div className={s.depress_desc}>
                <p>
                  인지능력 저하, 치매, 파킨슨병 등 뇌 질환의 원인은 뇌 자체의 문제만이 아닐 수 있습니다. 다양한 검사를
                  통해 신체적인 원인 분석과 기능적인 원인까지 찾아내는 것이 매우 중요합니다.
                  <br />
                  <br />
                  본수호한의원은 한의학적인 관점에서 기능적인 원인을 찾아내고 신경인지학, 뇌신경과학, 심신의학을
                  기반으로 본수호 연구소의 객관적인 연구를 바탕으로 뇌질환의 원인을 추적합니다.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
