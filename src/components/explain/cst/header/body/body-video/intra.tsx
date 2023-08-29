import BannerTitle from "@/components/common/banner-title/banner-title";
import s from "./intra.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";


const list = [
   "1. 손가락으로 딱딱한 부분을 대고 머리뼈 아래 경막까지 engage한다.",
   "2. 아주 살짝 암력을 줄이고 기다리면 뼈가 사라지는 느낌을 받는다.",
   "3. 1초 정도 기다리며 경막이나 섬유질을 느끼고 움직이기 쉬운 방향으로 따라가며",
   "끝부분에서 가볍게 스트레칭된 후 되돌아온다.",
 ];



export default function Cst() {
   return (
     <>
       <Wrapper>
         <BannerTitle className={s.title}>
            <span>복와위 │ 후두하근 & 후두부 Intraosseous</span>
         </BannerTitle>
         <div className={s.vcontent_vid}>
            <video src="#" muted controls></video>
            </div>
            <table className={s.vcontent_table}>
              <tbody>
              <tr>
                <td className={s.fst_td}><strong>해부 생리</strong></td>
                <td className={s.table_set_fir}>압력을 분산시키기 위해 주변보다 밀도가 높고 딱딱한 부위가 있다.</td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <td className={s.fst_td}><strong>치료 기전</strong></td>
                <td className={s.table_set_fir}>두개골 내부 경막의 이완 → 정동맥과 림프관의 확장 → 순환량 증가</td>
              </tr>
              <tr>
                <td className={s.fst_td}><strong>치료 효과</strong></td>
                <td className={s.table_set_se}>경막의 이완<br />혈액순환 증가, 림프순환 증가</td>
              </tr>
              <tr>
                <td className={s.fst_td}><strong>치료 방법</strong></td>
                <td className={s.table_set_se}>
                  <ol>
                {list.map((item) => (
                  <li key={`t3meth-${item}`}>
                     {item}
                  </li>
                ))}
                  </ol>
                </td>
              </tr>
              </tbody>
              </table>
       </Wrapper>
     </>
   );
 }