import Wrapper from "@/components/ui/wrapper/wrapper";
import SectionTitle from "@/components/common/section-title/section-title";
import QnaList from "@/components/ui/qna-list/qna-list";
import s from "./qna.module.scss";

const qnaList = [
  {
    title: "본수호와 양방병원의 이명검사 차이점은 무엇인가요?",
    descriptions: [
      "현재 이비인후과에서 시행하는 검사법은 6밴드 청력 검사입니다. 이 검사는 이명을 일으키는 주파수 영역에서 매우 좁은 부분만을 볼 수 있습니다.",
      "그에 비해 본수호한의원에서는 67밴드(최대 134밴드) 범위의 미세청력검사가 가능하여 기존 6밴드 검사에 비해 실제 청각세포 (유모세포)의 손상 여부를 보다 정확하게 파악할 수 있습니다. ",
    ],
  },
  {
    title: "골다공증은 칼슘섭취로 극복할 수 있나요?",
    descriptions: [
      "A. 증상의 경중과 치료에 대한 반응이 환자분들마다 다르기에 치료 기간은 개인별로 차이가 있을 수 있습니다.",
      "보통, 청력이 정상인데 이명이 있을 경우 1~3개월, 이명이 동반된 경도 난청의 경우 3개월, 중도 난청의 경우 6개월,중고도 난청의 경우 6~9개월 이상의 치료 기간이 소요됩니다.",
    ],
  },
  {
    title: "증상이 없어도 치료가 필요한가요?",
    descriptions: [
      "소리재활훈련 기준 30시간마다 이명 검사를 실시합니다. 소리재활치료 음원을 매일 1시간씩 꾸준히 듣는다면 월 1회 정도 이명 검사를 실시하게 됩니다.",
    ],
  },
];

export default function QnA() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="질문과 답변">QnA</SectionTitle>

        <QnaList lists={qnaList} />
      </Wrapper>
    </div>
  );
}
