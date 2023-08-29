import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./find-us.module.scss";
import Image from "next/image";
import { cx } from "@/libs/utils";
import Link from "next/link";

export default function FindUs() {
  return (
    <div>
      {/* TODO: 네이버 필요 */}
      <Wrapper>
        <div className={s.map_style}>
          < a href="https://map.kakao.com/?urlX=513680&urlY=650203&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false" target="_blank" >
            <Image
              src="http://t1.daumcdn.net/roughmap/imgmap/a6365d0bd94b29549ea3cc722c0a9656e0477a5dfbd8eeabc20c1b6e8ca3742c"
              alt=""
              width={800}
              height={500}
              className={s.map_border_box}
            />
          </a>

          <div className={s.hide}>
            <strong className={s.float_left}>
              <Image
                src="https://t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                alt="카카오맵"
                width={72}
                height={16}
              />
            </strong>
            <div className={s.float_right}>
              <a href="https://map.kakao.com/?urlX=513680&urlY=650203&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false" target="_blank" className={s.font_size}>지도 크게 보기</a>
            </div>
          </div>
        </div>

        <div className={s.address}>
          전북 전주시 덕진구 기지로 78, 9층 본수호한의원
        </div>

        <div className={s.transportation_wrapper}>
          <div className={s.box}>
            <h4 className={s.h4}>
              <span className={s.image_wrapper}>
                <Image
                  src="/assets/i-car.png"
                  alt="자동차"
                  width={60}
                  height={60}
                />
              </span>
              자동차로 오시는 길
            </h4>

            <div className={s.list_wrapper}>
              <p>▷네비게이션 검색</p>
              <p>▷'기지로 78' 또는 본수호한의원 검색</p>
              <p>▷지하주차장 주차</p>
              <p>▷엘레베이터 이용하여 9층으로 이동</p>
            </div>
          </div>

          <div className={s.box}>
            <h4 className={s.h4}>
              <span className={s.image_wrapper}>
                <Image
                  src="/assets/i-bus.png"
                  alt="대중교통"
                  width={50}
                  height={50}
                />
              </span>
              대중교통으로 오시는 길
            </h4>

            <div className={s.list_wrapper}>
              <p>▷일반 버스 및 마을버스 이용</p>
              <p>
                ▷'대방빌딩' 버스정류장
                <br />
                또는 '호반더센트럴' 버스정류장 하차
              </p>
              <p>
                <span className={s.bus_number}>일반</span>74, 75, 220-1, 220-2
              </p>
              <p>
                <span className={s.bus_number}>일반</span>46
              </p>
            </div>
          </div>
        </div>

        <div className={s.guidance_wrapper}>
          <div className={s.box}>
            <h4 className={s.h4}>
              <span className={s.image_wrapper}>
                <Image
                  src="/assets/i-clock.png"
                  alt="진료시간"
                  width={55}
                  height={55}
                />
              </span>
              진료시간 안내
            </h4>

            <div className={s.list_wrapper}>
              <p>
                <span className={s.title}>
                  <span>평</span>
                  <span>일</span>
                </span>
                <span className={s.info}>09:30~20:00</span>
              </p>
              <p>
                <span className={s.title}>
                  <span>토</span>
                  <span>·공휴일</span>
                </span>
                <span className={s.info}>09:30~17:00</span>
              </p>
              <p>
                <span className={s.title}>
                  <span>일</span>
                  <span>요</span>
                  <span>일</span>
                </span>
                <span className={s.info}>휴진</span>
              </p>
            </div>
          </div>

          <div className={s.box}>
            <h4 className={s.h4}>
              <span className={s.image_wrapper}>
                <Image
                  src="/assets/i-phone.png"
                  alt="예약 및 상담"
                  width={50}
                  height={50}
                />
              </span>
              예약 및 상담 안내
            </h4>

            <div className={cx(s.list_wrapper, s.reservation)}>
              <p>
                <span className={s.title}>전화 예약</span>
                <span className={s.info}>063)222-7579</span>
              </p>
              <p>
                <span className={s.title}>네이버 예약</span>
                <span className={s.info}>'본수호한의원' 검색</span>
              </p>
              <p>
                <span className={s.title}>홈페이지</span>
                <span className={s.info}>
                  <Link
                    href="https://brainsooho.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    brainsooho.com
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
