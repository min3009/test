import Header from "@/components/about/header/header";
import Doctor from "@/components/about/doctor/doctor";

export default function Doctors() {
  return (
    <>
     <Header
         title={{ main: "의료진", sub: " 소개" }}
         description="본수호의 원천 기술은 사람입니다."
       />
      <Doctor />
    </>
  );
}
