import SectionTitle from "@/components/common/section-title/section-title";
import s from "./soah-solution.module.scss";
// import Image from "next/image";
// import BannerTitle from "@/components/common/banner-title/banner-title";
import Wrapper from "@/components/ui/wrapper/wrapper";
import DiagnosisProcessList from "@/components/ui/diagnosis-process-list/diagnosis-process-list";

const imageList = [
  {
    title: "추나요법",
    image: "clinic_solution1",
    lists: ["· 소아 체형교정 및 바른자세 유지", "· 성장 자극 및 뇌기능 향상"],
    descriptions: [
      "아이들의 자세 습관, 체형 문제 등으로",
      "인해 발생하는 성장 문제를 바로잡고",
      "성장판과 전신 경락의 기능을 돕습니다.",
    ],
  },
  {
    title: "다양한 니즈에 맞춘 제형",
    image: "clinic_solution2",
    lists: [
      "· 한약의 맛과 향에 대한 거부감 완화",
      "· 아이의 취향에 맞춘 다양한 제형",
    ],
    descriptions: [
      "탕, 환, 젤리, 캡슐 등 다양한 형태의",
      "처방으로 우리 아이의 건강과 선호에",
      "따른 약물 처장이 가능합니다.",
    ],
  },
  {
    title: "질환별 맞춤 치료",
    image: "clinic_solution3",
    lists: ["· 아프지 않은 치료", "· 효과적이고 다양한 치료 옵션"],
    descriptions: [
      "한의원의 기본 치료인 침, 뜸, 부항 외에도",
      "척추교정치료기, 뉴로피드백,아로마",
      "테라피 등 다양한 치료 옵션이 제공됩니다.",
    ],
  },
  {
    title: "건강 뿌리부터 살피는 세부검진",
    image: "clinic_solution4",
    lists: [
      "· 아이 건강 문제에 따른 다양한 세부검사",
      "· 꼼꼼하고 세심한 검사 시스템",
    ],
    descriptions: [
      "체성분·체형·족저분석·체열 검사,",
      "심안 맥진, 자율신경 검사, 뇌파검사까지",
      "우리아이의 건강문제에 따라 다양한 세부 검사가 이루어집니다.",
    ],
  },
];

export default function SoahSolution() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="본수호한의원은 다릅니다!">
          본수호 <span className={s.orange}>소아진료</span> 솔루션
        </SectionTitle>

        <DiagnosisProcessList
          className={s.diagnosis_wrapper}
          lists={imageList}
        />
        {/* <div className={s.card_list_wrapper}>
          {imageList.map((item) => (
            <div key={`한약-${item.title}`} className={s.card}>
              <BannerTitle className={s.banner}>{item.title}</BannerTitle>

              <Image
                src={`/assets/${item.image}.png`}
                alt={`한약-${item.title}`}
                width={560}
                height={420}
                className={s.image}
              />

              <ul className={s.list_wrapper}>
                {item.lists.map((list) => (
                  <li key={`list-${list}`} className={s.list_item}>
                    {list}
                  </li>
                ))}
              </ul>

              <div className={s.desc_wrapper}>
                {item.descriptions.map((desc) => (
                  <p key={`desc-${desc}`} className={s.desc_item}>
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div> */}
      </Wrapper>
    </div>
  );
}
