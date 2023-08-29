import Example from "@/components/therapy/example/example";
import Review from "@/components/therapy/review/review";
import s from "./therapy.module.scss";

export default function Therapy() {
  return (
    <>
      <Example className={s.border} />
      <Review className={s.border} />
    </>
  );
}
