import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./fixprinci.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";

export default function Cst() {
  return (
    <>
      <div className={s.main_bg}>
        <Wrapper>
          <SectionTitle
            description="두개천골치료, 자율신경을 다스립니다."
            className={s.section_title}
          >
            두개천골치료 원리
          </SectionTitle>

          <div className={s.main_img}>
            <Image
              src="/assets/princi1.png"
              alt="두개골치료원리"
              width={180}
              height={180}
              className={s.img_set}
            />
            <div className={s.img_content}>
              <span>신체 전반의 신경문제와 밀접한 뇌수막</span>
              <p>
                뇌를 감싸는 뇌경막은 두개골에서 척추, 천골까지 연결되어 척추의
                문제는 신경의 문제로
                <br /> 통증을 비롯하여 다양한 난치성 질환을 불러올 수 있습니다.
              </p>
            </div>
          </div>
          <div className={s.main_img}>
            <Image
              src="/assets/princi2.png"
              alt="두개골치료원리"
              width={180}
              height={180}
              className={s.img_set}
            />
            <div className={s.img_content}>
              <span>교감신경의 항진 저하</span>
              <p>
                교감신경을 주로 담당하는 척추의 긴장을 풀어주고 올바르게
                정렬시켜 교감신경의 항진을 저하시킵니다.
              </p>
            </div>
          </div>
          <div className={s.main_img}>
            <Image
              src="/assets/princi3.png"
              alt="두개골치료원리"
              width={180}
              height={180}
              className={s.img_set}
            />
            <div className={s.img_content}>
              <span>부교감신경의 활성화</span>
              <p>
                부교감신경을 주로 담당하는 두개골과 천골에 미세하고 정확한
                자극을 주어 이완함으로써
                <br />
                부교감신경의 활성화를 촉진시킵니다
              </p>
            </div>
          </div>
          <div className={s.main_img}>
            <Image
              src="/assets/princi4.png"
              alt="두개골치료원리"
              width={180}
              height={180}
              className={s.img_set}
            />
            <div className={s.img_content}>
              <span>자율신경의 균형과 조화</span>
              <p>
                자율신경의 불균형을 조절하여 몸의 균형과 조화를 이루도록 도움을
                줍니다. <br />
                또한 구조적·기능적 문제를 해결하여 난치성 질환을 해소합니다.{" "}
              </p>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
