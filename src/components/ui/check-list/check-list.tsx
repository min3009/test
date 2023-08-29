import { cx } from "@/libs/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";
import s from "./check-list.module.scss";

interface Props extends HTMLAttributes<HTMLUListElement> {
  lists: Array<string>;
}

export default function CheckList(props: Props) {
  const { lists, className } = props;

  return (
    <ul className={cx(s.list, className ?? "")}>
      {lists.map((list) => (
        <li key={list} className={s.item}>
          <Image
            src="/assets/check.png"
            alt="check"
            width={50}
            height={50}
            className={s.checkbox}
          />
          <p>{list}</p>
        </li>
      ))}
    </ul>
  );
}
