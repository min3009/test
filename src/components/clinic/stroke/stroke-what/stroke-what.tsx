import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./stroke-what.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";
import BannerTitle from "@/components/common/banner-title/banner-title";

export default function Cognitive() {
  return (
    <>
      <div className={s.page_wrapper}>
        <Wrapper>
          <div className={s.main_title}>
            <SectionTitle description="조기치료, 시간이 생명입니다.">
              중풍 <strong>(뇌졸중)</strong>
            </SectionTitle>
            <p className={s.title_desc}>
              중풍(뇌졸증)은 뇌가 가는 혈류가 충분하지 않거나 반대로 너무 많아서 혈류가 끊기는 상태를 말합니다. 혈액은
              산소와 뇌의 필수 물질인 영양분을 포함하고 있는데 이런 혈액 공급이 중단되면 몇 분 안에 뇌세포가 사멸될 수
              있으며 한번 사멸된 뇌세포는 다시 복구되지 않습니다.
            </p>
          </div>
          <div className={s.flex_wrapper}>
            <div className={s.stroke_content}>
              <Image src="/assets/stroke_main1.png" alt="" width={580} height={380} className={s.stroke_content_img} />
              <div className={s.content_desc}>
                <BannerTitle>
                  <span>뇌경색(허혈성 뇌졸중)</span>
                </BannerTitle>
                <p className={s.p_box}>
                  뇌 혈관이 막힌 상태로 혈액이 뇌에 더이상 영양을 공급하지 못해
                  <br />
                  뇌조직의 손상을 가져옵니다.
                  <br />
                  (대부분의 중풍환자)
                </p>
              </div>
            </div>
            <div className={s.stroke_content}>
              <Image src="/assets/stroke_main2.png" alt="" width={580} height={380} className={s.stroke_content_img} />
              <div className={s.content_desc}>
                <BannerTitle>
                  <span>뇌출혈 (출혈성 뇌졸중)</span>
                </BannerTitle>
                <p className={s.p_box}>
                  뇌혈관이 좁아지면서 노폐물이
                  <br />
                  쌓이고 혈관이 압력을 버티지 못해
                  <br />
                  터져버린 상태로 핼액이 밖으로
                  <br />
                  나와 위험도가 매우 높습니다.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
