import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./lymph-manage..module.scss";
import { cx } from "@/libs/utils";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title/section-title";

export default function LymphNode() {
   return (
      <>
         <Wrapper>
            <div className={s.lymph_manage}>
               <SectionTitle
                  description="림프부종 예방을 위한"
                  className={s.title}>
                  일상생활 관리법
               </SectionTitle>

               <div className={s.lymph_manage_img}>
                  <Image
                     src="/assets/lymph-manage.png"
                     alt="림프부종"
                     width={1200}
                     height={750}
                  />
               </div>
               <div className={s.lymph_manage_content}>
                  <h3 className={s.h3}>적절한 운동을 규칙적으로 하고 적정 체중을 유지하세요!</h3>
                  <p>적절한 운동은 남아있는 림프관을 확장시켜 림프액의 흐름이 좋아지게 합니다. 근육의 펌프작용을 이용하거나 림프흐름을 촉진할 수 있는 운동으로 가볍고 율동적인 (rhythmical)한 동작을 정기적으로 하는 것이 좋습니다. 체중 증가는 붓는 증상을 악화시킬 수 있기 때문에 알맞은 운동으로 적절한 체중을 유지해야 합니다.</p>
                  <h3 className={s.h3}>팔과 다리에 상처나 감염이 생기지 않게 조심하세요</h3>
                  <p>부종이 있는 팔, 다리에 상처를 입으면 상처가 잘 아물지 않고 부종이 더 심해질 수 있습니다. 림프액의 순환이 느려진 부분은 감염에 취약해 림프선염 또는 봉와직염으로 염증이 진행될 수 있으므로 피부가 손상되거나 갈라지지 않도록 유의해야 합니다. 또한 벌레에 물리지 않도록 조심합니다.</p>
                  <h3 className={s.h3}>꽉 끼는 하의, 의복, 손목시계, 장신구는 착용하지 마세요</h3>
                  <p>허리 등 부분적으로 너무 조이지 않는 헐렁한 하의를 선택합니다. 브레지어 끈도 느슨한 것, 폭이 넓은 것을 선택합니다. 손가락이 붓기 시작하면, 반지는 즉시 빼고, 시계는 빼거나 헐거운 것으로 바꿉니다.</p>
                  <h3 className={s.h3}>팔과 다리를 심장보다 높게 유지하세요. (림프부종 증상이 있을 때에만 하세요)</h3>
                  <p>중력으로 림프액이 심장 방향으로 흐르도록 해 림프액의 흡수를 촉진시킵니다. 취침시 팔을 베개 등을 이용하여 심장보다 약한 높은 위치로 올립니다. TV 시청시나 자동차 승차시 쿠션 등으로 팔을 심장에 가까운 높이로 올립니다.</p>
                  <h3 className={cx(s.h3, s.h3_set)}>극심한 추위나 더위는 피하세요.</h3>
                  <h3 className={s.h3}>피부나 손톱을 자주 손질하세요</h3>
                  <p>손톱을 손질할 때는 손톱을 너무 짧게 자르거나 속살까지 자르지 않도록 주의합니다. 무리하게 제모하지 마십시오. 하는 경우는 전기면도기 등 피부에 부담이 적은 것을 사용합니다.</p>
                  <h3 className={s.h3}>일할 때는 다음을 주의하세요.</h3>
                  <p className={s.last_p}>무거운 것은 여러 차례로 나누어 듭니다. 몸통에 팔을 붙여 몸통 힘으로 듭니다. 장시간 컴퓨터 작업을 하는 경우는 팔꿈치 베개를 하여 손의 무게를 경감시키거나, 중간 중간 팔꿈치 구부렸다 펴는 동작을 합니다.</p>

               </div>
            </div>
         </Wrapper>
      </>
   );
}
