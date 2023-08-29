import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./lymphedema.module.scss";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";

export default function LymphNode() {
   return (
      <>
         <Wrapper>
            <div className={s.lymph_edema}>
               <SectionTitle
                  description="이유없이 붓기가 잘생기고 빠지지 않는다면?"
                  className={s.title}>
                  림프부종
               </SectionTitle>
               <div className={s.lymphedema_img}>
                  <Image
                     src="/assets/lymph-edema.png"
                     alt="림프부종"
                     width={1200}
                     height={750}
                  />
               </div>
               <div className={s.lymphedema_content}>
                  <p>림프가 림프계를 통해 전신을 순환하면서 몸의 노폐물과 바이러스를 파괴하기 때문에 순환하는 것 자체가 외부의 침입자로부터 방어하는 기능을 합니다. 림프관이 손상되어 사지에 림프액이 순조롭게 빠져나가지 못하면 림프 부종이 발생하게 됩니다. 림프절 제거술 및 림프절 부위 방사선 치료를 받는 경우 림프액의 순환이 느려지게 됩니다. 또는 림프절에 암이 전이 되거나, 증식되는 경우 림프관이 막히게 되어 림프부종이 진행될 수 있습니다.
                     <br /><br />
                     드물게는 림프부종이 선천적으로 발생할 수 있는데, 림프관이 불완전하게 형성되어, 기능이 저하되어 있다가, 사춘기 때 또는 과격한 운동을 한 이후 부종이 발현되어 지속되는 경우가 있습니다.
                     <br /><br />
                     림프부종은 시간의 흐름에 따라 점진적으로 진행되는 특징이 있습니다. 처음에는 림프의 순환이 느려져서 림프관내 압력의 증가로 림프관 손상이 진행되다가, 차츰 림프관이 손상되어 체외수분에 림프액의 정체로 섬유화가 되면서 조직적인 변화를 가져옵니다. 이러한 특성에 따라 림프부종을 림프부종을 임상적으로 0,1,2,3 기로 나누게 됩니다. 림프부종의 위험이 있는 경우 초기 증상 (상지 또는 하지의 묵직함, 당김, 팽만감 등의 자각 증상)과 피부 변화 (함요부종, 피부 주름의 유무)로 조기에 부종을 발견하여 진행되기 전 빨리 의료진을 찾는 것이 중요합니다.</p>
               </div>
            </div>
         </Wrapper>
      </>
   );
}
