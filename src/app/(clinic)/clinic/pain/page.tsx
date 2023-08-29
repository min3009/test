import Normalize from "@/components/clinic/accident/normalize/normalize";
import Accident_process from "@/components/clinic/common/accident_process/accident_process";
import Clinic_cst from "@/components/clinic/common/cst/clinic_cst";
import System_clinic from "@/components/clinic/common/system_clinic/system_clinic";
import Pain_main from "@/components/clinic/pain/pain_main/pain_main";
import Pain_main2 from "@/components/clinic/pain/pain_main2/pain_main2";
import Insurance from "@/components/common/insurance/insurance";
import Process from "@/components/common/process/process";

export default function Pain() {
  return (
    <>
      <Pain_main />
      <Normalize />
      <Pain_main2 />
      <Process />
      <System_clinic />
      <Clinic_cst />
      <Accident_process />
      <Insurance />
    </>
  );
}
