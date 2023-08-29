import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./pain_main.module.scss";
import SectionTitle from "@/components/common/section-title/section-title";
import Image from "next/image";

export default function Pain_main() {
  return (
    <>
      <div className={s.background}>
        <Wrapper>
          <div className={s.main}>
            <h2 className={s.sub_title}>
              나을 듯 낫지 않은 통증,
              <br />
              증상만을 바라봐서는 안됩니다.
            </h2>
            <h4 className={s.main_title}>본수호 통증 클리닉</h4>
            <p className={s.main_text}>
              본수호 전신 통합치료로
              <br />
              건강을 지키세요!
            </p>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <SectionTitle
          description="본수로 통증 치료의 핵심!"
          children="전신을 바라보는 통합치료"
          className={s.section2}
        />
        <div className={s.sec2_detail}>
          <Image src="/assets/pain_2.png" alt="전신" width={1000} height={524} />
          <h4 className={s.sec2_text}>나을 듯 낫지 않는 통증, 증상만 치료해서는 안됩니다.</h4>
        </div>
        <p className={s.sec2_explain}>
          통증은 단순히 어떤 부위가 아픈 증상이지만 원인은 아주 다양합니다. 방치할 경우 2차 신체문제까지 일으키는 만큼
          빠른 치료가 필요합니다. 본수호한의원은 통증을 일으키는 원인을 찾는데 집중하고 전신적인 관점에서 몸 전체를
          살피는 통합 치료를 시행하고 있습니다. 그동안 괴롭히던 통증에서 벗어나세요
        </p>
      </Wrapper>
      <div className={s.gray_back}>
        <Wrapper>
          <div className={s.section3}>
            <p className={s.des}>개인에게 적합한 치료를 진행합니다.</p>
            <h2 className={s.title}>
              본수호
              <span className={s.point}> 통증 </span>치료
            </h2>
          </div>
          <div className={s.sec3_bottom}>
            <div className={s.sec3_detail}>
              <Image src="/assets/pain_3.png" alt="상담" width={600} height={395} />
              <div className={s.sec3_items}>
                <div className={s.sec3_item}>
                  <Image src="/assets/check.png" alt="체크" width={50} height={50} className={s.sec3_i_image} />
                  <p className={s.sec3_i_text}>근본적인 통증 치료</p>
                </div>
                <div className={s.sec3_item}>
                  <Image src="/assets/check.png" alt="체크" width={50} height={50} className={s.sec3_i_image} />
                  <p className={s.sec3_i_text}>눈에 보이지 않은 통증 예측</p>
                </div>
                <div className={s.sec3_item}>
                  <Image src="/assets/check.png" alt="체크" width={50} height={50} className={s.sec3_i_image} />
                  <p className={s.sec3_i_text}>개인별 맞춤 치료 설계</p>
                </div>
                <div className={s.sec3_item}>
                  <Image src="/assets/check.png" alt="체크" width={50} height={50} className={s.sec3_i_image} />
                  <p className={s.sec3_i_text}>복합 통증 진료</p>
                </div>
              </div>
            </div>
            <h4 className={s.sec3_b_text}>손상된 부위의 치료부터 보이지 않은 교통사고 후유증까지 해결해보세요!</h4>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
