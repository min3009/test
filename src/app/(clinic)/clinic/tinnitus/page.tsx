import Clinic_cst from "@/components/clinic/common/cst/clinic_cst";
import HearingLoss from "@/components/clinic/tinnitus/hearing-loss/hearing-loss";
import HearingTest from "@/components/clinic/tinnitus/hearing-test/hearing-test";
import Hero from "@/components/clinic/tinnitus/hero/hero";
import QnA from "@/components/clinic/tinnitus/qna/qna";
import RequiredTest from "@/components/clinic/tinnitus/required-test/required-test";
import Review from "@/components/clinic/tinnitus/review/review";
import Rotation from "@/components/clinic/tinnitus/rotation/rotation";
import SoahSolution from "@/components/clinic/tinnitus/soah-solution/soah-solution";
import TemporalBone from "@/components/clinic/tinnitus/temporal-bone/temporal-bone";

export default function Tinnitus() {
  return (
    <>
      <Hero />
      <HearingLoss />
      <TemporalBone />
      <Rotation />
      <HearingTest />
      <RequiredTest />
      <SoahSolution />
      <QnA />
      <Review />
      <Clinic_cst />
    </>
  );
}
