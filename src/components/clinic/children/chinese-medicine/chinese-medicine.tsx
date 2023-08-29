import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./chinese-medicine.module.scss";
import StepProcess from "../../common/step-process/step-process";
import { cx } from "@/libs/utils";
import SectionTitle from "@/components/common/section-title/section-title";
import Image from "next/image";
import RoundedBanner from "@/components/ui/rounded-banner/rounded-banner";

const list = [
  {
    title: "학습전략검사",
    image: "clinic_academic_process1",
    descriptions: ["수험생 문진표", "뇌파, 스트레스 검사"],
  },
  {
    title: "학습체력검사",
    image: "clinic_academic_process2",
    descriptions: ["엑스바디, 인바디", "맥진검사"],
  },
  {
    title: "치료",
    image: "clinic_academic_process3",
    descriptions: ["뉴피드백 훈련", "추나치료"],
  },
  {
    title: "맞춤형 한약처방",
    image: "clinic_academic_process4",
    descriptions: ["개인 질환과 증상에 알맞는 한약 처방"],
  },
];

const imageList = [
  { title: "체력증진 한약", image: "clinic_hanyak1" },
  { title: "총명공진단", image: "clinic_hanyak2" },
  { title: "경옥고", image: "clinic_hanyak2" },
  { title: "면역젤리", image: "clinic_hanyak2" },
];

export default function ChineseMedicine() {
  return (
    <>
      <div className={cx(s.wrapper, s.upper)}>
        <Wrapper>
          <StepProcess lists={list} />
        </Wrapper>
      </div>

      <div className={cx(s.wrapper, s.lower)}>
        <Wrapper>
          <SectionTitle description="키 성장 다양한 부분을 신경써야 합니다.">
            본수호 <span className={s.orange}>학습체력 증진</span> 한약
          </SectionTitle>

          <div className={s.card_list_wrapper}>
            {imageList.map((image) => (
              <div key={`한약-${image.title}`} className={s.card}>
                <Image
                  src={`/assets/${image.image}.png`}
                  alt={`한약-${image.title}`}
                  width={560}
                  height={420}
                  className={s.image}
                />
                <RoundedBanner className={s.banner}>
                  {image.title}
                </RoundedBanner>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>
    </>
  );
}
