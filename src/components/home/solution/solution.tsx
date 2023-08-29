import Image from "next/image";
import s from "./solution.module.scss";
import { cx } from "@/libs/utils";
import Wrapper from "@/components/ui/wrapper/wrapper";
import Link from "next/link";

export default function Solution() {
  return (
    <Wrapper>
      <div className={s.wrapper}>
        <Link href={"/clinic/tinnitus"} className={s.box}>
          <h3 className={s.h3}>
            <span className={s.title}>이명·난청</span>
            치료 솔루션
          </h3>
          <p className={s.description}>
            청각세포 활성화 프로그램
            <br />
            미세청력검사 이명도검사
          </p>

          <Image src={`/assets/solution1.png`} width={300} height={290} alt="이명·난청" className={s.image} />
        </Link>

        <Link href={"/clinic/cognitive"} className={s.box}>
          <h3 className={s.h3}>
            <span className={s.title}>인지장애</span>
            치료 솔루션
          </h3>
          <p className={s.description}>
            자꾸 깜빡깜빡 하는 습관,
            <br />
            단순 건망증이 아닐 수 있습니다.
          </p>

          <Image src={`/assets/solution2.png`} width={300} height={290} alt="인지장애" className={s.image} />
        </Link>

        <Link href={"/clinic/pain"} className={s.box}>
          <h3 className={s.h3}>
            <span className={s.title}>척추·관절</span>
            치료 솔루션
          </h3>
          <p className={s.description}>
            만성통증, 원인을 알고
            <br />
            치료해야 합니다.
          </p>

          <Image src={`/assets/solution3.png`} width={300} height={290} alt="척추·관절" className={s.image} />
        </Link>

        <Link href={"/"} className={s.box}>
          <h3 className={s.h3}>
            <span className={s.title}>턱관절</span>
            치료 솔루션
          </h3>
          <p className={s.description}>
            턱소리, 개구장애, 턱통증부터
            <br />
            꼼꼼히 치료합니다.
          </p>

          <Image src={`/assets/solution4.png`} width={300} height={290} alt="턱관절" className={s.image} />
        </Link>

        <Link href={"/clinic/children"} className={cx(s.box, s.box_big)}>
          <h3 className={s.h3}>
            <span className={s.title}>소아성장</span>
            치료 솔루션
          </h3>
          <p className={s.description}>
            자초등공부는 창의력, 중등공부는 순발력,
            <br />
            고등공부는 지구력입니다.
          </p>

          <Image src={`/assets/solution5.png`} width={600} height={290} alt="소아성장" className={s.image} />
        </Link>
      </div>
    </Wrapper>
  );
}
