import { HTMLAttributes, ReactNode } from "react";
import s from "./section-title.module.scss";
import { cx } from "@/libs/utils";

interface Props extends HTMLAttributes<HTMLElement> {
  description: string;
}

export default function SectionTitle(props: Props) {
  const { description, children, className } = props;

  return (
    <div className={cx(s.wrapper, className ?? "")}>
      <p className={s.description}>{description}</p>
      <h2 className={s.title}>{children}</h2>
    </div>
  );
}
