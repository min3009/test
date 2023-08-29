import Image from "next/image";
import Wrapper from "@/components/ui/wrapper/wrapper";
import SectionTitle from "@/components/common/section-title/section-title";
import s from "./possibility.module.scss";

const checkList = {
  left: [
    "완전마비환자",
    "3주 이내에 회복이 관찰 안되는 경우",
    "60세 이상 환자",
    "심한 통증을 동반한 경우",
  ],
  right: [
    "미각장애, 침분비 감소 동반한 경우",
    "람세이헌트증후군",
    "당뇨병 환자",
  ],
};

export default function Possibility() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <SectionTitle description="증상을 알고 치료하자!">
          안면마비 후유증 <span className={s.orange}>가능성이 높은 환우</span>
        </SectionTitle>

        <Image
          src="/assets/face_aftereffect_possibility.png"
          alt="안면마비 후유증 가능성이 높은 환우"
          width={1200}
          height={632}
          className={s.image}
        />

        <div className={s.list_wrapper}>
          <ul className={s.list}>
            {checkList.left.map((list) => (
              <li className={s.item}>
                <Image
                  src="/assets/check.png"
                  alt="Check"
                  width={50}
                  height={50}
                />
                <span className={s.text}>{list}</span>
              </li>
            ))}
          </ul>
          <ul className={s.list}>
            {checkList.right.map((list) => (
              <li className={s.item}>
                <Image
                  src="/assets/check.png"
                  alt="Check"
                  width={50}
                  height={50}
                />
                <span className={s.text}>{list}</span>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </div>
  );
}
