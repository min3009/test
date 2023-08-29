import Header from "@/components/about/header/header";
import FindUsComponent from "@/components/about/find-us/find-us";

export default function FindUs() {
  return (
    <>
      <Header
        title={{ main: "진료안내 및", sub: " 찾아오시는 길" }}
        description="본수호는 여러분과 함께합니다."
      />

      <FindUsComponent />
    </>
  );
}
