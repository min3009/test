// 측두골이란 page
import Temporal_what from "@/components/explain/temporal-bone/what-temporal_bone/what-temporal_bone"
import Temporal_rotation from "@/components/explain/temporal-bone/temporal-rotation/temporal-rotation"
import Temporal_foramen from "@/components/explain/temporal-bone/foramen/foramen"
import Temporal_autonomic from "@/components/explain/temporal-bone/autonomic/autinomic"



export default function TemporalBone() {
  return (
    <>
      <Temporal_what />
      <Temporal_rotation />
      <Temporal_foramen />
      <Temporal_autonomic />
    </>
  );
}


