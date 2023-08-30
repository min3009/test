import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./clinic_cst.module.scss";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import sub_title from "*.module.scss"

export default function Clinic_cst(props: HTMLAttributes<HTMLElement>) {
  const { className } = props;

  return (
    <div className={s.wrapper}>
      <Wrapper>
        <Image
          src="/assets/cst_1.png"
          alt="두개골-천골 인트로"
          width={1200}
          height={675}
        />
        <p className={s.sub_title}>두개골-천골 건강 = 자율신경의 조화</p>
        <h2 className={s.title}>
          <span className={s.point}>두개골-천골</span>, 왜 중요할까?
        </h2>
        <div className={s.middle_text}>
          두개골과 천골의 뒤틀림을 바로잡아 우리 몸을 조율합니다.
        </div>
        <p className={s.explain}>
          두개천골추나는 한의사의 손으로 경막을 이완시킴으로써
          <br />
          머리뼈의 뒤틀림으로 발생하는 자율신경 질환, 체액순환의 장애, 내장기
          운동성 저하를
          <br />
          치료하는{" "}
          <span className={s.unique}>본수호한의원의 시그니처 치료</span>입니다.
        </p>
        <Image
          src="/assets/cst_2.png"
          alt="두개골-천골 그림자료"
          width={1200}
          height={1000}
        />
      </Wrapper>
      <div className={s.background}>
        <Wrapper>
          <div className={s.items}>
            <div className={s.row_u}>
              <div className={s.item}>
                <p className={s.item_text}>
                  척추의 긴장과
                  <br />
                  왜곡 해소
                </p>
              </div>
              <div className={s.item}>
                <p className={s.item_text}>
                  항진된
                  <br />
                  교감신경 이완
                </p>
              </div>
              <div className={s.item}>
                <p className={s.item_text}>
                  부교감신경의
                  <br />
                  활성화
                </p>
              </div>
            </div>
            <div className={s.row_d}>
              <div className={s.item}>
                <p className={s.item_text}>
                  통증이 없는
                  <br />
                  부드러운 기법
                </p>
              </div>
              <div className={s.item}>
                <p className={s.item_text}>
                  거의 없는
                  <br />
                  부작용
                </p>
              </div>
              <div className={s.item}>
                <p className={s.item_text}>
                  남녀노소
                  <br />
                  부담없이 적용
                </p>
              </div>
            </div>
            <div className={s.more}>
              <Link href="/" className={s.link}>
                두개천골치료 자세히 보기
              </Link>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className={s.background_2}>
        <Wrapper>
          <p className={s.sub_title_2}>두개천골치료, 자율신경을 다스립니다.</p>
          <h2 className={s.title_2}>
            두개천골치료 <span className={s.point}>원리</span>
          </h2>
          <div className={s.squares}>
            <div className={s.square_item}>
              <Image
                src="/assets/cst_5.png"
                alt="뇌수막"
                width={180}
                height={180}
                className={s.square_i}
              />
              <div>
                <p className={s.square_name}>
                  신체 전반의 신경문제와 밀접한 뇌수막
                </p>
                <p className={s.square_detail}>
                  뇌를 감싸는 뇌경막은 두개골에서 척추, 천골까지 연결되어 척추의
                  문제는 신경의 문제로 통증을 비롯하여 다양한 난치성 질환을
                  불러올 수 있습니다.
                </p>
              </div>
            </div>
            <div className={s.square_item}>
              <Image
                src="/assets/cst_6.png"
                alt="교감신경"
                width={180}
                height={180}
                className={s.square_i}
              />
              <div>
                <p className={s.square_name}>교감신경의 항진 저하</p>
                <p className={s.square_detail}>
                  교감신경을 주로 담당하는 척추의 긴장을 풀어주고 올바르게
                  정렬시켜 교감신경의 항진을 저하시킵니다.
                </p>
              </div>
            </div>
            <div className={s.square_item}>
              <Image
                src="/assets/cst_7.png"
                alt="부교감신경"
                width={180}
                height={180}
                className={s.square_i}
              />
              <div>
                <p className={s.square_name}>부교감신경의 활성화</p>
                <p className={s.square_detail}>
                  부교감신경을 주로 담당하는 두개골과 천골에 미세하고 정확한
                  자극을 주어 이완함으로써 부교감신경의 활성화를 촉진시킵니다.
                </p>
              </div>
            </div>
            <div className={s.square_item}>
              <Image
                src="/assets/cst_8.png"
                alt="자율신경"
                width={180}
                height={180}
                className={s.square_i}
              />
              <div>
                <p className={s.square_name}>자율신경의 균형과 조화</p>
                <p className={s.square_detail}>
                  자율신경의 불균형을 조절하여 몸의 균형과 조화를 이루도록
                  도움을 줍니다. 또한 구조적·기능적 문제를 해결하여 난치성
                  질환을 해소합니다.{" "}
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className={s.background_3}>
        <Wrapper>
          <p className={s.sub_title_3}>
            본수호, 나무가 아닌 숲으로 보는 마음으로!
          </p>
          <h2 className={s.title_3}>
            본수호는 <span className={s.point}>전신을 치료</span>합니다.
          </h2>
          <div className={s.treatment}>
            <div className={s.treatment_big}>
              <div className={s.big_s}>
                <div className={s.small_s}>
                  <Image
                    src="/assets/plus.png"
                    alt="plus"
                    width={40}
                    height={40}
                    className={s.plus}
                  />
                </div>
                <p className={s.treatment_text}>신체 전반적인</p>
                <p className={s.treatment_point_text}>기능 활성화</p>
                <Image
                  src="/assets/cst_10.png"
                  alt="신체"
                  width={100}
                  height={100}
                />
              </div>
              <div className={s.big_s}>
                <div className={s.small_s}>
                  <Image
                    src="/assets/plus.png"
                    alt="plus"
                    width={40}
                    height={40}
                    className={s.plus}
                  />
                </div>
                <p className={s.treatment_text}>관련 증상</p>
                <p className={s.treatment_point_text}>치료 및 예방</p>
                <Image
                  src="/assets/cst_11.png"
                  alt="방어"
                  width={100}
                  height={100}
                />
              </div>
              <div className={s.big_s}>
                <p className={s.treatment_text}>치료 이후</p>
                <p className={s.treatment_point_text}>지속적인 관리</p>
                <Image
                  src="/assets/cst_12.png"
                  alt="관리"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
          <p className={s.bottom_text}>
            질환의 증상 개선 뿐만 아니라, 신체 전반적인 기능을 활성화하는데
            도움을 주어 관련 질환 및 2차 증상을 예방하고 치료하고 치료 후에도
            꾸준히 지속될 수 있는 원동력을 만들어줍니다.
          </p>
        </Wrapper>
      </div>
    </div>
  );
}
