import Header from "@/components/about/header/header";
import Wrapper from "@/components/ui/wrapper/wrapper";
import LookAroundComponent from "@/components/about/look-around/look-around";

export default function LookAround() {
  return (
    <>
      <Header
        title={{ main: "본수호", sub: " 둘러보기" }}
        description="쾌적하고 치료에 집중할 수 있는 진료공간"
      />

      <LookAroundComponent />
    </>
  );
}
