import Image from "next/image";
import { HTMLAttributes } from "react";
import s from "./diagnosis-process-list.module.scss";
import BannerTitle from "@/components/common/banner-title/banner-title";

interface List {
  title: string;
  image: string;
  lists: Array<string>;
  descriptions: Array<string>;
}

interface DiagnosisProcessProps extends HTMLAttributes<HTMLElement> {
  lists: Array<List>;
}

export default function DiagnosisProcessList(props: DiagnosisProcessProps) {
  const { className, lists } = props;

  return (
    <div className={className}>
      <div className={s.card_list_wrapper}>
        {lists.map((item) => (
          <div key={`소아진료-${item.title}`} className={s.card}>
            <BannerTitle className={s.banner}>{item.title}</BannerTitle>

            <Image
              src={`/assets/${item.image}.png`}
              alt={`소아진료-${item.title}`}
              width={560}
              height={420}
              className={s.image}
            />

            <ul className={s.list_wrapper}>
              {item.lists.map((list) => (
                <li key={`list-${list}`} className={s.list_item}>
                  {list}
                </li>
              ))}
            </ul>

            <div className={s.desc_wrapper}>
              {item.descriptions.map((desc) => (
                <p key={`desc-${desc}`} className={s.desc_item}>
                  {desc}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
