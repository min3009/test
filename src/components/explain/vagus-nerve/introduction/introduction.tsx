import CircleText from "@/components/common/circle-text/circle-text";
import SectionTitle from "@/components/common/section-title/section-title";
import s from "./introduction.module.scss";
import { cx } from "@/libs/utils";
import Image from "next/image";
import Wrapper from "@/components/ui/wrapper/wrapper";
import BannerTitle from "@/components/common/banner-title/banner-title";

const cards = [
  {
    title: "위장의 소화",
    imageName: "vagus_nerve_digestion",
    descriptions: [
      "미주 신경이 소화에 미치는 영향은 위장에서 시작됩니다. 주요 기능 중 하나는 염산과 펩시노겐을 포함한 위액 분비를 자극하는 것입니다. 이러한 물질은 단백질을 분해하고 소화 효소를 활성화하는 데 필수적입니다. 또한 위의 근육 수축을 제어하여 음식과 위액이 효율적으로 혼합되도록 합니다.",
      "이러한 수축은 음식물을 기계적으로 분해하고 소화관을 통과하는 데 매우 중요합니다.",
    ],
  },
  {
    title: "위장관의 운동",
    imageName: "vagus_nerve_digestion_exercise",
    descriptions: [
      "미주신경은 음식물과 노폐물을 장으로 밀어내는 연동 운동으로 알려진 평활근 수축의 조정을 감독합니다. 또한 미주신경은 괄약근의 개폐를 조절하여 영양분의 효율적인 운반과 흡수를 보장하고 노폐물을 배출합니다.",
    ],
  },
  {
    title: "소화 효소와 호르몬 및 체액 유지",
    imageName: "vagus_nerve_hormone",
    descriptions: [
      "소화관의 원활한 기능에 필요한 소화 효소, 호르몬 및 체액의 최적 수준을 유지하도록 도와주는 역할을 합니다.",
      "미주신경은 지방과 탄수화물을 분해하는 데 필수적인 담즙과 췌장 효소의 방출을 자극합니다. 또한 미주신경은 지방과 단백질 소화를 돕는 콜레시스토키닌과 같은 중요한 장 호르몬의 분비를 조절하는 데 핵심적인 역할을 합니다.",
    ],
  },
  {
    title: "장 면역과 염증을 조절",
    imageName: "vagus_nerve_immnue",
    descriptions: [
      "미주신경은 콜린성 항염증 경로를 통해 면역 반응을 조절하여 염증을 조절하고 장의 항상성을 유지하는 데 도움이 됩니다. 면역 체계에 대한 이러한 영향은 감염을 예방하고 건강한 장 장벽을 유지하며 염증성 장 질환과 같은 자가 면역 질환을 예방하는 데 필수적입니다.",
    ],
  },
  {
    title: "식욕과 포만감 조절",
    imageName: "vagus_nerve_control",
    descriptions: [
      "장-뇌 축은 뇌와 위장 시스템 사이의 양방향 통신을 의미하며 미주신경은 이 연결의 핵심입니다. 미주신경은 포만감, 배고픔, 불편함 등의 감각 정보를 장에서 뇌로 전달하는 역할을 담당합니다. 이러한 신호는 식욕과 포만감을 조절하여 과식을 방지하고 에너지 균형을 유지하는 데 도움이 됩니다.",
    ],
  },
] as const;

export default function Introduction() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="부감교신경의 80%는 미주신경">
          미주신경이란?
        </SectionTitle>

        <div className={s.circle_wrapper}>
          <CircleText type="yellow">
            <h3 className={s.h3}>뇌</h3>
            <hr className={cx(s.hr, s.orange)} />
            <p className={s.description}>
              신체 전반에
              <br />
              관여
            </p>
          </CircleText>

          <div className={s.divider}>
            <h3 className={s.h3}>미주신경</h3>
            <Image
              src="/assets/arrow.png"
              alt="화살표"
              width={291}
              height={30}
            />
            <p className={s.description}>
              운동기능 전달
              <br />
              감각기능 전달
              <br />
              내장기 상태신호 뇌에 전달
            </p>
          </div>

          <CircleText type="orange">
            <h3 className={s.h3}>장기</h3>
            <hr className={cx(s.hr, s.yellow)} />
            <p className={s.description}>
              폐, 신장, 간, 위, 소장,
              <br />
              대장 등 모든 소화기
            </p>
          </CircleText>
        </div>

        <p className={s.explanation}>
          미주신경은 제 10 뇌신경이라고도 알려져 있으며, 뇌신경 중 가장 길고
          복잡한 신경입니다. 부교감신경의 80%이상을 책임지고 있는 신경으로
          운동기능 전달 및 감각기능 전달 기능과 더불어 우리몸 내장기의
          상태신호를 뇌로 보내는 역할을 합니다.
          <br />
          주로 뇌간에서 시작되어 목을 거쳐 폐, 신장, 간, 위 모든 소화기들에
          관여를 하고 있습니다.
          <br />
          <br />
          그래서 부교감신경인 미주신경은 장의 건강과 직결됩니다.
        </p>

        <div className={s.card_wrapper}>
          {cards.map((card, idx) => (
            <div key={card.title} className={s.card}>
              <BannerTitle>
                {idx + 1} <span className={s.title}>{card.title}</span>
              </BannerTitle>
              <Image
                src={`/assets/${card.imageName}.png`}
                alt={card.title}
                width={1200}
                height={675}
                className={s.image}
              />
              <div className={s.desription_wrapper}>
                {card.descriptions.map((desc) => (
                  <p key={desc}>{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={s.weird_divider}>
          <hr />
        </div>
      </Wrapper>
    </div>
  );
}
