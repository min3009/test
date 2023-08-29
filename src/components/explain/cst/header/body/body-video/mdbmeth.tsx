import BannerTitle from "@/components/common/banner-title/banner-title";
import s from "./mdbmeth.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";


const list = [
   "1. 후두골과 C1의 관절면을 LAS 방식으로 푼다.",
   "-한 손으로 두개골을 감싸고 다른 손으로 후두하를 쥐고 가볍게 관절면을 눌러주며 회전,측굴, 굴신이 잘되는 쪽으로 끝까지 따라간다.",
   "-살짝 압력을 줄이며 관절 내부에서 밀어내는 리듬을 느끼고 확장기에 양 손을 떼어준다.",
   "2. 후두골을 살짝 신전(필요시 측굴)하여 펄스를 느끼고 박동이 커지도록 미세조정한 후 일정시간 기다린다.",
   
]

export default function Cst() {
   return (
     <>
       <Wrapper>
         <BannerTitle className={s.title}>
            <span>복와위 │ MDB (Myodural Bridge ≒ OA LAS)</span>
         </BannerTitle>
         <div className={s.vcontent_vid}>
            <video src="#" muted controls></video>
            </div>
            <table className={s.vcontent_table}>
              <tbody>
              <tr>
                <td className={s.fst_td}><strong>해부 생리</strong></td>
                <td className={s.table_set_fir}>MDB : 경추 1~2번 후면의 경막과 후두하근육을 연결시키는 작은 근육</td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <td className={s.fst_td}><strong>치료 기전</strong></td>
                <td className={s.table_set_fir}>후두하 근육이완 → MDB 이완 → 경막 이완, 상경신경절(SCG) 이완, 미주신경 이완</td>
              </tr>
              <tr>
                <td className={s.fst_td}><strong>치료 효과</strong></td>
                <td className={s.table_set_se}>부교감신경 활성화/교감신경 안정 <br /> 심박동안정, 소화기능 촉진, 호흡 안정, 안면부기능 개선</td>
              </tr>
              <tr>
                <td className={s.fst_td}><strong>치료 방법</strong></td>
                <td className={s.table_set_se}>
                  <ol>
                {list.map((item) => (
                  <li key={`mdbmeth-${item}`}>
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




