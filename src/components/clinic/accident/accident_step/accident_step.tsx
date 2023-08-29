import Wrapper from "@/components/ui/wrapper/wrapper";
import StepProcess from "../../common/step-process/step-process";
import s from "./accident_step.module.scss";

const list = [
  {
    title: "염증의 단계",
    image: "acci_process_1",
    descriptions: [
      "발적, 부종, 발열감, 통증",
      "이 주로 나타나며 소염을 금하고 해열, 량혈(냉찜질)",
      "시켜야 합니다.",
      "",
      "과한 노동이나 운동으로",
      "새로운 염증증상이",
      "나타나지 않도록",
      "유의해야 합니다.",
    ],
  },
  {
    title: "집중교정 단계",
    image: "acci_process_2",
    descriptions: ["염증의 다음 단계로,", "섬유아 세포에 의한 교원질분자의 합성이 시작되는 시기로 교정이 필요합니다."],
  },
  {
    title: "재건 단계",
    image: "acci_process_3",
    descriptions: [
      "반흔 조직의 재구성 과정으로 외상이 발생한 척추인대들은 변형이 쉬운 상태로 남아있게 되어 만성적인 과운동성 관절을 형성하기 때문에 적극적인 치료와 보다 강한 교정이 필요합니다.",
    ],
  },
  {
    title: "만성화 단계",
    image: "acci_process_4",
    descriptions: [
      "모든 결합 조직은 주위 섬유아세포들의 증식에 의해 치유되고 반흔조직(흉터)이 생깁니다.",
      "",
      "반흔 조직은 본래의 조직보다 탄성력이 적고 퇴행성 추간판질환 및 퇴행성 척추를 유발합니다.",
    ],
  },
];

export default function Accident_step() {
  return (
    <div>
      <Wrapper>
        <p className={s.des}>단계별 치료가 필요합니다!</p>
        <h2 className={s.title}>
          교통사고
          <span className={s.point}> 외상의 단계</span>
        </h2>
        <StepProcess lists={list} />
      </Wrapper>
    </div>
  );
}
