import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./stroke-symptoms.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";
import BannerTitle from "@/components/common/banner-title/banner-title";

export default function Cognitive() {
  return (
    <>
      <Wrapper>
        <div className={s.main_title}>
          <SectionTitle description="초기대응이 제대로 이루어져야 합니다.">
            중풍 (뇌졸중) <strong>전조증상</strong>
          </SectionTitle>
          <p className={s.title_desc}>
            중풍은 초기 대응이 제대로 되지 않으면 위험도가 그만큼 높아지는 질병입니다. 전 세계적으로 두번째로 많은
            사망자를
            <br />
            내는 주요 사망원인이기도 합니다. 적절한 때에 치료를 받지 못하면 사망 또는 평생 장애를 겪을 수 있으므로
            증상이 나타날 경우 가능한 빠른 치료가 이루어질 수 있도록 전조증상을 숙지하는 것이 좋습니다.
          </p>
        </div>
        <div className={s.symptoms_chart}>
          <BannerTitle>
            <span>전조증상 F.A.S.T로 알아보기</span>
          </BannerTitle>
          <Image src="/assets/symptoms-chart.png" alt="" width={1200} height={660} className={s.symptoms_content_img} />
        </div>
      </Wrapper>
    </>
  );
}
