import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./parkinson-notfix.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";

export default function Cognitive() {
  return (
    <>
      <div className={s.page_wrapper}>
        <Wrapper>
          <div className={s.main_title}>
            <SectionTitle description="파킨슨병 치료하지 않으면 어떻게 될까요?">
              15년 내의 생존 환자의
              <br />
              <strong>40%는 치매, 43%는 심한 장애</strong>로 진행
            </SectionTitle>
          </div>
          <div className={s.notfix_content}>
            <Image
              src="/assets/cognitive-notfix.png"
              alt=""
              width={1200}
              height={500}
              className={s.notfix_content_img}
            />
            <p>
              시간이 경과함에 따라 파킨슨병 환자들의 증상은 더욱 악화되며, 심한 장애를 갖게 됩니다. 또한 퇴행성
              질환(치매)이
              <br />
              동반될 가능성이 높아집니다. 실제로 파킨슨병을 앓고 있는 환자의 40%는 치매로 전이되어 적극적으로 뇌 건상에
              관심을 가지고
              <br />
              발병 위험을 낮춰야 합니다.
            </p>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
