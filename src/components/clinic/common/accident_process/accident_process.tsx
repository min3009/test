import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./accident_process.module.scss";
import Image from "next/image";

export default function Accident_process() {
  return (
    <div>
      <Wrapper>
        <p className={s.sub_title}>사고접수번호 또는 보험담당자 연락처만 알려주세요!</p>
        <h2 className={s.title}>
          간편한
          <span className={s.point}>교통사고 치료 절차</span>
        </h2>
        <div className={s.circles}>
          <div className={s.big_circle}>
            <div className={s.small_circle}>
              <Image src="/assets/triangle.png" alt="화살표" width={30} height={30} className={s.tri_i} />
            </div>
            <p className={s.inner_t}>내원</p>
          </div>
          <div className={s.big_circle}>
            <div className={s.small_circle}>
              <Image src="/assets/triangle.png" alt="화살표" width={30} height={30} className={s.tri_i} />
            </div>
            <p className={s.inner_t}>
              사고접수번호
              <br />
              확인
            </p>
          </div>
          <div className={s.big_circle}>
            <div className={s.small_circle}>
              <Image src="/assets/triangle.png" alt="화살표" width={30} height={30} className={s.tri_i} />
            </div>
            <p className={s.inner_t}>
              자동차보험
              <br />
              담당자 연락
            </p>
          </div>
          <div className={s.big_circle}>
            <div className={s.small_circle}>
              <Image src="/assets/triangle.png" alt="화살표" width={30} height={30} className={s.tri_i} />
            </div>
            <p className={s.inner_t}>
              지불보증서
              <br />
              확인
            </p>
          </div>
          <div className={s.big_circle}>
            <p className={s.inner_t}>
              한방치료
              <br />
              진행
            </p>
          </div>
        </div>
        <div className={s.details}>
          <div className={s.detail}>
            <p className={s.d_title}>내원</p>
            <p className={s.d_text}>내원 시 빠르고 친절하게 보험처리 절차를 도와드립니다.</p>
          </div>
          <div className={s.detail}>
            <p className={s.d_title}>사고접수번호 확인</p>
            <p className={s.d_text}>교통사고 치료임을 알려주시고 사고접수번호를 알려주세요.</p>
          </div>
          <div className={s.detail}>
            <p className={s.d_title}>자동차보험 담당자 연락</p>
            <p className={s.d_text}>본수호한의원에서 보험사 담당자와 연락하여 확인을 도와드립니다.</p>
          </div>
          <div className={s.detail}>
            <p className={s.d_title}>지불보증서 확인</p>
            <p className={s.d_text}>보험사와 연락하여 '진료비 지불보증서'를 받습니다.</p>
          </div>
          <div className={s.detail}>
            <p className={s.d_title}>한방치료 진행</p>
            <p className={s.d_text}>사고로 유발된 증상을 진단하고 교통사고 치료를 진행합니다.</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
