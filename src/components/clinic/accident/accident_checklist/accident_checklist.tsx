import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./accident_checklist.module.scss";
import Image from "next/image";

const list = [
  "사고 이후 평소 없던 통증이 생겼다.",
  "목이 뻣뻣하고 손이 저리다.",
  "머리가 무겁고 두통이 지속된다.",
  "전신의 움직임이 불편하다.",
  "등과 허리 부분에 통증이 있다.",
  "어지럽고 속이 메스껍다.",
  "손발이 붓는다.",
  "밤이 되면 통증이 심해진다.",
  "가슴이 두근거리고 불안하다.",
];

export default function Accident_checklist() {
  return (
    <div>
      <Wrapper>
        <p className={s.des}>본수호, 나무가 아닌 숲으로 보는 마음으로!</p>
        <h2 className={s.title}>
          교통사고 후유증 체크리스트
          <span className={s.point}> 체크리스트</span>
        </h2>
        <div className={s.checklist_wrap}>
          <div className={s.checklist}>
            <div className={s.list}>
              {list.map((item) => (
                <div className={s.option}>
                  <Image src="/assets/checking.png" alt="check" width={39} height={39} />
                  <p className={s.check_text}>{item}</p>
                </div>
              ))}
            </div>
            <Image src="/assets/check_list.png" alt="체크리스트" width={447} height={447} className={s.check_image} />
          </div>
          <h4 className={s.bottom_text}>위와 같은 증상이 지속될 때에는 교통사고 후유증 치료가 필요합니다.</h4>
        </div>
      </Wrapper>
    </div>
  );
}
