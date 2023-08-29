import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./review.module.scss";
import SectionTitle from "@/components/common/section-title/section-title";
import Image from "next/image";
import RoundedBanner from "@/components/ui/rounded-banner/rounded-banner";
import Link from "next/link";

const hoogiList = [
  {
    title: "지○○, 40대부터 증상이 있었던 60대 여성 이명",
    image: "tinnitus_hoogi_1",
    description:
      "오래전부터 증상이 있었지만 이명은 낫지 않는다는 말에 치료를 포기하고 있다가 최근 심해져서 본수호한의원에서 치료를 다시 시작하게 되었습니다. 좋아질 수 있다는 희망이 생겼습니다. 요즘에는 잠을 잘 자게 되면서 피로감도 많이 줄었습니다.",
  },
  {
    title: "박○○, 난청이 동반된 40대 남성 이명",
    image: "tinnitus_hoogi_2",
    description:
      "원장님께서 자세의 중요성을 강조하시고 스마트폰 사용시간도 하루 30분 이내로 줄이라는 말씀을 하셨는데, 치료를 받으면서 눈피로도 많이 줄어들고 이명도 잦아들고 있습니다. 자세가 이렇게 중요한 줄 이제 알았네요",
  },
  {
    title: "정○○, 보청기 권유받은 70대 여성 이명",
    image: "tinnitus_hoogi_3",
    description:
      "한약과 추나 치료를 모두 받고 있습니다. tv볼륨을 한참 올려야 겨우 들을 만하고 늘 귀가 울어서 힘들었는데, 요즘은 tv소리가 좀 더 선명하게 들리고 이명도 덜한 것 같아요.",
  },
];

export default function Review() {
  return (
    <>
      <div className={s.wrapper_upper}>
        <Wrapper>
          <SectionTitle description="본수호, 치료 결과부터 다르다!">
            치료 사례 및 후기
          </SectionTitle>

          <div className={s.image_wrapper}>
            <Image
              src="/assets/tinnitus_graph.png"
              alt="치료 사례 및 후기"
              width={1200}
              height={514}
              className={s.image}
            />
          </div>

          <div className={s.text_wrapper}>
            <RoundedBanner>
              x축은 주파수(소리의 높낮이), y축은 dB(소리의 크기)
            </RoundedBanner>

            <p className={s.description}>
              그래프에서 dB 수치가 낮을수록 그 높이의 소리를 작은 크기로도 들을
              수 있다는 것으로, 청력검사 그래프가 아래로 내려갈수록 청력이
              호전되었다는 의미입니다.
              <br />
              <br />
              상기 환자분의 경우, 치료받은 지 약 한 달 만에 청력검사 그래프가
              아래로 하강한 것으로 나타났고, 난청이 개선됨에 따라 이명 소리도
              많이 줄어들었습니다.
            </p>
          </div>

          <div className={s.link_wrapper}>
            <Link href="/" className={s.link}>
              치료 후기 자세히 보기
            </Link>
          </div>
        </Wrapper>
      </div>

      <div className={s.wrapper_lower}>
        <Wrapper>
          <div className={s.hoogi_list_wrapper}>
            {hoogiList.map((hoogi, idx) => (
              <div key={`hoogi-${hoogi.title}`} className={s.hoogi}>
                <Image
                  src={`/assets/${hoogi.image}.png`}
                  alt={hoogi.title}
                  width={250}
                  height={250}
                />

                <div className={s.hoogi_text_wrapper}>
                  <h4>
                    {idx + 1}. {hoogi.title}
                  </h4>
                  <p>{hoogi.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>
    </>
  );
}
