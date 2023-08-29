import Image from "next/image";
import Link from "next/link";
import { cx } from "@/libs/utils";
import s from "./slides.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";

function Slide1() {
  return (
    <div className={cx(s.bg, s.bg_one)}>
      <Wrapper>
        <div className={s.header}>
          <Image
            src="/assets/hospital-director.png"
            alt="hospital director"
            width={545}
            height={845}
            className={s.director}
          />

          <div className={s.text_wrapper}>
            <h2 className={s.h2}>
              청각세포 활성화!
              <br />
              힘을 잃은 청력을 깨우다
            </h2>

            <h1 className={s.h1}>
              이명·난청
              <br />
              귀수호 치료솔루션
            </h1>

            <h3 className={s.h3}>
              이명 난청 고립되지 않고
              <br />
              행복한 일상으로 되돌아 갈 수 있습니다.
            </h3>

            <Link href="/" className={s.link}>
              자세히보기
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

function Slide2() {
  return (
    <div className={cx(s.bg, s.bg_two)}>
      <Wrapper>
        <div className={s.header}>
          <Image
            src="/assets/hospital-director.png"
            alt="hospital director"
            width={545}
            height={845}
            className={s.director}
          />

          <div className={s.text_wrapper}>
            <h2 className={s.h2}>
              청각세포 활성화!
              <br />
              힘을 잃은 청력을 깨우다
            </h2>

            <h1 className={s.h1}>
              이명·난청
              <br />
              귀수호 치료솔루션
            </h1>

            <h3 className={s.h3}>
              이명 난청 고립되지 않고
              <br />
              행복한 일상으로 되돌아 갈 수 있습니다.
            </h3>

            <Link href="/" className={s.link}>
              자세히보기
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

function Slide3() {
  return (
    <div className={cx(s.bg, s.bg_three)}>
      <Wrapper>
        <div className={s.header}>
          <Image
            src="/assets/hospital-director.png"
            alt="hospital director"
            width={545}
            height={845}
            className={s.director}
          />

          <div className={s.text_wrapper}>
            <h2 className={s.h2}>
              청각세포 활성화!
              <br />
              힘을 잃은 청력을 깨우다
            </h2>

            <h1 className={s.h1}>
              이명·난청
              <br />
              귀수호 치료솔루션
            </h1>

            <h3 className={s.h3}>
              이명 난청 고립되지 않고
              <br />
              행복한 일상으로 되돌아 갈 수 있습니다.
            </h3>

            <Link href="/" className={s.link}>
              자세히보기
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

function Slide4() {
  return (
    <div className={cx(s.bg, s.bg_four)}>
      <Wrapper>
        <div className={s.header}>
          <Image
            src="/assets/hospital-director.png"
            alt="hospital director"
            width={545}
            height={845}
            className={s.director}
          />

          <div className={s.text_wrapper}>
            <h2 className={s.h2}>
              청각세포 활성화!
              <br />
              힘을 잃은 청력을 깨우다
            </h2>

            <h1 className={s.h1}>
              이명·난청
              <br />
              귀수호 치료솔루션
            </h1>

            <h3 className={s.h3}>
              이명 난청 고립되지 않고
              <br />
              행복한 일상으로 되돌아 갈 수 있습니다.
            </h3>

            <Link href="/" className={s.link}>
              자세히보기
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

function Slide5() {
  return (
    <div className={cx(s.bg, s.bg_five)}>
      <Wrapper>
        <div className={s.header}>
          <Image
            src="/assets/hospital-director.png"
            alt="hospital director"
            width={545}
            height={845}
            className={s.director}
          />

          <div className={s.text_wrapper}>
            <h2 className={s.h2}>
              청각세포 활성화!
              <br />
              힘을 잃은 청력을 깨우다
            </h2>

            <h1 className={s.h1}>
              이명·난청
              <br />
              귀수호 치료솔루션
            </h1>

            <h3 className={s.h3}>
              이명 난청 고립되지 않고
              <br />
              행복한 일상으로 되돌아 갈 수 있습니다.
            </h3>

            <Link href="/" className={s.link}>
              자세히보기
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default { Slide1, Slide2, Slide3, Slide4, Slide5 };
