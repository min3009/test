import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./accident_main2.module.scss";
import Image from "next/image";

export default function Accident_main2() {
  return (
    <>
      <div className={s.gray_back}>
        <Wrapper>
          <div className={s.section7}>
            <p className={s.des}>교통사고 통증, 다 같은 것이 아닙니다.</p>
            <h2 className={s.title}>
              사고 유형에 따른
              <span className={s.point}> 손상범위 파악</span>
            </h2>
          </div>
          <p className={s.sec7_detail}>
            승용차, 승합차, 버스, 자전거, 킥보드, 보행자 일 경우 각각의 유형에 따라 충격을 받았을 때 취하는 자세와
            추돌하는 위치가 다르기 때문에 충분히 고려되어야 합니다.
          </p>
          <div className={s.sec7_items}>
            <div className={s.sec7_item}>
              <div className={s.sec7_i_title}>
                사고
                <br />
                유형
              </div>
              <div className={s.sec7_i_options}>
                <div className={s.sec7_i_option}>
                  <Image src="/assets/car1.png" alt="승용차" width={100} height={58.33} />
                  <p className={s.sec7_option_t}>승용차</p>
                </div>
                <div className={s.sec7_i_option}>
                  <Image src="/assets/car2.png" alt="대형버스" width={100} height={58.33} />
                  <p className={s.sec7_option_t}>대형버스</p>
                </div>
                <div className={s.sec7_i_option}>
                  <Image src="/assets/car3.png" alt="자전거/바이크" width={100} height={58.33} />
                  <p className={s.sec7_option_t}>자전거/바이크</p>
                </div>
                <div className={s.sec7_i_option}>
                  <Image src="/assets/car4.png" alt="킥보드" width={100} height={58.33} />
                  <p className={s.sec7_option_t}>킥보드</p>
                </div>
                <div className={s.sec7_i_option}>
                  <Image src="/assets/car5.png" alt="보행자" width={100} height={58.33} />
                  <p className={s.sec7_option_t}>보행자</p>
                </div>
              </div>
            </div>
            <div className={s.sec7_item}>
              <div className={s.sec7_i_title}>
                충돌
                <br />
                방향
              </div>
              <div className={s.sec7_i_options}>
                <div className={s.sec7_i_option}>
                  <Image src="/assets/car6.png" alt="전방 교통사고" width={100} height={58.33} />
                  <p className={s.sec7_option_t}>전방 교통사고</p>
                </div>
                <div className={s.sec7_i_option}>
                  <Image src="/assets/car7.png" alt="측면 교통사고" width={100} height={58.33} />
                  <p className={s.sec7_option_t}>측면 교통사고</p>
                </div>
                <div className={s.sec7_i_option}>
                  <Image src="/assets/car8.png" alt="후방 교통사고" width={100} height={58.33} />
                  <p className={s.sec7_option_t}>후방 교통사고</p>
                </div>
              </div>
            </div>
            <div className={s.sec7_item}>
              <div className={s.sec7_i_title}>
                사고
                <br />
                위치
              </div>
              <div className={s.sec7_i_options}>
                <div className={s.sec7_i_option}>
                  <Image src="/assets/car9.png" alt="운전석" width={100} height={58.33} />
                  <p className={s.sec7_option_t}>운전석</p>
                </div>
                <div className={s.sec7_i_option}>
                  <Image src="/assets/car10.png" alt="보조석" width={100} height={58.33} />
                  <p className={s.sec7_option_t}>보조석</p>
                </div>
                <div className={s.sec7_i_option}>
                  <Image src="/assets/car11.png" alt="뒷자리" width={100} height={58.33} />
                  <p className={s.sec7_option_t}>뒷자리</p>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className={s.section8}>
          <p className={s.des}>통증의 원인과 정도에는 차이가 있습니다.</p>
          <h2 className={s.title}>
            사고 유형에 따른
            <span className={s.point}> 통증 증후</span>
          </h2>
        </div>
        <Image
          src="/assets/acci_15.png"
          alt="사고 유형에 따른 통증 증후"
          width={1200}
          height={900}
          className={s.sec8_image}
        />
      </Wrapper>
      <div className={s.gray_back}>
        <Wrapper>
          <div className={s.section9}>
            <p className={s.des}>건강의 기본은 면역력!</p>
            <h2 className={s.title}>
              <span className={s.point}>추돌 상황</span>에 대한 손상
            </h2>
          </div>
          <p className={s.sec9_detail}>
            교통사고는 예상하지 못한 상황에 발생하기 때문에 미처 대비하지 못하고 머리가 앞뒤로 심하게 흔들립니다.
            <br />
            제대로 고정되지 않고 심해게 앞뒤로 흔들리면서 경추와 뇌에 손상을 주고 전신증상을 가지고 옵니다.
          </p>
          <div className={s.sec9_items}>
            <div className={s.sec9_item}>
              <div className={s.s9_i_left}>
                <Image src="/assets/acci_16.png" alt="1단계" width={550} height={350} />
                <h5 className={s.s9_image_step}>1단계</h5>
              </div>
              <div className={s.s9_i_right}>
                <p className={s.s9_i_r_title}>
                  처음 사고가 일어난 순간부터
                  <br />
                  머리와 목이 신전되기 전까지의 시기
                </p>
                <p className={s.s9_i_r_detail}>
                  탑승자의 몸통 부위가 가장 먼저 가속을 받게 되고
                  <br />
                  머리와 목은 고정한 상태를 유지합니다.
                  <br />
                  척추는 골곡이 곧게 펴지면서 경추가 압박됩니다.
                </p>
              </div>
            </div>
            <div className={s.sec9_item}>
              <div className={s.s9_i_left}>
                <Image src="/assets/acci_17.png" alt="2단계" width={550} height={350} />
                <h5 className={s.s9_image_step}>2단계</h5>
              </div>
              <div className={s.s9_i_right}>
                <p className={s.s9_i_r_title}>
                  탑승자의 머리가 <br />
                  뒤로 신전되는 시기
                </p>
                <p className={s.s9_i_r_detail}>
                  머리가 하악골로부터 후상방으로 움직이면서 자발적인 주동근/길항근의 조절 없이 20-25도 이상 각도로
                  열리게 되면서 염좌와 디스크의 압박현상을 일으킵니다. 몸통은 가속되고 머리는 신전되는 운동방향의
                  엇갈림에 의해 경흉추부위에 전단손상이 발생합니다.
                </p>
              </div>
            </div>
            <div className={s.sec9_item}>
              <div className={s.s9_i_left}>
                <Image src="/assets/acci_18.png" alt="3단계" width={550} height={350} />
                <h5 className={s.s9_image_step}>3단계</h5>
              </div>
              <div className={s.s9_i_right}>
                <p className={s.s9_i_r_title}>자동차의 가속력이 감소, 머리와 몸통의 가속력의 최대치로 도달하는 시기</p>
                <p className={s.s9_i_r_detail}>
                  점차 자동차의 가속력이 감소되면서 머리, 몸통의
                  <br />
                  가속력은 최대치에 도달하여 경흉추부위의 비틀림이
                  <br />
                  최대화됩니다.
                </p>
              </div>
            </div>
            <div className={s.sec9_item}>
              <div className={s.s9_i_left}>
                <Image src="/assets/acci_19.png" alt="4단계" width={550} height={350} />
                <h5 className={s.s9_image_step}>4단계</h5>
              </div>
              <div className={s.s9_i_right}>
                <p className={s.s9_i_r_title}>
                  자동차는 더이상 가속되지 않고
                  <br />
                  머리와 몸통은 완전히 감속하는 시기
                </p>
                <p className={s.s9_i_r_detail}>
                  안전벨트 제동이 걸리면서 몸통은 억제되지만 <br />
                  머리는 억제되지 않은 상태에서 감속되면서 관성에 의해 경흉추부의 근육 및 인대 손상을 유발합니다.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
