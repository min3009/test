import BannerTitle from "@/components/common/banner-title/banner-title";
import s from "./bootjack.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";

const list = [
   "1. 양손을 발목 주위에 걸치고 engage한다.",
   "2. 경골과 거골을 가벼운 압력으로 늘려준다.",
   "3. 엿가락처럼 늘어나며 빠지는 느낌이 든다.",
   "4. 신천의 끝부분까지 따라가서 가볍게 압박하고 이완되면 손을 떼어준다.",
 ];
 

export default function Cst() {
   return (
     <>
       <Wrapper>
         <BannerTitle className={s.title}>
            <span>복와위 │ Boot Jack</span>
         </BannerTitle>
         <div className={s.vcontent_vid}>
            <video src="#" muted controls></video>
            </div>
            <table className={s.vcontent_table}>
              <tbody>
              <tr>
                <td className={s.fst_td}><strong>해부 생리</strong></td>
                <td className={s.table_set_fir}>발목 말초신경을 감싸는 신경막을 경막의 연장선으로 본다. 고유수용성 감각이 가장 많은 곳이기도 하다.</td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <td className={s.fst_td}><strong>치료 기전</strong></td>
                <td className={s.table_set_fir}>발목의 관절과 경막의 이완 → 발목과 전신 경막의 이완</td>
              </tr>
              <tr>
                <td className={s.fst_td}><strong>치료 효과</strong></td>
                <td className={s.table_set_se}>전신 이완</td>
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
