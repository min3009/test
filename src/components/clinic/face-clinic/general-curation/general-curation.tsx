import SectionTitle from "@/components/common/section-title/section-title";
import s from "./general-curation.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";
import Image from "next/image";

export default function GeneralCuration() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="구안와사(안면마비) 집중관리!">
          전신을 바라보는 통합치료
        </SectionTitle>

        <div className={s.image_wrapper}>
          <Image
            src="/assets/face_nerve_text.png"
            alt="후유증 없이 구안와사 치료"
            width={560}
            height={400}
            draggable={false}
          />
          <Image
            src="/assets/face_nerve.png"
            alt="신경"
            width={393}
            height={552}
            draggable={false}
          />
        </div>

        <h4 className={s.warning}>
          구안와사의 치료는 얼굴만 치료하는 것이 아니라 몸 전체를 치료해야
          합니다.
        </h4>
        <p className={s.description}>
          뇌 하부에서 시작되는 안면신경은 얼굴로 전달되지만 몸 전체로 보면
          하나의 신호체계로 연결되어 있습니다. 신체의 장부의 기능이 떨어져
          혈액순환이 잘 되지 않으면 안면신경재생 세포가 생성되지 않습니다. 뇌와
          연결된 척수신경에 이상이 있으면 말초신경 체계까지 무너져 안면신경길을
          바로 잡아도 구안와사 증상이 호전되지 않습니다. 그래서 구안와사를 몸의
          이상이 안면마비 증상으로 발현된 것으로 보는 것이 옳습니다.
        </p>
      </Wrapper>
    </div>
  );
}
