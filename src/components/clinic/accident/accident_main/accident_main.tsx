import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./accident_main.module.scss";
import SectionTitle from "@/components/common/section-title/section-title";
import { cx } from "@/libs/utils";
import Image from "next/image";
import RoundedBanner from "@/components/ui/rounded-banner/rounded-banner";

export default function Accident_main() {
  return (
    <>
      <div className={s.background}>
        <Wrapper>
          <div className={s.hero_title_wrapper}>
            <h1>
              교통사고 후유증,
              <br />
              골든타임 놓치지 마세요!
            </h1>
            <RoundedBanner className={s.banner}>
              본수호 교통사고 클리닉
            </RoundedBanner>
            <p>
              연령에 맞는 적합한 치료로
              <br />
              건강도 체력도 집중력도 UP!
            </p>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <SectionTitle
          description="1:1 맞춤형 진료와 치료!"
          children="교통사고 후유증 통합 클리닉"
          className={s.section2}
        />
        <div className={s.c_wrap}>
          <div className={s.circles}>
            <div className={cx(s.circle, s.c_1)}>
              <Image
                src="/assets/acci_2.png"
                alt="뼈"
                width={120}
                height={120}
                className={s.c_i}
              />
              <p className={s.c_text}>
                뼈/골격 손상
                <br />
                정상화
              </p>
            </div>
            <div className={cx(s.circle, s.c_2)}>
              <Image
                src="/assets/acci_3.png"
                alt="근육"
                width={120}
                height={120}
                className={s.c_i}
              />
              <p className={s.c_text}>
                근육/인대 손상
                <br />
                정상화
              </p>
            </div>
            <div className={cx(s.circle, s.c_3)}>
              <Image
                src="/assets/acci_4.png"
                alt="뇌"
                width={120}
                height={120}
                className={s.c_i}
              />
              <p className={s.c_text}>
                자율신경 실조
                <br />
                정상화
              </p>
            </div>
          </div>
        </div>
        <h4 className={s.c_title}>
          본수호한의원에서는 전방위적인 진단을 기반으로 치료합니다.
        </h4>
        <p className={s.c_detail}>
          교통사고는 치료는 다양한 요인들이 고려되어야 합니다.
          본수호한의원에서는 탑승 위치, 차량 종류, 사고 부위 등
          <br />
          교통사고 당시의 물리적인 요인들을 꼼꼼히 살피고 손상의 부위와 정도를
          예측하여 교통사고 후유증을 치료합니다.
        </p>
      </Wrapper>
      <div className={s.gray_back}>
        <Wrapper>
          <div className={s.section3}>
            <p className={s.des}>다같은 통증이 아닙니다!</p>
            <h2 className={s.title}>
              교통사고 후유증의
              <span className={s.point}>증상</span>
            </h2>
          </div>
          <p className={s.sec3_detail}>
            교통사고 후유증은 원인에 따라 다양한 증상을 유발합니다. 신체적인
            증상을 넘어 심리적인 문제로도 발전할 수 있기에 적절한
            <br />
            시기에 빠른 대처와 치료가 필요합니다.
          </p>
          <div className={s.items}>
            <div className={s.item}>
              <Image
                src="/assets/acci_5.png"
                alt="뼈/골격 손상"
                width={390}
                height={240}
              />
              <p className={s.item_title}>뼈/골격 손상</p>
              <p className={s.item_detail}>
                · 척추 및 관절 통증
                <br />
                · 갈비뼈 통증
                <br />
                · 골절 및 디스크 증상
                <br />· 수술 후 통증
              </p>
            </div>
            <div className={s.item}>
              <Image
                src="/assets/acci_6.png"
                alt="근육/인대 손상"
                width={390}
                height={240}
              />
              <p className={s.item_title}>근육/인대 손상</p>
              <p className={s.item_detail}>
                · 경추 염좌/연골 손상
                <br />
                · 근육의 긴장
                <br />
                · 전신 근육통
                <br />· 가동범위 제한
              </p>
            </div>
            <div className={s.item}>
              <Image
                src="/assets/acci_7.png"
                alt="자율신경 실조"
                width={390}
                height={240}
              />
              <p className={s.item_title}>자율신경 실조</p>
              <p className={s.item_detail}>
                · 이명, 어지러움
                <br />
                · 기립성 저혈압 및 수족냉증
                <br />
                · 두통/수면장애
                <br />· 우울증/가슴 두근거림
              </p>
            </div>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className={s.section4}>
          <p className={s.des}>교통사고 후유증 치료 전후 결과</p>
          <h2 className={s.title}>
            <span className={s.point}>직접 확인</span>하세요!
          </h2>
        </div>
        <p className={s.sec4_detail}>
          교통사고 후유증의 증상은 때로 엑스레이, CT와 MRI 검사를 비롯한 검사로
          결과가 나오지 않은 경우도 많습니다.
          <br />
          본수호한의원에서는 혈액순환이 잘 되지 않으면 체열이 떨어지는 원리를
          통해 체열진단기로 이를 확인하고 진단하고 있습니다.
          <br />
          직접 통증 부위의 개선 정도를 눈으로 확인할 수 있습니다.
        </p>
        <div className={s.sec4_items}>
          <div className={s.sec4_item}>
            <div className={s.sec4_box}>
              <div className={s.s4_b_title}>
                치<br />료<br />전
              </div>
              <Image
                src="/assets/acci_8.png"
                alt="치료전"
                width={533.33}
                height={400}
                className={s.s4_b_i}
              />
              <div className={s.s4_b_i}></div>
            </div>
            <p className={s.sec4_text}>
              교통사고로 인한 목과 허리 문제로 혈액순환 저하
            </p>
          </div>
          <div className={s.sec4_item}>
            <div className={s.sec4_box}>
              <div className={s.s4_b_title}>
                치<br />료<br />후
              </div>
              <Image
                src="/assets/acci_9.png"
                alt="치료후"
                width={533.33}
                height={400}
                className={s.s4_b_i}
              />
              <div className={s.s4_b_i}></div>
            </div>
            <p className={s.sec4_text}>
              목과 허리 통증 치료후 정상적인 체온분포로 혈액순환 활성화
            </p>
          </div>
        </div>
      </Wrapper>
      <div className={s.gray_back}>
        <Wrapper>
          <div className={s.section5}>
            <p className={s.des}>건강의 기본은 면역력!</p>
            <h2 className={s.title}>
              본수호
              <span className={s.point}> 교통사고후유증 </span>치료
            </h2>
          </div>
          <div className={s.sec5_detail}>
            <Image
              src="/assets/acci_10.png"
              alt="교통사고후유증"
              width={600}
              height={395}
            />
            <div className={s.sec5_items}>
              <div className={s.sec5_item}>
                <Image
                  src="/assets/acci_11.png"
                  alt="체크"
                  width={50}
                  height={50}
                  className={s.sec5_i_i}
                />
                <p className={s.sec5_i_text}>근본적인 통증 치료</p>
              </div>
              <div className={s.sec5_item}>
                <Image
                  src="/assets/acci_11.png"
                  alt="체크"
                  width={50}
                  height={50}
                  className={s.sec5_i_i}
                />
                <p className={s.sec5_i_text}>눈에 보이지 않은 통증 예측</p>
              </div>
              <div className={s.sec5_item}>
                <Image
                  src="/assets/acci_11.png"
                  alt="체크"
                  width={50}
                  height={50}
                  className={s.sec5_i_i}
                />
                <p className={s.sec5_i_text}>개인별 맞춤 치료 설계</p>
              </div>
              <div className={s.sec5_item}>
                <Image
                  src="/assets/acci_11.png"
                  alt="체크"
                  width={50}
                  height={50}
                  className={s.sec5_i_i}
                />
                <p className={s.sec5_i_text}>복합 통증 진료</p>
              </div>
            </div>
          </div>
          <div className={s.sec5_bottom}>
            <h4 className={s.sec5_text}>
              본수호한의원에서는 전방위적인 진단을 기반으로 치료합니다.
            </h4>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
