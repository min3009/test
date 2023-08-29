import SectionTitle from "@/components/common/section-title/section-title";
import s from "./soah-process.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";
import Image from "next/image";
import RoundedBanner from "@/components/ui/rounded-banner/rounded-banner";
import { cx } from "@/libs/utils";

const lists = [
  {
    title: "문진 및 진맥",
    image: "clinic_soah_process1",
    description: ["원장님과 자세한 문진 및 상담을 진행합니다."],
  },
  {
    title: "세부검사",
    image: "clinic_soah_process2",
    description: [
      "인바디, 체형검사, 심안 맥진, 스트레스 검사 등",
      "건강 여건에 따른 세부 검사를 진행합니다.",
    ],
  },
  {
    title: "치료 계획 및 섭생 교육",
    image: "clinic_soah_process3",
    description: [
      "세부 검사 결과를 토대로 우리 아이 건강증진을 위한",
      "치료 계획과 생활습관 관리에 대한 면담을 진행합니다.",
    ],
  },
  {
    title: "한방 치료",
    image: "clinic_soah_process4",
    description: ["증상에 따른 치료(침, 뜸, 부항, 추나 등)를 진행합니다."],
  },
  {
    title: "한약 처방 및 홈케어",
    image: "clinic_soah_process5",
    description: [
      "개인에 맞는 한약 처방과 더불어 집에서 가능한 홈케어",
      "교육을 진행합니다.",
    ],
  },
  {
    title: "성장 경과 면담",
    image: "clinic_soah_process6",
    description: [
      "치료 경과에 대한 중간 점검 및 우리 아이 성장발육의",
      "추세를 살펴 보완하거나 개선 부분을 함께 상의합니다.",
    ],
  },
];

export default function SoahProcess() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="보다 꼼꼼하고 세심하게!">
          본수호 <span className={s.orange}>소아진료</span> 프로세스
        </SectionTitle>

        <div className={s.list_wrapper}>
          {lists.map((list, idx) => (
            <div key={`soah-${list.title}`} className={s.card}>
              <Image
                src={`/assets/${list.image}.png`}
                alt={list.title}
                width={350}
                height={350}
              />
              <div className={s.card_text_box}>
                <div className={s.title_wrapper}>
                  <RoundedBanner className={s.banner}>
                    {idx + 1}단계
                  </RoundedBanner>
                  <h4>{list.title}</h4>
                </div>

                <div className={s.description_wrapper}>
                  {list.description.map((desc) => (
                    <p key={`soah-desc-${desc}`}>{desc}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className={s.callout}>
          ※ 골성숙도 검사(뼈나이), 성장 호르몬 검사 결과를 지참하여 방문하시면
          보다
          <br /> 상세한 상담이 가능합니다.
        </p>

        <div className={cx(s.card, s.report_card)}>
          <Image
            src="/assets/clinic_soah_process7.png"
            alt="성장리포트"
            width={350}
            height={350}
          />
          <div className={s.card_text_box}>
            <div className={s.title_wrapper}>
              <RoundedBanner className={s.banner}>성장리포트</RoundedBanner>
              <h4>우리 아이 성장과정을 한눈에!</h4>
            </div>

            <div className={s.description_wrapper}>
              <p>
                주기적으로 내원하여 우리 아이 건강을 직접 상담하면 좋겠지만,
                <br />
                바쁜 일정 탓에 면담이 어려우신 부모님들은
                <br />
                주기별로 우리 아이 성장 발육치 변화와 건강 특이사항
                <br />을 주치의가 정리한 성장 리포트 파일로 제공됩니다.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
