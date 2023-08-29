import { HTMLAttributes } from "react";
import styles from "./wrapper.module.scss";
import { cx } from "@/libs/utils";

// interface  {
//   children: ReactNode;
// }

/** Max-width: 1200px */
export default function Wrapper(props: HTMLAttributes<HTMLElement>) {
  const { children, className } = props;

  return <div className={cx(styles.wrapper, className ?? "")}>{children}</div>;
}
