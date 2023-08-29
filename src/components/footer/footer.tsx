import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className={s.background}>
        <Wrapper>
          <div className={s.total}>
            <div className={s.left}>
              <div>
                <div className={s.l_text}>건강한 일상을 응원합니다.</div>
                <div className={s.tel}>063) 222-7579</div>
              </div>
              <div className={s.kakao}>
                <Image src={"/assets/kakao_i.png"} alt={"kakao_image"} width={80} height={80} />
                <div className={s.kakao_text}>
                  <div className={s.k_t_1}>카톡 상담</div>
                  <div className={s.k_t_2}>본수호한의원</div>
                </div>
              </div>
            </div>
            <div className={s.middle}>
              <div className={s.m_top}>
                <div className={s.day}>
                  <span>· 평일진료</span>
                  <span>· 토/공휴일</span>
                  <span>· 일요일</span>
                  <span>· 점심시간</span>
                </div>
                <div className={s.time}>
                  <span>AM 09:30~PM 08:00</span>
                  <span>AM 09:30~PM 05:00</span>
                  <span className={s.point}>정기휴무</span>
                  <span>PM 01:00~PM 02:00</span>
                </div>
              </div>
              <div className={s.notice}>▷ 토요일과 공휴일은 점심시간 없이 진료</div>
            </div>
            <div className={s.right}>
              <div className={s.up}>
                <Link href={"/about/find-us"} className={s.box}>
                  <Image src={"/assets/footer_i1.png"} alt={"오시는 길"} width={40} height={40} className={s.f_i} />
                  <div className={s.f_i_text}>오시는 길</div>
                </Link>
                <Link href={"/"} className={s.box}>
                  <Image src={"/assets/footer_i2.png"} alt={"진료 예약"} width={40} height={40} className={s.f_i} />
                  <div className={s.f_i_text}>진료 예약</div>
                </Link>
                <Link href={"/about/doctors"} className={s.box}>
                  <Image src={"/assets/footer_i3.png"} alt={"의료진 소개"} width={40} height={40} className={s.f_i} />
                  <div className={s.f_i_text}>의료진 소개</div>
                </Link>
                <Link href={"/"} className={s.box}>
                  <Image src={"/assets/footer_i4.png"} alt={"본수호 특별함"} width={40} height={40} className={s.f_i} />
                  <div className={s.f_i_text}>본수호 특별함</div>
                </Link>
              </div>
              <div className={s.down}>
                <Link href={"/"} className={s.box}>
                  <Image src={"/assets/footer_i5.png"} alt={"치료 사례"} width={40} height={40} className={s.f_i} />
                  <div className={s.f_i_text}>치료 사례</div>
                </Link>
                <Link href={"/"} className={s.box}>
                  <Image src={"/assets/footer_i6.png"} alt={"치료 후기"} width={40} height={40} className={s.f_i} />
                  <div className={s.f_i_text}>치료 후기</div>
                </Link>
                <Link href={"/"} className={s.box}>
                  <Image src={"/assets/footer_i7.png"} alt={"전화 상담"} width={40} height={40} className={s.f_i} />
                  <div className={s.f_i_text}>전화 상담</div>
                </Link>
                <Link href={"https://blog.naver.com/brainsooho"} className={s.box}>
                  <Image src={"/assets/footer_i8.png"} alt={"공식 블로그"} width={40} height={40} className={s.f_i} />
                  <div className={s.f_i_text}>공식 블로그</div>
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className={s.bottom}>
          <div className={s.b_text1}>
            본수호한의원 ㅣ 대표원장 : 박수호 ㅣ 사업자등록번호 : 626-94-01305 ㅣ 전화번호 : 063-222-7579
            <br />
            주소 : 전북 전주시 덕진구 기지로78 9층 (다이소 혁신점 건물 9층)
          </div>
          <div className={s.b_text2}>Copyright © 2023. All Rights Reserved. | Designed by FRANKEN</div>
        </div>
      </Wrapper>
    </div>
  );
}
