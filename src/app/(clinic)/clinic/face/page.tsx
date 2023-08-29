import Hero from "@/components/clinic/face-clinic/hero/hero";
import GeneralCuration from "@/components/clinic/face-clinic/general-curation/general-curation";
import CurationStep from "@/components/clinic/face-clinic/curation-step/curation-step";
import DiseaseStep from "@/components/clinic/face-clinic/disease-step/disease-step";
import AfterEffect from "@/components/clinic/face-clinic/after-effect/after-effect";
import Possibility from "@/components/clinic/face-clinic/possibility/possibility";
import GoldenTime from "@/components/clinic/face-clinic/golden-time/gloden-time";
import Process from "@/components/common/process/process";
import System_clinic from "@/components/clinic/common/system_clinic/system_clinic";
import Clinic_cst from "@/components/clinic/common/cst/clinic_cst";

export default function Face() {
  return (
    <>
      <Hero />
      <GeneralCuration />
      <CurationStep />
      <DiseaseStep />
      <AfterEffect />
      <Possibility />
      <GoldenTime />
      <Process />
      <System_clinic />
      <Clinic_cst />
    </>
  );
}
