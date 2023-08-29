import System from "@/components/common/system/system";
import System_plus from "../system_plus/system_plus";
import s from "./system_clinic.module.scss";

export default function System_clinic() {
  return (
    <>
      <System className={s.margin} />
      <System_plus />
    </>
  );
}
