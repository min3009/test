import Insurance from "@/components/common/insurance/insurance";
import Process from "@/components/common/process/process";
import System from "@/components/common/system/system";

export default function ExplainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Process />
      <System />
      <Insurance />
    </>
  );
}
