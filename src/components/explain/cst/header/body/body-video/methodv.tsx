import s from "./methodv.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";

const list = [
  "1. 수근부를 천골 S4 부분에 대고 손가락을 천골기저부에 접촉한다.",
  "2. 손바닥 전체로 천골을 살짝 눌러 접촉하고 움직임(굴곡/신전 등)을 느껴본다. (Spring Test)",
  "3. 굴신, 측굴, 회전이 잘 되는 쪽으로 끝까지 따라간다.",
  "※(Stacking. 이 때 펄스가 커지면 engage가 잘 되었다는 반증)",
  "4. 신천의 끝부분까지 따라가서 가볍게 압박하고 이완되면 손을 떼어준다.",
];


export default function Cst() {
   return (
     <>
       <Wrapper>
         <div className={s.vcontent}>
            <div className={s.vcontent_title}>
              <span>복와위 │ 천골~척추라인 경막 이완 기법</span>
            </div>
            <div className={s.vcontent_vid}>
            <video src="#" muted controls></video>
            </div>
            <table className={s.vcontent_table}>
              <tbody>
              <tr>
                <td className={s.fst_td}><strong>해부 생리</strong></td>
                <td className={s.table_set_fir}>천골 S2~4에서 하복부를 담당하는 부교감신경이 나온다.</td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <td className={s.fst_td}><strong>치료 기전</strong></td>
                <td className={s.table_set_fir}>천골의 가동성 증가 → 부교감신경의 활성화 → 하복부 장기의 기능 개선</td>
              </tr>
              <tr>
                <td className={s.fst_td}><strong>치료 효과</strong></td>
                <td className={s.table_set_se}>부교감신경 활성화/교감신경 안정<br />하복부 통증, 잦은 방광염, 불임, 치질, 성기능 저하</td>
              </tr>
              <tr>
                <td className={s.fst_td}><strong>치료 방법</strong></td>
                <td className={s.table_set_se}>
                <ol>
                {list.map((item) => (
                  <li key={`mothod-${item}`}>
                     {item}
                  </li>
                ))}
                  </ol>
                </td>
              </tr>
              </tbody>
              </table>
            </div>
       </Wrapper>
     </>
   );
 }
 