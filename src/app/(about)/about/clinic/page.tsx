import Header from "@/components/about/header/header";
import Clinicc from "@/components/about/clinic/clinic";

export default function Clinic() {
  return (
    <>
    <Header
         title={{ main: "본수호", sub: " 한의원" }}
         description="현대인들의 만성질환을 치료합니다."
       />
 
      <Clinicc />
    </>
  );
}
