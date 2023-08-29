// 소아성장 클리닉
import Hero from "@/components/clinic/children/hero/hero";
import GrowthPlan from "@/components/clinic/children/growth-plan/growth-plan";
import GrowthPlan2 from "@/components/clinic/children/growth-plan2/growth-plan2";
import GrowTaller from "@/components/clinic/children/grow-taller/grow-taller";
import IncreaseImmnue from "@/components/clinic/children/increase-immune/increase-immune";
import Puberty from "@/components/clinic/children/puberty/puberty";
import AcademicHealth from "@/components/clinic/children/academic-health/academic-health";
import ChineseMedicine from "@/components/clinic/children/chinese-medicine/chinese-medicine";
import SpecialChoona from "@/components/clinic/children/special-choona/special-choona";
import SoahProcess from "@/components/clinic/children/soah-process/soah-process";
import SoahSolution from "@/components/clinic/children/soah-solution/soah-solution";
import QnA from "@/components/clinic/children/qna/qna";

export default function Children() {
  return (
    <>
      <Hero />
      <GrowthPlan />
      <GrowthPlan2 />
      <GrowTaller />
      <IncreaseImmnue />
      <Puberty />
      <AcademicHealth />
      <ChineseMedicine />
      <SpecialChoona />
      <SoahProcess />
      <SoahSolution />
      <QnA />
    </>
  );
}
