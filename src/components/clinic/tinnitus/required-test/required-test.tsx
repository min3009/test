import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./required-test.module.scss";
import SectionTitle from "@/components/common/section-title/section-title";
import Image from "next/image";
import RoundedBanner from "@/components/ui/rounded-banner/rounded-banner";
import { cx } from "@/libs/utils";

const itemList = [
  {
    title: "미세청력검사",
    image: "tinnitus_testing_1",
    description: {
      about:
        "기존의 6밴드, 17밴드와 다르게 67~134밴드 까지의 고해상도 주파수 사양으로 청력검사를 실시합니다.",
      does: "이명을 유발하는 격동현상과 손상된 청각 주파수 위치를 정밀하게 파악하여, 이명과 난청의 원인을 정확하게 찾아내 치료를 최적화하는 자동화 청력 검사입니다.",
    },
  },
  {
    title: "맥진검사",
    image: "tinnitus_testing_2",
    description: {
      about:
        "한의학의 전통적 진단행위인 진맥을 객관적인 파형으로 시각화한 진단기입니다.",
      does: "12장기에서 각기 나타나는 27개 형태의 맥파와 맥동을 통해  환자의 건강 상태를 분석합니다. 맥진검사는 이명의 발생 원인이 인체의 구조·기능·조직·정신건강 중 무엇인지 파악해 치료의 방향을 결정하는데 매우 중요한 진단의 기초가 됩니다.",
    },
  },
  {
    title: "스트레스 검사",
    image: "tinnitus_testing_4",
    description: {
      about: "적외선 체열검사를 통해 오장육부의 한열상태를 파악할 수 있습니다.",
      does: "몸 내부의 온도 변화를 확인하게 되면 신체의 긴장도와 순환 상태, 말초신경의 손상 여부 등을 더욱 정확하게 진단할 수 있습니다.",
    },
  },
  {
    title: "체열진단 검사",
    image: "tinnitus_testing_4",
    description: {
      about:
        "기존의 6밴드, 17밴드와 다르게 67~134밴드 까지의 고해상도 주파수 사양으로 청력검사를 실시합니다.",
      does: "이명을 유발하는 격동현상과 손상된 청각 주파수 위치를 정밀하게 파악하여, 이명과 난청의 원인을 정확하게 찾아내 치료를 최적화하는 자동화 청력 검사입니다.",
    },
  },
  {
    title: "뇌파 검사",
    image: "tinnitus_testing_5",
    description: {
      about: "뇌가 보내는 전기 신호를 그래프로 표현하는 검사입니다.",
      does: "뇌파검사를 통해 뇌 기능 상태의 불균형을 측정·분석하고, 다양한 뇌 훈련 프로그램을 통해 이명 치료의 효과를 높일 수 있습니다.",
    },
  },
];

export default function RequiredTest() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="본수호, 검사부터 다르다!">
          본수호 이명난청 <span className={s.orange}>필수 검사</span>
        </SectionTitle>

        <div className={s.list_wrapper}>
          {itemList.map((item) => (
            <div className={s.card}>
              <Image
                src={`/assets/${item.image}.png`}
                alt={item.title}
                width={350}
                height={350}
              />
              <div className={s.text_wrapper}>
                <div className={s.banner_wrapper}>
                  <RoundedBanner className={s.banner}>
                    {item.title}
                  </RoundedBanner>
                </div>
                <p className={s.about}>{item.description.about}</p>
                <p className={cx(s.does, s.orange)}>{item.description.does}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
