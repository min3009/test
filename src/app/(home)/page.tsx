import Hero from "@/components/home/hero/hero";
import Cst from "@/components/home/cst/cst";
import Solution from "@/components/home/solution/solution";
import Doctors from "@/components/home/doctors/doctors";
import Youtube from "@/components/home/youtube/youtube";
import Therapy from "@/components/home/therapy/therapy";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cst />
      <Solution />
      <Doctors />
      <Youtube />
      <Therapy />
    </main>
  );
}
