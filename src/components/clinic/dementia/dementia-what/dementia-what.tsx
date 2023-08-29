import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./dementia-what.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";

export default function Cognitive() {
  return (
    <>
      <div className={s.main_bg}>
        <Wrapper>
          <div className={s.main_title}>
            <SectionTitle description="모든 정신활동에 장애를 주는">
              <strong>치매</strong>
            </SectionTitle>
            <p className={s.title_desc}>
              일반적으로 노인에게서만 발생하는 것으로 생각하지만 노화 뿐만 아니라 다양한 신체적, 정신적 요인에 의해
              발생하기 때문에 40,50대의 건망증에서 부터 치매 예방을 위한 검사 및 치료를 하는 것이 좋습니다. 치매가
              발생하는 연령에 따라 초로기 치매와 노년기 치매로 구분할 수 있으며 그 수는 점점 늘어가고 있습니다.
              <br />
              <br />
              치매는 다양한 요인에 의해 발병하기 때문에 어떤 영역에서 인지장애를 나타내고 있는지 정확하게 분석하는 것이
              치매 치료의 첫걸음입니다.
            </p>
          </div>
          <div className={s.main_img}>
            <Image src="/assets/dementia-main_img.png" alt="" width={1113} height={579} />
          </div>
        </Wrapper>
      </div>
    </>
  );
}
