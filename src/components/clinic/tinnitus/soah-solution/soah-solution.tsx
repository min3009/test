import BannerTitle from "@/components/common/banner-title/banner-title";
import Image from "next/image";
import s from "./soah-solution.module.scss";
import SectionTitle from "@/components/common/section-title/section-title";
import Wrapper from "@/components/ui/wrapper/wrapper";

const imageList = [
  {
    title: "추나요법",
    image: "tinnitus_soah_process_1",
    lists: [
      "· 뇌척수액 흐름을 개선하고 뇌를 활성화",
      "· 중추신경계의 안정 상태를 회복",
    ],
    descriptions: [
      "인체의 축인 두개골과 천골의 정렬을 바르게 맞추는 추나요법입니다. 본수호의 시그니처 치료법인 두개천골추나는 뇌를 감싸고 있는 경막을 조절하고 뇌수막을 이완시켜 뇌척수액의 원활한 순환을 도와줍니다. ",
    ],
  },
  {
    title: "다양한 니즈에 맞춘 제형",
    image: "tinnitus_soah_process_2",
    lists: ["· 유모세포 활성화로 청신경 전달력 개선", "· 청각 뇌 기능 향상"],
    descriptions: [
      "손상된 청각세포의 특정 주파수를 찾아 환자의 증상에 맞는 소리재활치료 음원을 제작합니다.  매일 아침 저녁마다 30분 이상 음원을 들으며 훈련하는 치료법으로, REVE-134음향신호가 청각세포를 집중적으로 활성화시킵니다.",
    ],
  },
  {
    title: "질환별 맞춤 치료",
    image: "tinnitus_soah_process_3",
    lists: [
      "· 노폐물 배출 및 컨디션 회복 ",
      "· 유모세포 영양공급 및 혈류 개선",
    ],
    descriptions: [
      "체질과 증상에 맞게 조제된 한약은 오장육부, 즉 몸의 내부에서 생기는 불균형과 기능 실조를 해소해 이명과 난청을 치료하는 데 도움을 줍니다. ",
    ],
  },
  {
    title: "건강 뿌리부터 살피는 세부검진",
    image: "tinnitus_soah_process_4",
    lists: ["· 혈류와 림프순환 개선", "· 면역 반응 활성화"],
    descriptions: [
      "침·약침 치료는 귀 주변 연부 조직의 긴장을 해소시켜 혈관과 림프의 흐름을 원활하게 하는 효과가 있습니다.",
      "또한 매선(특수 침-녹는 실) 치료를 통해 귀 주변의 근육과 힘줄을 강화하면 이명 증상의 개선에 도움을 받을 수 있습니다.",
    ],
  },
];

export default function () {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="보다 꼼꼼하고 세심하게!">
          본수호 소아진료 프로세스
        </SectionTitle>

        <div className={s.card_list_wrapper}>
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
        </div>
      </Wrapper>
    </div>
  );
}
