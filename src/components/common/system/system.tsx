import Image from "next/image";
import { HTMLAttributes } from "react";
import { cx } from "@/libs/utils";
import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./system.module.scss";

export default function System(props: HTMLAttributes<HTMLElement>) {
  const { className } = props;

  return (
    <div className={cx(s.wrapper, className ?? "")}>
      <Wrapper>
        <div className={s.wrap}>
          <h4 className={s.intro}>효과적인 몸 수호 치료 솔루션</h4>
          <h2 className={s.title}>본수호 다각적 치료 시스템</h2>

          <div className={s.treatment_image_wrapper}>
            <Image
              src="/assets/treatment_system.png"
              alt="문진 및 진맥"
              width={1050}
              height={967}
              className={s.image}
            />
          </div>

          <p className={s.m_text}>
            원인을 파악하고 세심한 진료가 선행된 후 개인의 증상이나 질환에 따라
            한가지 치료법이 아닌
            <br />
            <span className={s.point}>
              복합적인 치료 솔루션으로 효과적인 치료가 가능
            </span>
            합니다.
          </p>
        </div>
        <div className={s.detail}>
          <div className={s.row}>
            <div className={s.item}>
              <div className={s.item_title}>
                <h5 className={s.i_t_name}>수호 한약</h5>
              </div>
              <Image
                src="/assets/system_item1.png"
                alt="수호 한약"
                width={390}
                height={219}
                className={s.item_i}
              />
              <div className={s.item_t}>
                <p className={s.item_short_t}>
                  · 노폐물 배출 및 영양 공급
                  <br />· 손상된 근육 및 인대 기능 회복
                </p>
                <p className={s.item_long_t}>
                  신체 증상에 대한 원인을 제거하여 염증을
                  <br />
                  완화시키고 손상된 조직을 강화시켜
                  <br />
                  면역력 또한 높여줍니다.
                  <br />
                  한약 처방은 개인 체질과
                  <br />
                  증상에 맞춰 안전하게 조제됩니다.
                </p>
              </div>
            </div>
            <div className={s.item}>
              <div className={s.item_title}>
                <h5 className={s.i_t_name}>침</h5>
              </div>
              <Image
                src="/assets/system_item2.png"
                alt="침"
                width={390}
                height={219}
                className={s.item_i}
              />
              <div className={s.item_t}>
                <p className={s.item_short_t}>
                  · 기혈 순환 개선 및 면역반응 활성화
                  <br />· 조직 자생력 강화 및 통증 완화
                </p>
                <p className={s.item_long_t}>
                  침은 시술 부위의 근육을 이완시켜주고
                  <br />
                  기혈순환을 원활하게 해줍니다. <br />
                  더불어 면역기능 강화와 통증 완화에도
                  <br />
                  효과가 있습니다.
                </p>
              </div>
            </div>
            <div className={s.item}>
              <div className={s.item_title}>
                <h5 className={s.i_t_name}>약침</h5>
              </div>
              <Image
                src="/assets/system_item3.png"
                alt="약침"
                width={390}
                height={219}
                className={s.item_i}
              />
              <div className={s.item_t}>
                <p className={s.item_short_t}>
                  · 근육의 염증과 부종 개선, 노폐물 배출
                  <br />· 혈액순환 및 통증 개선
                </p>
                <p className={s.item_long_t}>
                  통증 부위 경혈에 정제, 추출한 한약재를
                  <br />
                  주입하는 방식으로 소량으로도 효과가
                  <br />
                  빠르게 나타납니다. <br />
                  소화기능의 문제로 한약을 복용할 수 없는 분도 시술할 수
                  있습니다.
                </p>
              </div>
            </div>
          </div>

          <div className={s.row}>
            <div className={cx(s.item, s.item_bottom)}>
              <div className={s.item_title}>
                <h5 className={s.i_t_name}>뜸/부항</h5>
              </div>
              <Image
                src="/assets/system_item4.png"
                alt="뜸/부항"
                width={390}
                height={219}
                className={s.item_i}
              />
              <div className={s.item_t}>
                <p className={s.item_short_t}>
                  · 면역력 증진 및 혈류/림프순환 개선
                  <br />· 통증 개선 및 면역 기능 강화
                </p>
                <p className={s.item_long_t2}>
                  뜸과 부항은 온열과 음압을 통한 치료법으로 통증 개선 이외에도
                  혈류를 증가시키며
                  <br />
                  세포 조직의 기능 촉진, 면역 기능 강화에
                  <br />
                  도움을 줍니다.
                </p>
              </div>
            </div>
            <div className={cx(s.item, s.item_bottom)}>
              <div className={s.item_title}>
                <h5 className={s.i_t_name}>매선</h5>
              </div>
              <Image
                src="/assets/system_item5.png"
                alt="매선"
                width={390}
                height={219}
                className={s.item_i}
              />
              <div className={s.item_t}>
                <p className={s.item_short_t}>
                  · 근육 및 근막층 조절 및 조직 강화
                  <br />· 혈액순환 개선 및 근육인대 강화
                </p>
                <p className={s.item_long_t2}>
                  식약처 허가를 인증받은 약실을
                  <br />
                  피부에 자입해 경혈을 자극합니다.
                  <br />
                  통증을 줄이기 위해 피부와 근육, 근막 층을
                  <br />
                  조절하고 조직을 강화하여 혈액순환과
                  <br />
                  근육의 인대를 강화합니다.
                </p>
              </div>
            </div>
            <div className={cx(s.item, s.item_bottom)}>
              <div className={s.item_title}>
                <h5 className={s.i_t_name}>MID 견인치료</h5>
              </div>
              <Image
                src="/assets/system_item6.png"
                alt="MID 견인치료"
                width={390}
                height={219}
                className={s.item_i}
              />
              <div className={s.item_t}>
                <p className={s.item_short_t}>
                  · 디스크 주변의 혈액, 수분, 영양 공급
                  <br />· 통증 개선 및 디스크 원상 회복 도움
                </p>
                <p className={s.item_long_t2}>
                  척추의 내부 압력을 낮춰 추간판의
                  <br />
                  혈류량을 증가시켜 디스크의 치유에
                  <br />
                  필요한 영양을 공급하는 치료법으로
                  <br />
                  통증을 개선 시키고 디스크를 원상
                  <br />
                  회복하는데 도움을 줍니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
