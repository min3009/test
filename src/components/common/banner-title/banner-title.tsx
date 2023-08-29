import { HTMLAttributes } from "react";
import s from "./banner-title.module.scss";
import { cx } from "@/libs/utils";

export default function BannerTitle(props: HTMLAttributes<HTMLElement>) {
  const { children, className } = props;

  return <div className={cx(s.wrapper, className ?? "")}>{children}</div>;
}
