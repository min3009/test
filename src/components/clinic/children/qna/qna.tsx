import SectionTitle from "@/components/common/section-title/section-title";
import s from "./qna.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";
import QnaList from "@/components/ui/qna-list/qna-list";

const qaList = [
  {
    title: "편식이 심한 우리 아이, 약은 잘 먹을까요?",
    descriptions: [
      "본수호한의원 소아 한약은 탕약 이외에도 아이들의 입맛과 선호도를 반영한 젤리형, 엑기스형, 고형 처방이 있습니다. 탕약을 먹는 과정이 어려운 친구들은 일단 친숙한 맛과 향의 처방으로 한약에 대한 거부감을 줄여 나가는 노력부터 시작하셔도 됩니다.",
    ],
  },
  {
    title: "한약을 먹으면 갑자기 살이 찌지 않을까요?",
    descriptions: [
      "우리 아이의 체질적 소인, 건강 특징을 고려한 맞춤 처방으로 제공되기에 체중 급증은 염려하시지 않아도 됩니다. 오히려 저체중 어린이에게는 식욕을 돕는 약재들이 많이 들어가기도 하지만, 실제로 소나기밥을 먹게 되는 일이 드물 정도입니다.",
      "",
      "아울러, 본원에서 한 달에 한 번 아이의 신장, 체중 발달을 측정하며 균형 있는 성장을 살피므로 염려하시지 않으셔도 좋습니다.",
    ],
  },
  {
    title: "다이어트 한약을 먹으면 밥을 안 먹어 키가 안클까봐 걱정돼요.",
    descriptions: [
      " 수많은 연구와 통계를 통해 과체중의 아이들의 최종 달성 키가 정상체중 범주보다 작고, 성인기에 다양한 대사성 질환의 위험이 높아지는 경향이 입증되고 있습니다.",
      "",
      "본수호 소아 다이어트는 우리 아이의 성장과 심리문제, 체형부정렬, 장기적인 건강까지 고려한 안전하고 유익한 치료 서비스를 제공합니다.",
    ],
  },
  {
    title: "한약을 오래 먹어도 건강에 문제가 없을까요?",
    image: {
      description:
        "160명 어린이 대상 한약 3개월 이상 복용 후 수치비교 결과 (검사기관 : 녹십자의료재단)",
      url: "clinic_graph",
    },
    descriptions: [
      "소아 전문 한의원에서 3개월 이상 한약을 복용한 어린이 160명을 대상으로 조사한 결과한약 복용 전후에 간기능 수치가 모두 정상 범위 내에 있었으며, 특히 AST와 ALT 수치는 한약 복용 후 개선되는 것을 확인하였습니다. 한의사의 정확한 진단과 평가 하에 처방되는 한약은 우리 아이의 건강에 도움이 됩니다.",
    ],
  },
];

export default function QnA() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="질문과 답변">QnA</SectionTitle>

        <QnaList lists={qaList} />
      </Wrapper>
    </div>
  );
}
