import SectionTitle from "@/components/common/section-title/section-title";
import s from "./special-choona.module.scss";
import CheckList from "@/components/ui/check-list/check-list";
import Image from "next/image";
import Wrapper from "@/components/ui/wrapper/wrapper";
import { cx } from "@/libs/utils";
import StepProcess from "../../common/step-process/step-process";

const checklists = ["발달장애", "ADHD", "자폐 스펙트럼", "틱 장애"];

const stepLists = [
  {
    title: "맞춤한약",
    image: "clinic_choona_process1",
    descriptions: ["아이의 건강과", "체질을 고려!"],
  },
  {
    title: "두개천골추나",
    image: "clinic_choona_process2",
    descriptions: ["신체적 긴장과", "심리적 불안을 개선!"],
  },
  {
    title: "자율신경 훈련",
    image: "clinic_choona_process3",
    descriptions: ["뇌파와 자율신경", "안정화!"],
  },
  {
    title: "침, 뜸 치료",
    image: "clinic_choona_process4",
    descriptions: ["아프지 않고", "편안하게!"],
  },
];

export default function SpecialChoona() {
  return (
    <>
      <div className={cx(s.wrapper, s.upper)}>
        <Wrapper>
          <SectionTitle description="소아 청소년을 위한 특수추나">
            본수호 소아 <span className={s.orange}>특수추나</span> 클리닉
          </SectionTitle>

          <div className={s.list_wrapper}>
            <CheckList lists={checklists} />
            <Image
              src="/assets/clinic_choona.png"
              alt="특수추나 클리닉"
              width={600}
              height={395}
            />
          </div>
        </Wrapper>
      </div>

      <div className={cx(s.wrapper, s.lower)}>
        <Wrapper>
          <StepProcess lists={stepLists} />
        </Wrapper>
      </div>
    </>
  );
}
