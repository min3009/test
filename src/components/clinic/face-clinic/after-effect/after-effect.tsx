import SectionTitle from "@/components/common/section-title/section-title";
import s from "./after-effect.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";
import Image from "next/image";

const lists = [
  {
    title: "병적 공동운동(연합운동)",
    image: "face_aftereffect1",
    description:
      "눈을 감으면 동시에 입이 움직이고, 휘파람을 불 듯이 입을 모으면 눈이 감겨버리는 양상의 비정상적인 운동",
  },
  {
    title: "안면경련",
    image: "face_aftereffect2",
    description:
      "교감신경을 주로 담당하는 척추의 긴장을 풀어주고 올바르게 정렬시켜 교감신경의 항진을 저하시킵니다.",
  },
  {
    title: "얼굴근육 수축",
    image: "face_aftereffect3",
    description: "얼굴이 비재칭되며 안면마비로 인해 얼굴근육이 수축됨",
  },
  {
    title: "병적 공동운동(연합운동)",
    image: "face_aftereffect4",
    description: "식사시 침과 눈물이 동시에 과다하게 나옴",
  },
];

export default function () {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="증상을 알고 치료하자!">
          안면마비 후유증의 <span className={s.orange}>4대 증상</span>
        </SectionTitle>

        <div className={s.card_list}>
          {lists.map((list) => (
            <div className={s.card}>
              <Image
                src={`/assets/${list.image}.png`}
                alt={list.image}
                width={180}
                height={180}
              />
              <div className={s.text_wrapper}>
                <h4>{list.title}</h4>
                <p>{list.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
