import { cx } from "@/libs/utils";
import { HTMLAttributes } from "react";
import s from "./circle-text.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
  type: "orange" | "yellow";
}

export default function CircleText(props: Props) {
  const { children, className, type } = props;

  return (
    <div className={cx(s.circle, s[type], className ?? "")}>{children}</div>
  );
}
