import BannerTitle from "@/components/common/banner-title/banner-title";
import s from "./t3meth.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";

const list = [
   "1. 양 손바닥이나 양 손날로 흉추 3~5번 부위/날개뼈에 대고 가볍게 눌러 교감신경절까지 engage한다.",
   "2. 폐나 심장 부위에 이상이 있는 경우 양쪽이나 한쪽이 꺼지는 느낌을 받게 되는데 지나친 압박에 주의하며 끝까지 따라가서 engage한다.",
   "3. 일정시간이 나나면 밀어내는 힘을 느끼게 되는데 이때 가볍게 손의 압력을 낮춘다.",
   "이 과정을 2-3회 반복한다."
]

export default function Cst() {
   return (
     <>
       <Wrapper>
         <BannerTitle className={s.title}>
            <span>복와위 │흉추/날개뼈 기법 (T3-5)</span>
         </BannerTitle>
         <div className={s.vcontent_vid}>
            <video src="#" muted controls></video>
            </div>
            <table className={s.vcontent_table}>
              <tbody>
              <tr>
                <td className={s.fst_td}><strong>해부 생리</strong></td>
                <td className={s.table_set_fir}>흉추 3~5번에서 심장과 폐를 담당하는 교감신경이 나온다.경추 회전시 흉추 4번까지 같이 움직인다.</td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <td className={s.fst_td}><strong>치료 기전</strong></td>
                <td className={s.table_set_fir}>흉추 주위 근육 이완 → 교감신경 안정 → 심폐기능 개선</td>
              </tr>
              <tr>
                <td className={s.fst_td}><strong>치료 효과</strong></td>
                <td className={s.table_set_se}>교감신경과 부교감신경의 조화 <br />빈맥, 과호흡, 부정맥</td>
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
