import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./pain_main2.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";
import { cx } from "@/libs/utils";

export default function Pain_main2() {
  return (
    <>
      <div className={s.gray_back}>
        <Wrapper>
          <div className={s.section1}>
            <p className={s.des}>원인모를 통증때문에 걱정이신가요?</p>
            <h2 className={s.title}>
              <span className={s.point}>이유없는 통증</span>도 잡습니다!
            </h2>
          </div>
          <h5 className={s.sec1_explain}>
            두개천골치료를 통해 신체의 구조의 안정과 자율신경의 조화를 이루고 건강한 몸을 유지하는 것을 목표로 합니다.
          </h5>
          <div className={s.sec1_items}>
            <div className={s.sec1_item}>
              <Image src="/assets/pain_4.png" alt="두통" width={280} height={280} className={s.sec1_i_image} />
              <p className={s.sec1_i_text}>
                어지럽고 예민한 두통,
                <br />
                불안감, 불면증
              </p>
            </div>
            <div className={s.sec1_item}>
              <Image src="/assets/pain_5.png" alt="근육통" width={280} height={280} className={s.sec1_i_image} />
              <p className={s.sec1_i_text}>
                결리고 경직된 근육,
                <br />
                쑤시고 떨리는 통증
              </p>
            </div>
            <div className={s.sec1_item}>
              <Image src="/assets/pain_6.png" alt="불편감" width={280} height={280} className={s.sec1_i_image} />
              <p className={s.sec1_i_text}>
                온몸이 이유없이
                <br />
                쑤시고 아픈 불편감
              </p>
            </div>
            <div className={s.sec1_item}>
              <Image src="/assets/pain_7.png" alt="피로" width={280} height={280} className={s.sec1_i_image} />
              <p className={s.sec1_i_text}>
                만성피로, 체력 저하
                <br />
                집중력 감소
              </p>
            </div>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className={s.section2}>
          <p className={s.des}>통증의 악순환에서 벗어나세요!</p>
          <h2 className={s.title}>
            근골격 질환의
            <span className={s.point}> 단계적 증상</span>
          </h2>
        </div>
        <h5 className={s.sec2_explain}>
          교통사고 후유증은 원인에 따라 다양한 증상을 유발합니다. 신체적인 증상을 넘어 심리적인 문제로도 발전할 수
          있기에 적절한 시기에 빠른 대처와 치료가 필요합니다.
        </h5>
        <div className={s.sec2_items}>
          <div className={s.sec2_item}>
            <div className={s.sec2_i_left}>
              <Image src="/assets/pain_8.png" alt="1단계" width={550} height={350} />
              <p className={s.s2_l_text}>1단계 │ 불편한 움직임</p>
            </div>
            <div className={s.sec2_i_right}>
              <p className={s.s2_r_title}>
                일상적인 동작에서 종종 불편함을 느끼지만 생활에서 큰 문제로 나타나지 않음 단계
              </p>
              <p className={s.s2_r_text}>
                탑승자의 몸통 부위가 가장 먼저 가속을 받게 되고
                <br />
                머리와 목은 고정한 상태를 유지합니다.
                <br />
                척추는 골곡이 곧게 펴지면서 경추가 압박됩니다.
              </p>
            </div>
          </div>
          <div className={s.sec2_item}>
            <div className={s.sec2_i_left}>
              <Image src="/assets/pain_9.png" alt="2단계" width={550} height={350} />
              <p className={s.s2_l_text}>2단계 │ 심화되는 통증</p>
            </div>
            <div className={s.sec2_i_right}>
              <p className={s.s2_r_title}>움직일 때만 느껴졌던 불편함이 통증으로 이어지고 점점 심해지는 단계</p>
              <p className={s.s2_r_text}>
                머리가 하악골로부터 후상방으로 움직이면서 자발적인 주동근/길항근의 조절 없이 20-25도 이상 각도로 열리게
                되면서 염좌와 디스크의 압박현상을 일으킵니다. 몸통은 가속되고 머리는 신전되는 운동방향의 엇갈림에 의해
                경흉추부위에 전단손상이 발생합니다.
              </p>
            </div>
          </div>
          <div className={s.sec2_item}>
            <div className={s.sec2_i_left}>
              <Image src="/assets/pain_10.png" alt="3단계" width={550} height={350} />
              <p className={s.s2_l_text}>3단계 │ 동작의 제한</p>
            </div>
            <div className={s.sec2_i_right}>
              <p className={s.s2_r_title}>
                참을 수 없는 통증이 느껴지고 근조직이 딱딱하게 굳어 의지대로 몸이 움직여지지 않는 단계
              </p>
              <p className={s.s2_r_text}>
                점차 자동차의 가속력이 감소되면서 머리, 몸통의
                <br />
                가속력은 최대치에 도달하여 경흉추부위의 비틀림이
                <br />
                최대화됩니다.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className={s.gray_back}>
        <Wrapper>
          <div className={s.section3}>
            <p className={s.des}>다같은 통증이 아닙니다!</p>
            <h2 className={s.title}>
              <span className={s.point}>급성통증과 만성통증</span>
            </h2>
          </div>
          <div className={s.sec3_items}>
            <div className={s.sec3_item}>
              <Image src="/assets/pain_11.png" alt="어깨통증" width={350} height={350} />
              <div className={s.s3_i_text}>
                <div className={s.s3_t_top}>
                  <h4 className={s.s3_top_title}>급성통증이란?</h4>
                  <p className={s.sec3_top_sub}>편타성손상(교통사고후유증), 단순 통증 등</p>
                </div>
                <p className={s.sec3_t_bottom}>
                  급성 통증은 상처를 입었거나 팔다리가 골절되었을 때처럼 특정 세포조직이 손상되었을 때 나타납니다.
                  환자가 통증을 대부분 인지하기 때문에 진단이 비교적 쉽고 완치율이 높은 특징을 가지고 있습니다. 세포
                  조직이 회복되면 통증은 사라지는데 보통 6개월 미만이 소요됩니다.
                </p>
              </div>
            </div>
            <div className={s.sec3_item}>
              <div className={s.s3_i_text}>
                <div className={s.s3_t_top}>
                  <h4 className={s.s3_top_title}>급성통증이란?</h4>
                  <p className={s.sec3_top_sub}>편타성손상(교통사고후유증), 단순 통증 등</p>
                </div>
                <p className={s.sec3_t_bottom}>
                  급성 통증은 상처를 입었거나 팔다리가 골절되었을 때처럼 특정 세포조직이 손상되었을 때 나타납니다.
                  환자가 통증을 대부분 인지하기 때문에 진단이 비교적 쉽고 완치율이 높은 특징을 가지고 있습니다. 세포
                  조직이 회복되면 통증은 사라지는데 보통 6개월 미만이 소요됩니다.
                </p>
              </div>
              <Image src="/assets/pain_12.png" alt="어깨통증" width={350} height={350} />
            </div>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <Image src="/assets/pain_13.png" alt="급성통증과 만성통증" width={1200} height={480} className={s.sec4} />
      </Wrapper>
      <div className={s.gray_back}>
        <Wrapper>
          <SectionTitle
            description="1:1 맞춤형 진료와 치료!"
            children="교통사고 후유증 통합 클리닉"
            className={s.section5}
          />
          <div className={s.c_wrap}>
            <div className={s.circles}>
              <div className={cx(s.circle, s.c_1)}>
                <Image src="/assets/pain_14.png" alt="약침/매선" width={150} height={150} className={s.c_i} />
                <p className={s.c_text}>약침/매선</p>
              </div>
              <div className={cx(s.circle, s.c_2)}>
                <Image src="/assets/pain_15.png" alt="추나/견인" width={150} height={150} className={s.c_i} />
                <p className={s.c_text}>추나/견인</p>
              </div>
              <div className={cx(s.circle, s.c_3)}>
                <Image src="/assets/pain_16.png" alt="한약" width={150} height={150} className={s.c_i} />
                <p className={s.c_text}>한약</p>
              </div>
            </div>
          </div>
          <h4 className={s.c_title}>본수호한의원에서는 복합적인 치료 방식으로 좋은 예후를 기대합니다.</h4>
          <p className={s.c_detail}>
            물리치료와 침 치료만으로 조직의 염증과 손상을 회복시키는데 한계가 있을 수 있습니다. 이럴 때에는 상호보완할
            수 있는 복합적인 한방치료가 필요합니다.
            <br />
            <br />
            본수호한의원에서는 추나와 견인(MID), 매선과 약침, 한약 등 복합치료를 통해 효과적인 통증 치료가 가능합니다.
          </p>
        </Wrapper>
      </div>
      <Wrapper>
        <div className={s.section6}>
          <p className={s.des}>다같은 통증이 아닙니다!</p>
          <h2 className={s.title}>
            본수호 통증클리닉
            <span className={s.point}> 진료 안내</span>
          </h2>
        </div>
        <div className={s.s6_t_items}>
          <div className={s.s6_t_item}>
            <h4 className={s.s6_item_title}>척추 클리닉</h4>
            <Image src="/assets/pain_17.png" alt="허리 디스크" width={560} height={314} className={s.s6_image} />
            <p className={s.s6_t_text}>
              · 허리 디스크
              <br />
              · 목 디스크
              <br />· 척추관협착증
            </p>
          </div>
          <div className={s.s6_t_item}>
            <h4 className={s.s6_item_title}>교통사고 클리닉</h4>
            <Image src="/assets/pain_18.png" alt="교통사고 후유증" width={560} height={314} className={s.s6_image} />
            <p className={s.s6_t_text}>· 교통사고 후유증</p>
          </div>
        </div>
        <div className={s.s6_t_items}>
          <div className={s.s6_t_item}>
            <h4 className={s.s6_item_title}>관절 클리닉</h4>
            <Image src="/assets/pain_19.png" alt="관절" width={560} height={314} className={s.s6_image} />
            <p className={s.s6_t_text2}>
              · 오십견
              <br />
              · 어깨충돌증후군
              <br />
              · 테니스/골프 엘보
              <br />
              · 무릎관절염
              <br />
              · 족저근막염
              <br />· 염좌
            </p>
          </div>
          <div className={s.s6_t_item}>
            <h4 className={s.s6_item_title}>체형교정 클리닉</h4>
            <Image src="/assets/pain_20.png" alt="체형교정" width={560} height={314} className={s.s6_image} />
            <p className={s.s6_t_text2}>
              · 거북목/일자목
              <br />
              · 휜다리
              <br />
              · 골반비대칭
              <br />· 척추측만증
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
