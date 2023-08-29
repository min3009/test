import { cx } from "@/libs/utils";
import { HTMLAttributes } from "react";
import s from "./call-out.module.scss";

interface CallOutProps extends HTMLAttributes<HTMLElement> {}

export default function CallOut(props: CallOutProps) {
  const { className, children } = props;

  return <p className={cx(s.call_out, className ?? "")}>{children}</p>;
}
