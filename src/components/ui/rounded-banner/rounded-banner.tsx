import { cx } from "@/libs/utils";
import { HTMLAttributes } from "react";
import s from "./rounded-banner.module.scss";

export default function RoundedBanner(props: HTMLAttributes<HTMLElement>) {
  const { children, className } = props;

  return <div className={cx(s.wrapper, className ?? "")}>{children}</div>;
}
