import Wrapper from "@/components/ui/wrapper/wrapper";
import Image from "next/image";
import s from "./rotation.module.scss";

export default function Rotation() {
  return (
    <div className={s.wrapper}>
      <Wrapper>
        <div className={s.image_wrapper}>
          <Image
            src="/assets/tinnitus_temporal_rotation.png"
            alt="측두골의 내회전과 외회전"
            width={1034}
            height={617}
            className={s.image}
          />
        </div>

        <h4 className={s.h4}>&lt;측두골의 내회전과 외회전&gt;</h4>

        <p className={s.description_orange}>
          본수호한의원에서는 두개천골추나를 통해 측두골을 교정하여 이명을
          치료합니다.{" "}
        </p>

        <p className={s.description}>
          측두골에는 달팽이관이 위치하는데, 저음의 이명은 측두골의 외회전 고정
          기능장애와 연관되고, 고음의 이명은
          <br />
          측두골의 내회전 고정 기능장애와 연관됩니다. 따라서 이명 치료에서는
          측두골의 올바른 교정이 중요합니다
        </p>
      </Wrapper>
    </div>
  );
}
