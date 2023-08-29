import SectionTitle from "@/components/common/section-title/section-title";
import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./puberty.module.scss";
import { cx } from "@/libs/utils";
import Image from "next/image";
import CheckList from "@/components/ui/check-list/check-list";
import RoundedBanner from "@/components/ui/rounded-banner/rounded-banner";

const lists = [
  "초등학교에 들어간 우리 딸, 가슴 몽우리가 생겼어요.",
  "너무 잘 먹어서 걱정인 우리 아들, 옆으로만 찌는데 어쩌죠?",
  "너무 못자라는 우리 아이, 이 키에서 멈추면 어떡하죠?",
  "또래 키인 우리 딸, 초경이 시작되었어요, 더 클 수 있을까요?",
];

export default function Puberty() {
  return (
    <>
      <div className={cx(s.wrapper, s.upper)}>
        <Wrapper>
          <SectionTitle description="너무 느리거나 빠른 성장, 체크해보세요!">
            본수호 <span className={s.orange}>성조숙증</span> ·
            <span className={s.orange}>조발사춘기</span> 클리닉
          </SectionTitle>

          <div className={s.sachoon_wrapper}>
            <Image
              src="/assets/clinic_sachoon.png"
              alt="본수호 성조숙증 ·조발사춘기 클리닉"
              width={1200}
              height={790}
              draggable={false}
              className={s.image}
            />
            <CheckList lists={lists} className={s.check_list} />
          </div>
        </Wrapper>
      </div>

      <div className={cx(s.wrapper, s.lower)}>
        <Wrapper>
          <RoundedBanner>성조숙증 증후 체크리스트</RoundedBanner>
          <div className={s.check_list_image_wrapper}>
            <Image
              src="/assets/clinic_check_list.png"
              alt="성조숙증 증후 체크리스트"
              width={1200}
              height={560}
              className={s.image}
            />
          </div>
        </Wrapper>
      </div>
    </>
  );
}
