import Image from "next/image";
import s from "./doctor.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";

const list = [
  "전주 상산고졸",
  "서울대 지구과학교육과 (1993년 입학)",
  "성균관대 법학과 (1997년 입학)",
  "원광대 한의과대학 (1998년 입학)",
  "원광대 한의과대학원 석사",
  "전) 전주 약선당한의원대표원장",
  "대한척추신경추나학회교육의원, 두 개천골분과총무",
  "자격증: NPL, 아봐타, 비전마스터",
  "3급 페도티스트(신발치료사)자격증",
  "전주시장 표창2회, 한의사협회장 표창 1회",
];

const list_se = [
  "광주여고 졸업",
  "원광대학교 한의과대학, 동대학원 졸업(침구학석사)",
  "원광대학교 광주한방병원 침구과전문의 취득",
  "전) 원광대 광주한방병원 침구2과장",
  "전) 광주 첨단한방병원 진료과장",
  "전) 순천 평화병원 한방과장",
  "전) 유앤그린한의원대전본원진료원장",
  "대한침구의학회정회원",
  "대한약침학회정회원",
  "대한척추신경추나의학회정회원",
  "대한모유수유한의학회– 모유수유지도 한의사 국제자격증",
];

const list_th = [
  "전주 전일고등학교 졸업",
  "서울대학교 공과대학 (93년 입학)",
  "경희대학교 한의학대학 졸업",
  "미국 미시간주립대학교(MSU) 정골의학대학 연구학자",
  " (수기의학, 재활의학 2018-2020) ",
  "전) 인동한의원 원장",
  "전) 힘찬큐한방병원 진료원장",
  "전) 미사경희한방병원 진료원장",
  "전) 일이삼한방병원 진료원장",
  "대한 척추신경추나의학회 교육위원, CIQ 공인 인증 강사",
  "사단법인 한방해외의료 봉사단 (KOMSTA 회원)",
];

export default function Doctors() {
  return (
    <>
      <div className={s.page}>
        <Wrapper className={s.main}>
          <div className={s.doctor_info}>
            <div>
              <Image
                src="/assets/doctor1.png"
                alt="대표원장 박수호"
                width={386}
                height={600}
              />
            </div>
            <div className={s.content}>
              <h1 className={s.title}>
                <span>대표원장</span> <strong>박수호</strong>
              </h1>
              <hr className={s.hr} />
              <ol className={s.doctor_history}>
                {list.map((item) => (
                  <li key={`doctor-${item}`}>
                    <span>&#183;</span> {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* <div className={s.table_wrapper}> */}
          <table className={s.time_table}>
            <thead className={s.table_head}>
              <tr>
                <th scope="cols">시간</th>
                <th scope="cols">월</th>
                <th scope="cols">화</th>
                <th scope="cols">수</th>
                <th scope="cols">목</th>
                <th scope="cols">금</th>
                <th scope="cols">토</th>
                <th scope="cols">일</th>
              </tr>
            </thead>
            <tbody className={s.table_body}>
              <tr>
                <td className={s.time}>오전[09:30~13:00]</td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td className={s.table_row} rowSpan={3}>
                  휴진
                </td>
              </tr>
              <tr>
                <td className={s.time}>오후[13:00~18:00]</td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
              </tr>
              <tr>
                <td className={s.time}>저녁[18:00~20:00]</td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td className={s.noti}>토요일 17:00 까지 진료</td>
              </tr>
            </tbody>
          </table>
          {/* </div> */}
        </Wrapper>
      </div>

      <div className={s.page}>
        <Wrapper className={s.main}>
          <div className={s.doctor_info}>
            <div>
              <Image
                src="/assets/doctor2.png"
                alt="진료원장 장은하"
                width={386}
                height={600}
              />
            </div>
            <div className={s.content}>
              <h2 className={s.title}>
                <span>진료원장</span> <strong>장은하</strong>
              </h2>
              <hr className={s.hr} />
              <ol className={s.doctor_history_ot}>
                {list_se.map((item) => (
                  <li key={`doctor-${item}`}>
                    <span>&#183;</span> {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* <div className={s.table_wrapper}> */}
          <table className={s.time_table}>
            <thead className={s.table_head}>
              <tr>
                <th scope="cols">시간</th>
                <th scope="cols">월</th>
                <th scope="cols">화</th>
                <th scope="cols">수</th>
                <th scope="cols">목</th>
                <th scope="cols">금</th>
                <th scope="cols">토</th>
                <th scope="cols">일</th>
              </tr>
            </thead>
            <tbody className={s.table_body}>
              <tr>
                <td className={s.time}>오전[09:30~13:00]</td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td className={s.table_row} rowSpan={3}>
                  휴진
                </td>
              </tr>
              <tr>
                <td className={s.time}>오후[13:00~18:00]</td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
              </tr>
              <tr>
                <td className={s.time}>저녁[18:00~20:00]</td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td className={s.noti}>토요일 17:00 까지 진료</td>
              </tr>
            </tbody>
          </table>
          {/* </div> */}
        </Wrapper>
      </div>

      <div className={s.page}>
        <Wrapper className={s.main}>
          <div className={s.doctor_info}>
            <div>
              <Image
                src="/assets/doctor3.png"
                alt="진료원장 박진호"
                width={386}
                height={600}
              />
            </div>
            <div className={s.content}>
              <h3 className={s.title}>
                <span>진료원장</span> <strong>박진호</strong>
              </h3>
              <hr className={s.hr} />
              <ol className={s.doctor_history_ot}>
                {list_th.map((item) => (
                  <li key={`doctor-${item}`}>
                    <span>&#183;</span> {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* <div className={s.table_wrapper}> */}
          <table className={s.time_table}>
            <thead className={s.table_head}>
              <tr>
                <th scope="cols">시간</th>
                <th scope="cols">월</th>
                <th scope="cols">화</th>
                <th scope="cols">수</th>
                <th scope="cols">목</th>
                <th scope="cols">금</th>
                <th scope="cols">토</th>
                <th scope="cols">일</th>
              </tr>
            </thead>
            <tbody className={s.table_body}>
              <tr>
                <td className={s.time}>오전[09:30~13:00]</td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td className={s.table_row} rowSpan={3}>
                  휴진
                </td>
              </tr>
              <tr>
                <td className={s.time}>오후[13:00~18:00]</td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
              </tr>
              <tr>
                <td className={s.time}>저녁[18:00~20:00]</td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span></span>
                </td>
                <td className={s.noti}>토요일 17:00 까지 진료</td>
              </tr>
            </tbody>
          </table>
          {/* </div> */}
        </Wrapper>
      </div>
    </>
  );
}
