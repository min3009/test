// 교통사고 page
import Accident_checklist from "@/components/clinic/accident/accident_checklist/accident_checklist";
import Accident_main from "@/components/clinic/accident/accident_main/accident_main";
import Accident_main2 from "@/components/clinic/accident/accident_main2/accident_main2";
import Accident_step from "@/components/clinic/accident/accident_step/accident_step";
import Normalize from "@/components/clinic/accident/normalize/normalize";
import Accident_process from "@/components/clinic/common/accident_process/accident_process";
import Clinic_cst from "@/components/clinic/common/cst/clinic_cst";
import System_clinic from "@/components/clinic/common/system_clinic/system_clinic";
import Insurance from "@/components/common/insurance/insurance";
import Process from "@/components/common/process/process";

export default function Accident() {
  return (
    <>
      <Accident_main />
      <Normalize />
      <Accident_main2 />
      <Accident_step />
      <Accident_checklist />
      <Process />
      <System_clinic />
      <Clinic_cst />
      <Accident_process />
      <Insurance />
    </>
  );
}
