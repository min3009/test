import SectionTitle from "@/components/common/section-title/section-title";
import s from "./disease-step.module.scss";
import Image from "next/image";
import Wrapper from "@/components/ui/wrapper/wrapper";
import RoundedBanner from "@/components/ui/rounded-banner/rounded-banner";

const lists = [
  {
    title: "전조단계",
    image: "clinic_soah_process1",
    descriptions: [
      "구안와사는 발병하기 몇일 전부터 감기몸살 증상처럼 몸이 무겁고 뒷목 또는 한쪽 귀 아랫부분이 뻣뻣해지면서 통증을 느끼는 전조 증상이 있습니다. 구안와사의 주증상이 발현되기 시작하는 단계로 시간이 지나면서 입이 삐뚤어지고 마비된 쪽의 이마 주름이 잡히지 않는 구안와사 초기로 넘어가게 됩니다.",
    ],
  },
  {
    title: "초기단계",
    image: "clinic_soah_process2",
    descriptions: [
      "얼굴 표정을 제대로 지을 수 없고 마음대로 눈을 감을 수 없거나 입이 처지고 삐뚤어지는 것이 주증상입니다. 이러한 증상으로 정상적인 사회생활이 어렵고 음식 섭취 또는 대화 등 일상생활에 불편함을 가지고 옵니다. 안면신경의 손상은 시간이 지날수록 더 가속화되어 초기에 염증과 부종을 가라앉히고 집중적으로 치료하여 진행을 막는 것이 중요합니다.",
    ],
  },
  {
    title: "불완전 회복단계",
    image: "clinic_soah_process3",
    descriptions: [
      "안면신경길의 염증과 부종, 손상을 빠르게 치료하여 안면신경 전달체계를 어느정도 바로잡은 상태이지만 삐뚤어진 입이 이전 정상으로 완벽히 회복되지 않고 증상이 남아 있는 상태입니다. 안면신경은 시간이 지날수록 회복되는 속도가 더디기 때문에 안면신경 전달체계를 정상화하는 것과 동시에 안면근육 운동기능의 회복을 촉진시켜 얼굴 근육의 경화 및 섬유화 등 후유증을 예방하는 것이 중요합니다.",
    ],
  },
  {
    title: "후유증 발생단계",
    image: "clinic_soah_process4",
    descriptions: [
      "구안와사를 초기에 잡지 못하면 정상으로 돌아오지 못한 얼굴근육이 위축되어 후유증 발생단계로 접어듭니다. 후유증은 얼굴비대칭, 안면경련(눈꺼풀, 광대뼈 부근), 연합운동(눈과 입이 같이 움직임), 악어의 눈물(식사시 과다눈물) 등이 대표적입니다. 안면신경은 날이 갈수록 회복속도가 느려지고 초기에 시행한 동일한 치료 강도로쉽게 나아지지 않습니다.",
    ],
  },
  {
    title: "후유증 심화단계",
    image: "clinic_soah_process5",
    descriptions: [
      "구안와사 발병 후 6개월 이후가 되면 후유증 심화단계로 넘어갑니다. 이때에는 안면신경길의 재생은 더욱 더뎌지고 안면신경의 가지도 가늘어져 신경신호를 잘 전달하지 못하게 됩니다. 이때에는 단순히 안면신경세포 생성을 높이는 것이 아니라 체내 취약한 장부의 활동성을 높여 신체 전체의 면역과 재생세포의 활성도를 올려주어야 합니다.",
    ],
  },
];

export default function DiseaseStep() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="개인에 알맞는 단계별 치료로!">
          안면마비 <span className={s.orange}>단계별 치료</span>
        </SectionTitle>

        <div className={s.graph_wrapper}>
          <Image
            src="/assets/face_cure_graph.png"
            alt="안면마비 단계별 치료"
            width={1200}
            height={600}
            className={s.image}
          />
        </div>

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
                  {list.descriptions.map((desc) => (
                    <p key={`soah-desc-${desc}`}>{desc}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
