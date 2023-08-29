"use client";

import s from "./call.module.scss";
import Wrapper from "@/components/ui/wrapper/wrapper";

export default function Call() {
  return (
    <div className={s.background}>
      <Wrapper>
        <div className={s.total}>
          <div className={s.title}>빠른 전화상담 신청</div>
          <form className={s.form}>
            <div className={s.item}>
              <div className={s.item_text}>진료과목</div>
              <div className={s.circle}></div>
              <select required defaultValue="none" className={s.dropdown}>
                <option disabled value="none">
                  선택
                </option>
                <option>blah</option>
              </select>
            </div>
            <div className={s.item}>
              <div className={s.item_text}>이름</div>
              <div className={s.circle}></div>
              <input type="text" className={s.name_input} />
            </div>
            <div className={s.item}>
              <div className={s.item_text}>연락처</div>
              <div className={s.circle}></div>
              <input type="tel" className={s.tel_input} />
              <input type="submit" value="신청하기" className={s.submit} onClick={() => alert("신청되었습니다.")} />
            </div>
          </form>
        </div>
      </Wrapper>
    </div>
  );
}
