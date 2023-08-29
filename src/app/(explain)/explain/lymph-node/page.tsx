// 림프절이란 page
import Lymph_hero from "@/components/explain/lymph-node/lymph-structure/lymph-structure"
import Lymph_what from "@/components/explain/lymph-node/what-lymph/what-lymph"
import Lymph_func from "@/components/explain/lymph-node/lymph-function/lymph-function"
import Lymph_edema from "@/components/explain/lymph-node/lymphedema/lymphedema"
import Lymph_manage from "@/components/explain/lymph-node/lymph-manage/lymph-manage"



export default function LymphNode() {
  return (
    <>
      <Lymph_hero />
      <Lymph_what />
      <Lymph_func />
      <Lymph_edema />
      <Lymph_manage />
    </>
  );
}
